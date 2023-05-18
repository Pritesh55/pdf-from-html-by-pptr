import puppeteer from 'puppeteer'

export async function GET(request) {

  const browser = await puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']})
  const page = await browser.newPage()

  await page.goto('https://pdf-from-html-by-pptr.vercel.app')
  await page.emulateMediaType('screen');

  const pdfBuffer = await page.pdf({
    format: 'A4', landscape: true, printBackground: true,
    margin: { top: '20px', right: '50px', bottom: '20px', left: '50px' },
  })

  await browser.close();

  return new Response(pdfBuffer)

}
