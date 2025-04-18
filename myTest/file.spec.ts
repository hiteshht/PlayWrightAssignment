import { test, Browser, BrowserContext, Page } from '@playwright/test'
import path from 'path';
import { buffer } from 'stream/consumers';

test('file upload', async ({ browser }) => {

    const browserContext: BrowserContext = await browser.newContext();

    const page: Page = await browserContext.newPage();

    await page.goto("https://testautomationpractice.blogspot.com/");

    await page.locator('#multipleFilesInput')
        .setInputFiles([
            path.join('/home/hitesh_talsera/Downloads/DesignPatternAssignment.docx'),
            path.join('/home/hitesh_talsera/Downloads/Agileassignment.docx')
        ]);
    await page.waitForTimeout(3000);

    await page.locator('#multipleFilesInput').setInputFiles([]);

    await page.waitForTimeout(3000);


    await page.locator('#singleFileInput').setInputFiles({
        name: 'file.txt',
        mimeType: 'text/plain',
        buffer: Buffer.from('this is a file')
    })

    await page.locator('#singleFileInput').setInputFiles('/home/hitesh_talsera/Downloads/vgsales.csv');
})  