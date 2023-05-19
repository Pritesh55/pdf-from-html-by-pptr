import puppeteer from 'puppeteer'
import chromium from 'chrome-aws-lambda';
import { NextResponse } from 'next/server';

export async function GET(request) {

  let result = null;
  let browser = null;

  try {
    browser = await chromium.puppeteer.launch({
      args: chromium.args,
      defaultViewport: chromium.defaultViewport,
      executablePath: await chromium.executablePath,
      headless: chromium.headless,
      ignoreHTTPSErrors: true,
    });

    let page = await browser.newPage();

    await page.goto('https://pdf-from-html-by-pptr.vercel.app');

    await page.emulateMediaType('screen');

    const pdfBuffer = await page.pdf({
      path: 'hn.pdf',
      format: 'A4', landscape: true, printBackground: true,
      margin: { top: '20px', right: '50px', bottom: '20px', left: '50px' },
    })

    return new Response(pdfBuffer);
  }

  catch (error) {
    return callback(error);
  }

  finally {
    if (browser !== null) {
      await browser.close();
    }
  }


  // const browser = await puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']})
  // const page = await browser.newPage()

  // await page.goto('https://pdf-from-html-by-pptr.vercel.app', {waitUntil: 'networkidle2'})
  // await page.emulateMediaType('screen');

  // const pdfBuffer = await page.pdf({
  //   path: 'hn.pdf',
  //   format: 'A4', landscape: true, printBackground: true,
  //   margin: { top: '20px', right: '50px', bottom: '20px', left: '50px' },
  // })

  // await browser.close();

  // return new Response(pdfBuffer)

}
