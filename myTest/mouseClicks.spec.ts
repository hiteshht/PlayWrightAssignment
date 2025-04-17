import { BrowserContext, chromium, Page, test } from '@playwright/test'


test('move item', async ({ }) => {
    const browserC: BrowserContext = await chromium.launchPersistentContext('', { headless: false, channel: 'chrome' })
    const page: Page = await browserC.newPage()

    try {
        await page.goto("https://www.bigbasket.com/");


        await page.getByText('Exotic Fruits & Veggies').first().click();

        await page.getByText('Tea').first().click({ button: 'right' })

        await page.getByText('Ghee').first().click({ modifiers: ['Shift'] })

        await page.getByText('Tea').first().hover();

        await page.goto("https://demo.guru99.com/test/simple_context_menu.html")

        await page.getByText('Double-Click Me To See Alert').dblclick();

        await page.goto("https://www.amazon.in/");

        // await page.getByText('MX Player').first().click();

        // await page.getByText('Sell').first().click({ button: 'right' })

        await page.getByText('Bestsellers').last().click({ modifiers: ['Shift'] })

        await page.getByText('Fresh').last().hover();
    }
    catch (err) {
        console.error("error occured is : ", err);
    }
    finally {
        await browserC.close();
    }
})
