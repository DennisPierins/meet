import puppeteer from "puppeteer";

describe("show/hide an event details", () => {

  test('An event element is collapsed by default', async () => {
    const browser = await puppeteer.launch({
      executablePath: '/mnt/c/Users/denni/Desktop/chrome-win/chrome-win/chrome.exe'
    });

    const page = await browser.newPage();
    await page.goto('http://localhost:3000/');

    await page.waitForSelector('.event');

    const eventDetails = await page.$('.event .event-details');
    expect(eventDetails).toBeNull();
    browser.close();
  });
});