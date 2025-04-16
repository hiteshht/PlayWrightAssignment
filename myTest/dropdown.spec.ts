import { test, Browser, BrowserContext, Page } from '@playwright/test'

test('dropdown selection test', async ({ browser }) => {

    const browserContext: BrowserContext = await browser.newContext();

    const page: Page = await browserContext.newPage();

    try {

        await page.goto("https://magupdate.co.uk/magazine-subscription/phrr");

        const countrySelect = 'select#Contact_CountryCode';

        // await page.selectOption(countrySelect, { value: 'AQ' });
        // await page.selectOption(countrySelect, { label: 'Argentina' })
        // await page.selectOption(countrySelect, { index: 5 })

        const allOptions = await page.$$(countrySelect + '> option')
        console.log(allOptions.length);

        for (const country of allOptions) {
            const text = await country.textContent();
            console.log(text);

            if (text === 'India') {
                await page.selectOption(countrySelect, { label: text })
                break;
            }
        }

        await page.goto('https://getbootstrap.com/docs/5.0/components/dropdowns/');

        const dropdownExample = page.locator('.bd-example .dropdown').first();

        await dropdownExample.locator('.dropdown-toggle').click();

        const item = dropdownExample.locator('.dropdown-menu .dropdown-item', { hasText: "Action" }).first();
        await item.click();

    }

    catch (err) {
        console.error("Error occured is : ", err);
    }
    finally {
        await browserContext.close();
    }









})