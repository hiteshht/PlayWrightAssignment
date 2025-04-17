import { chromium, test, Page } from '@playwright/test';
import { error } from 'console';

test('drag and drop', async () => {
    const browser = await chromium.launch({ headless: false });
    const page = await browser.newPage();

    await page.goto('https://jqueryui.com/resources/demos/droppable/default.html');

    // await page.locator('#draggable').dragTo(page.locator('#droppable'));

    // await page.locator('#draggable').hover();
    // await page.mouse.down();
    // await page.locator('#droppable').hover();
    // await page.mouse.up();

    const source = page.locator('#draggable');
    const target = page.locator('#droppable');

    const sourceBox = await source.boundingBox();
    if (!sourceBox) {
        throw new error("Source Box is null");
    }

    const targetBox = await source.boundingBox();
    if (!targetBox) {
        throw new error("Target Box is null");
    }

    await page.mouse.move(targetBox.x + targetBox.width / 2, targetBox.y + targetBox.height / 2);
    await page.mouse.down();
    await page.mouse.move(sourceBox.x + sourceBox.width / 2, sourceBox.y + sourceBox.height / 2)
    await page.mouse.up();
});
