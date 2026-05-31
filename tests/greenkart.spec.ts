import { test, expect } from '@playwright/test';

test('GreenKart home page displays GREENKART and adds Carrot and Tomato to cart', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/');

  await expect(page.getByText('GREENKART', { exact: true })).toBeVisible();

  const carrotProduct = page.locator('div.product').filter({ hasText: 'Carrot' }).first();
  await expect(carrotProduct).toBeVisible();
  await carrotProduct.getByRole('button', { name: /ADD TO CART/i }).click();

  await page.waitForTimeout(3000);
  
  const tomatoProduct = page.locator('div.product').filter({ hasText: 'Tomato' }).first();
  await expect(tomatoProduct).toBeVisible();
  await tomatoProduct.getByRole('button', { name: /ADD TO CART/i }).click();

  await page.waitForTimeout(3000);

  await expect(page.locator('.cart-icon .cart-count')).toHaveText('2');

   await page.waitForTimeout(3000);

});
