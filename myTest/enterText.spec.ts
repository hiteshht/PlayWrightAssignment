import { test, Browser, BrowserContext, Page } from '@playwright/test'

test('dropdown selection test', async ({ browser }) => {

    const browserContext: BrowserContext = await browser.newContext();

    const page: Page = await browserContext.newPage();

    await page.goto(" https://testautomationpractice.blogspot.com/");

    await page.locator('#Wikipedia1_wikipedia-search-input').pressSequentially("macbook", { delay: 500 });

    await page.getByPlaceholder('Enter Name').pressSequentially('Hitesh', { delay: 500 });
    await page.getByPlaceholder('Enter EMail').pressSequentially('hitesh@gmail.com', { delay: 200 });

    const inputText = "sggafd";
    let delayPerText: number;

    if (inputText.length < 10) {
        delayPerText = 100;
    }
    else if (inputText.length < 15) {
        delayPerText = 75;
    }
    else {
        delayPerText = 50;
    }

    await page.locator('#textarea').pressSequentially(inputText, { delay: delayPerText });
});