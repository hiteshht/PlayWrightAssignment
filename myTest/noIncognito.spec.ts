import { test, expect, Page, BrowserContext, chromium, Cookie } from '@playwright/test'

test("No-Incognito", async ({ browserName }) => {

    try {
        const dataDir = `./session-${browserName}-${Date.now()}`;

        const browser: BrowserContext = await chromium.launchPersistentContext(dataDir, { headless: false });

        let pages = await browser.pages();

        const page: Page = await pages[0];

        await page.goto(" https://www.saucedemo.com ");

        await page.locator("id=user-name").fill("Hitesh");
        await page.locator("id=password").fill("Talesra");

        const cookieData = await browser.cookies();

        console.log(cookieData);

        await page.waitForTimeout(3000);
    }
    catch (err) {
        console.error("Error occured is :", err);
    }


})