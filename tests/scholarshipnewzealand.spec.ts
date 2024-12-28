import { test, expect } from '@playwright/test';

test.describe('Test for the new zealand scholarship website', () => {

  test('Should open the website for scholarship and check if eligibility test is available or not ', async ({ page }) => {
    //Open the website
    await page.goto('https://nzscholarships.my.site.com/Scholar/s/eligibility-test');

    //Check if the website is opened and get by the CSS selector
    const closed = page.locator('xpath=//span[text()="The eligibility test and ability to create accounts is currently closed."]');
    
    let isEnabled = await closed.isEnabled();
    let isVisible= await closed.isVisible();

    expect(isEnabled).toBe(false);
    expect(isVisible).toBe(false);
    
  });
});
