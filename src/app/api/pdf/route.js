import puppeteer from 'puppeteer'

export async function GET(request) {

  const browser = await puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']})
  const page = await browser.newPage()

  await page.goto('https://www.github.com')
  await page.emulateMediaType('screen');

  const pdfBuffer = await page.pdf({
    format: 'A4', landscape: true, printBackground: true,
    margin: { top: '100px', right: '50px', bottom: '100px', left: '50px' },
  })

  await browser.close();

  return new Response(pdfBuffer)

}
