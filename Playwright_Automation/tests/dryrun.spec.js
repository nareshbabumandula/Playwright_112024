//import { chromium } from 'playwright';
const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const context1 = await browser.newContext(); // Creates first isolated context
  const context2 = await browser.newContext(); // Creates second isolated context

  const page1 = await context1.newPage();
  const page2 = await context2.newPage();

  await page1.goto('https://example.com/user1');
  await page2.goto('https://example.com/user2');

  await browser.close();
})();