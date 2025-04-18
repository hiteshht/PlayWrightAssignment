import { test, Browser, BrowserContext, Page, chromium } from '@playwright/test'

test('focus element test', async ({ }) => {

    const browser: Browser = await chromium.launch({ headless: false, channel: 'chrome' })

    const page: Page = await browser.newPage();

    await page.goto('https://www.orangehrm.com/30-day-free-trial');

    await page.getByPlaceholder('Your Full Name*').focus();
    await page.getByPlaceholder('Your Full Name*').fill('Automation Testing')

    await page.waitForTimeout(2000);

    await page.getByText('Contact Sales').last().focus();
    await page.getByText('Contact Sales').last().click();

    await page.waitForTimeout(2000);
})