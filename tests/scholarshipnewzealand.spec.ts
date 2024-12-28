import { test, expect } from '@playwright/test';

test.describe('Test for the new zealand scholarship website', () => {
  test('Should open the website for scholarship', async ({ page }) => {
    await page.goto('https://nzscholarships.my.site.com/Scholar/s/eligibility-test');
  });
});
