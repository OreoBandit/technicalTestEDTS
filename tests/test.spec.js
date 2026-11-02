import { test, expect } from "@playwright/test";

test("add to cart indomaret", async ({ page }) => {
  await page.goto("https://www.klikindomaret.com/", { waitUntil: "load" });
  // const popupButton = await page.locator("(//button[@aria-label='Close'])"); //get by xpath
  await page.locator("(//button[@aria-label='Close'])").click();
  //anticipate indomaret popup
  // if (await popupButton.isVisible()) {
  //   await popupButton.click();
  // }

  await page
    .locator(
      "//div[@class='absolute -top-2 flex h-[64px] cursor-pointer items-center justify-between gap-2 lg:order-1 lg:flex lg:w-auto']",
    )
    .hover();
  await page
    .locator("//button[@class='menu-list gap-x-2 menu-list-active']")
    .click();
  await page.locator("//div[normalize-space()='Madu']").click();
  await page.locator("//*[@id='default-card']").first().click();
  await page.getByRole("button", { name: "keranjang" }).click();
});
