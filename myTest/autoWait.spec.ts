import { test, expect, chromium, Browser, Page } from '@playwright/test';


test.use({ actionTimeout: 5000 });

test('Playwright auto-waiting demo with timeouts', async () => {
    const browser: Browser = await chromium.launch({ headless: false, channel: 'chrome' });
    const page: Page = await browser.newPage();


    page.setDefaultTimeout(10000);

    await page.goto('https://testautomationpractice.blogspot.com/');


    await page.getByPlaceholder('Enter EMail').fill('user@example.com');


    await page.locator('#sunday').check({ timeout: 5000 });


    try {
        await page.locator('#nonExistentElement').click({ timeout: 3000 });
    } catch (error) {
        console.error('Timeout error caught (as expected):', error.message);
    }

    await browser.close();
});
