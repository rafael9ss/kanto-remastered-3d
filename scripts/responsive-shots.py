"""Gera screenshots responsivos da landing (mobile/tablet/desktop),
em modo normal e alto contraste, para revisão rápida de legibilidade.

Uso: python scripts/responsive-shots.py [url] [outdir]
"""

import asyncio
import sys
from pathlib import Path

from playwright.async_api import async_playwright

URL = sys.argv[1] if len(sys.argv) > 1 else "http://localhost:8080/"
OUT = Path(sys.argv[2] if len(sys.argv) > 2 else "/mnt/documents/screenshots")

VIEWPORTS = [
    ("mobile", 390, 1800),
    ("tablet", 820, 1800),
    ("desktop", 1440, 1800),
]


async def shoot(browser, name, width, height, high_contrast):
    ctx = await browser.new_context(
        viewport={"width": width, "height": height},
        device_scale_factor=2 if width < 500 else 1,
    )
    page = await ctx.new_page()
    await page.goto(URL, wait_until="domcontentloaded")
    if high_contrast:
        await page.evaluate("localStorage.setItem('pkm-high-contrast','1')")
        await page.reload(wait_until="domcontentloaded")
    await page.wait_for_timeout(2500)
    # força carregamento de imagens lazy
    await page.evaluate(
        "async () => { const step = window.innerHeight;"
        " for (let y = 0; y < document.body.scrollHeight; y += step) {"
        " window.scrollTo(0, y); await new Promise(r => setTimeout(r, 250)); }"
        " window.scrollTo(0, 0); }"
    )
    await page.wait_for_timeout(800)
    total = await page.evaluate("document.body.scrollHeight")
    mode = "hc" if high_contrast else "normal"
    index = 0
    y = 0
    while y < total:
        await page.evaluate(f"window.scrollTo(0, {y})")
        await page.wait_for_timeout(400)
        path = OUT / f"{name}-{mode}-{index:02d}.png"
        await page.screenshot(path=str(path))
        print("saved", path)
        y += height
        index += 1
    await ctx.close()


async def main():
    OUT.mkdir(parents=True, exist_ok=True)
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        for name, w, h in VIEWPORTS:
            for hc in (False, True):
                await shoot(browser, name, w, h, hc)
        await browser.close()


asyncio.run(main())
