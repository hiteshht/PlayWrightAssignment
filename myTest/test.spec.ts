
import { test, expect, Locator } from "@playwright/test"

test('login-button', async ({ page }) => {

    await page.goto("https://www.saucedemo.com/");

    const emailId: Locator = await page.locator("#user-name");
    const password: Locator = await page.locator("#password");
    const loginButton: Locator = await page.locator("#login-button");

    await emailId.fill("standard_user");
    await password.fill("secret_sauce");
    await loginButton.click();

    const title = await page.title();

    await page.screenshot({ path: 'page.png' });

    expect(title).toEqual("Swag Labs");
})