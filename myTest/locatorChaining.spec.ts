import { test, Locator, Page, Browser, expect, BrowserContext } from "@playwright/test"

test("Login", async ({ browser }) => {

    try {
        const browserContext: BrowserContext = await browser.newContext();
        const page: Page = await browserContext.newPage();

        await page.goto("https://orangehrm.com/30-day-free-trial");

        // await page.locator('form#Form_getForm >> #Form_getForm_Name').fill("Hitesh");
        // await page.locator('form#Form_getForm >> text=Get Your Free Trial').click();

        const form = page.locator('form#Form_getForm');
        const fullname = page.locator('#Form_getForm_Name');
        const btn = page.getByRole('button', { name: 'Get Your Free Trial' });
        await form.locator(fullname).fill("Hitesh")
        await form.locator(btn).click();
        console.log(await form.locator(fullname).isVisible());
    }
    catch (err) {
        console.error("error occured id :", err);
    }

})