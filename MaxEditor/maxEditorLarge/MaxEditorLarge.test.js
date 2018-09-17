// import faker from 'faker';
// import puppeteer from 'puppeteer';

// const APP = 'http://localhost:3000/MaxEditor';

// const student = {
//   html: faker.name.words(),
//   css: faker.internet.words(),
//   javascript: faker.phone.words()
// };

// let page;
// let browser;
// const width = 1920;
// const height = 1080;

// beforeAll(async () => {
//   browser = await puppeteer.launch({
//     headless: false,
//     slowMo: 80,
//     args: [`--window-size=${width},${height}`]
//   });
//   page = await browser.newPage();
//   await page.setViewport({ width, height });
// });
// afterAll(() => {
//   browser.close();
// });

// describe('Code input forms', () => {
//   test(
//     'Student can input code',
//     async () => {
//       await page.goto(APP);
//       await page.waitForSelector('[data-test=contact-form]');
//       await page.click('input[name=name]');
//       // await page.type('input[name=name]', student.name);
//       // await page.click('input[name=email]');
//       // await page.type('input[name=email]', student.email);
//       // await page.click('input[name=tel]');
//       // await page.type('input[name=tel]', student.phone);
//       // await page.click('textarea[name=message]');
//       // await page.type('textarea[name=message]', student.message);
//       // await page.click('input[type=checkbox]');
//       // await page.click('button[type=submit]');
//       await page.waitForSelector('.modal');
//     },
//     16000
//   );
// });
