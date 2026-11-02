import { test, expect } from "@playwright/test";

test("search playwright on google", async ({ page }) => {
  await page.goto("https://www.google.com/");
  await expect(page.locator("(//textarea[@id='ti6dpd'])[1]")).toBeVisible();
  await page.locator("(//textarea[@id='ti6dpd'])[1]").fill("playwright");
  await page.keyboard.press("Enter");
  //   await expect(page.locator("(//textarea[@id='ti6dpd'])[1]")).();
});
