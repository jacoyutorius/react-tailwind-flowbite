import { useScreenshot } from '../src/hooks/useScreenshot';

const { test } = require('@playwright/test');

test('visual regression test', async ({ page, context }) => {
  await page.goto('http://127.0.0.1:3000', { waitUntil: 'networkidle' });

  // ブラウザ毎にスナップショットを撮る
  const { screenShot } = useScreenshot(page, context);
  await screenShot('home.png');
});