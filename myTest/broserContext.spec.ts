import { test, Locator, Page, Browser, expect, BrowserContext } from "@playwright/test"

test("Login", async ({ browser }) => {

    const browserContext_1: BrowserContext = await browser.newContext();
    const page1: Page = await browserContext_1.newPage();

    try {

        await page1.goto(" https://www.saucedemo.com/")

        const username1: Locator = await page1.locator("#user-name");
        const password1: Locator = await page1.locator("#password");
        const loginButton1: Locator = await page1.locator("#login-button");

        await username1.fill("standard_user");
        await password1.fill("secret_sauce");
        await loginButton1.click();

        const title1 = await page1.title();

        await page1.screenshot({ path: 'page11.png' })

        expect(title1).toEqual("Swag Labs");
    }
    catch (err) {
        console.error("error in page 1", err);
    }
    finally {
        await browserContext_1.close();
    }

    const browserContext_2: BrowserContext = await browser.newContext();
    const page2: Page = await browserContext_2.newPage();

    try {

        await page2.goto(" https://www.saucedemo.com/")

        const username2: Locator = await page2.locator("#user-name");
        const password2: Locator = await page2.locator("#password");
        const loginButton2: Locator = await page2.locator("#login-button");

        await username2.fill("standard_user");
        await password2.fill("secret_sauce");
        await loginButton2.click();

        const title2 = await page2.title();

        await page2.screenshot({ path: 'page22.png' })

        expect(title2).toEqual("Swag Labs");
    }
    catch (err) {
        console.error("error in page 2", err);
    }
    finally {
        await browserContext_2.close();
    }


    await browser.close();

})