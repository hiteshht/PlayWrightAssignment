import { test, expect, Page } from '@playwright/test'

test("ARIA Roles", async ({ browser }) => {

    try {
        const page: Page = await browser.newPage();

        await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/register");

        await expect(page.getByRole('heading', { name: 'Register Account' })).toBeVisible();

        await expect(page.getByRole('checkbox')).toBeVisible();
        await page.getByRole('checkbox').click();

        await expect(page.getByRole('radio', { name: 'Yes' })).toBeVisible();
        await page.getByRole('radio', { name: 'Yes' }).click();

        await expect(page.getByRole('radio', { name: 'no' })).toBeVisible();
        await page.getByRole('radio', { name: 'No' }).click();

        await expect(page.getByRole('button', { name: 'Continue' })).toBeVisible();
        await page.getByRole('button', { name: 'Continue' }).click;

        await expect(page.getByRole('link', { name: 'Forgotten Password' })).toBeVisible();
        await page.getByRole('link', { name: 'Forgotten Password' }).click();

    }
    catch (err) {
        console.log("an error occured :", err);
    }

})