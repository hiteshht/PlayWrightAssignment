import { test, Locator } from "@playwright/test"

test("locator", async ({ page }) => {

    try {
        await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/register");

        //id Locators
        const firstname: Locator = page.locator("id=input-firstname");
        const lastname: Locator = page.locator("id=input-lastname");

        await firstname.fill("Hitesh");
        await lastname.fill("talesra");

        //class Locators 

        const logo: Locator = page.locator(".img-responsive");
        console.log("Class Check : ", await logo.isEnabled());

        // Text Locator

        const continueBtn: Locator = page.locator("text=Continue");
        console.log("Continue Button Check", await continueBtn.isEnabled());

        const registerAccount: Locator = page.locator("text=Register Account");
        console.log("Register account check", await registerAccount.isEnabled());

        //CSS Locators 
        const email: Locator = page.locator("css=input#input-email");
        console.log("Email check", await email.isEnabled());

        const telephone: Locator = page.locator("input[name='telephone']")
        console.log("TelePhone check", await telephone.isEnabled());

        //XPath Locators

        const password: Locator = page.locator("xpath = //input[@id='input-password']");
        console.log("Password check", await password.isEnabled());

        const search: Locator = page.locator("//input[@name='search' and @type='text']");
        console.log("Search check", await search.isEnabled());
    }
    catch (err) {
        console.log("there is an error", err);
    }
})