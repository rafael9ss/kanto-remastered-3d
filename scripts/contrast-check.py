import asyncio, json
from playwright.async_api import async_playwright

JS = r"""
() => {
  const cv=document.createElement('canvas');cv.width=cv.height=1;
  const c2=cv.getContext('2d',{willReadFrequently:true});
  const cache={};
  const parseRGB = (s) => {
    if(!s||s==='transparent') return null;
    if(cache[s]!==undefined) return cache[s];
    c2.clearRect(0,0,1,1); c2.fillStyle='#000'; c2.fillStyle=s;
    if(c2.fillStyle==='#000'&&!/#000|black|rgb\(0, 0, 0\)|oklch\(0 /.test(s)){}
    c2.clearRect(0,0,1,1); c2.fillRect(0,0,1,1);
    const d=c2.getImageData(0,0,1,1).data;
    const out={r:d[0],g:d[1],b:d[2],a:d[3]/255};
    cache[s]=out; return out;
  };
  const lum = (c) => {
    const f=(v)=>{v/=255;return v<=0.03928?v/12.92:Math.pow((v+0.055)/1.055,2.4)};
    return 0.2126*f(c.r)+0.7152*f(c.g)+0.0722*f(c.b);
  };
  const over = (fg,bg) => ({r:fg.r*fg.a+bg.r*(1-fg.a),g:fg.g*fg.a+bg.g*(1-fg.a),b:fg.b*fg.a+bg.b*(1-fg.a),a:1});
  const bgOf = (el) => {
    let cur = el, stack=[];
    while(cur){
      const cs=getComputedStyle(cur); const c=parseRGB(cs.backgroundColor);
      if(c && c.a>0){ stack.push(c); if(c.a===1) break; }
      cur = cur.parentElement;
    }
    let base={r:255,g:255,b:255,a:1};
    for(let i=stack.length-1;i>=0;i--) base=over(stack[i],base);
    return base;
  };
  const ratio=(a,b)=>{const l1=lum(a),l2=lum(b);return (Math.max(l1,l2)+0.05)/(Math.min(l1,l2)+0.05)};
  const out=[];
  document.querySelectorAll('body *').forEach(el=>{
    const txt=Array.from(el.childNodes).filter(n=>n.nodeType===3).map(n=>n.textContent.trim()).join(' ').trim();
    if(!txt) return;
    const r=el.getBoundingClientRect(); if(r.width<1||r.height<1) return;
    const cs=getComputedStyle(el);
    if(cs.visibility==='hidden'||cs.display==='none'||parseFloat(cs.opacity)===0) return;
    const fg0=parseRGB(cs.color); if(!fg0) return;
    const bg=bgOf(el); const fg=over(fg0,bg);
    const cr=ratio(fg,bg);
    const size=parseFloat(cs.fontSize); const weight=parseInt(cs.fontWeight)||400;
    const large = size>=24 || (size>=18.66 && weight>=700);
    const aa = large?3:4.5, aaa = large?4.5:7;
    if(cr < aaa) out.push({txt:txt.slice(0,60), cr:+cr.toFixed(2), aa:cr>=aa, aaa:false, size, weight,
      color:cs.color, bg:`rgb(${Math.round(bg.r)},${Math.round(bg.g)},${Math.round(bg.b)})`,
      cls:(el.className&&el.className.baseVal!==undefined?el.className.baseVal:el.className||'').toString().slice(0,120)});
  });
  return out;
}
"""

async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch(headless=True)
        ctx = await b.new_context(viewport={"width":390,"height":1800})
        pg = await ctx.new_page()
        await pg.goto("http://localhost:8080/", wait_until="networkidle")
        await pg.wait_for_timeout(1500)
        res = await pg.evaluate(JS)
        fails=[r for r in res if not r["aa"]]
        print("AA FAILURES:", len(fails))
        for r in fails: print(json.dumps(r, ensure_ascii=False))
        print("--- AAA-only shortfalls:", len(res)-len(fails))
        for r in res:
            if r["aa"]: print(json.dumps(r, ensure_ascii=False))
        await b.close()
asyncio.run(main())
