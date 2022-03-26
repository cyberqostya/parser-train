const puppeteer = require('puppeteer');

async function startBrowser() {

	let browser;
	try {
    console.log("Открываю браузер...");
    browser = await puppeteer.launch({
        // executablePath: '/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome',
        timeout: 0,
        headless: true, // Браузер запускается с интерфейсом при установленном false
        ignoreHTTPSErrors: true // Игнор ошибок из-за использования незащищенного протокола
    });
	} catch (err) {
    console.log("Ошибка: ", err);
	}
	return browser;
}

module.exports = startBrowser;