import { useScreenshot } from '../src/hooks/useScreenshot';

const { test } = require('@playwright/test');

test('visual regression test', async ({ page, context }) => {
  await page.goto('http://127.0.0.1:3000', { waitUntil: 'networkidle' });

  // ブラウザ毎にスナップショットを撮る
  const { screenShot } = useScreenshot(page, context);
  await screenShot('estimate.test.png');
  
  await page.screenshot({ path: '__screenshots__/screenshot.png', fullPage: true });
});

// import { test, expect } from '@playwright/test';

// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects the URL to contain intro.
//   await expect(page).toHaveURL(/.*intro/);
// });
