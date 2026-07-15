import { test, expect } from '@playwright/test';

test.describe('NeoMotion App Tests', () => {
  
  test('should navigate to /shop', async ({ page }) => {
    // Go to home page
    await page.goto('/');

    // Find and click the navbar Shop link
    const shopLink = page.getByRole('link', { name: /shop/i }).first();
    await shopLink.click();

    // Verify the URL is /shop
    await expect(page).toHaveURL(/.*shop/);

    // Verify shop page content (e.g. Pre-order button text)
    await expect(page.getByText(/PRE-ORDER Ease Band/i).first()).toBeVisible();
  });

  test('should not show App Store and Play Store buttons in Easeflow section', async ({ page }) => {
    // Go to home page
    await page.goto('/');

    // Verify the EaseflowApp section exists
    const easeflowSection = page.locator('#easeflow-app');
    await expect(easeflowSection).toBeVisible();

    // Assert that the Google Play and App Store buttons are not visible
    const googlePlayBtn = page.getByRole('link', { name: /google play/i });
    const appStoreBtn = page.getByRole('link', { name: /app store/i });

    await expect(googlePlayBtn).toBeHidden();
    await expect(appStoreBtn).toBeHidden();
  });

  test('should open and close chatbot modal', async ({ page }) => {
    // Go to home page
    await page.goto('/');

    // Click the chat icon in navbar (using first() since there is a mobile and desktop button)
    const chatBtn = page.getByLabel('Open Chat').first();
    await expect(chatBtn).toBeVisible();
    await chatBtn.click();

    // Verify chatbot modal opens and header is visible
    const chatbotHeader = page.getByRole('heading', { name: 'Ask Me' });
    await expect(chatbotHeader).toBeVisible();

    // Verify chatbot greeting message
    await expect(page.getByText(/Welcome to the world of MCT/i)).toBeVisible();

    // Close chatbot modal
    const closeBtn = page.getByLabel('Close');
    await closeBtn.click();

    // Verify chatbot modal is closed
    await expect(chatbotHeader).toBeHidden();
  });

  test('should submit contact form successfully', async ({ page }) => {
    // Mock the backend api request for the contact submission
    await page.route('**/api/contact', async route => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ success: true }),
      });
    });

    // Mock Google Apps Script contact URL
    await page.route('**/macros/s/**', async route => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ success: true }),
      });
    });

    // Go to contact page
    await page.goto('/contact');

    // Fill in the contact form
    await page.fill('#name', 'QA Tester');
    await page.fill('#email', 'tester@example.com');
    await page.fill('#phone', '9876543210');
    await page.fill('#message', 'This is an automated test message.');

    // Submit form
    const submitBtn = page.getByRole('button', { name: /send message/i });
    await submitBtn.click();

    // Verify success message
    const successMsg = page.getByText('Message sent successfully');
    await expect(successMsg).toBeVisible();
  });

  test('should navigate across main pages', async ({ page }) => {
    // Start at homepage
    await page.goto('/');
    await expect(page).toHaveTitle(/MCT/i);

    // Verify Team page direct access (since navbar button is hidden)
    await page.goto('/team');
    await expect(page).toHaveURL(/.*team/);

    // Navigate to Contact page via Navbar link
    await page.goto('/');
    const contactLink = page.getByRole('link', { name: /^contact$/i }).first();
    await contactLink.click();
    await expect(page).toHaveURL(/.*contact/);
  });

});
