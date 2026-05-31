import { test, expect } from '@playwright/test';

test('IRCTC Alerts tab shows Boarding Station Change', async ({ page }) => {
  await page.goto('https://www.irctc.co.in/nget/train-search');

  await page.getByText('ALERTS', { exact: true }).click();

  await expect(page.getByText('Boarding Station Change :', { exact: true })).toBeVisible();

  await page.waitForTimeout(10000);

  await page.close();
});
