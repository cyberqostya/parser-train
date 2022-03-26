const pageScraper = require('./pageScraper');
const login = require('./login');
const fs = require('fs');

async function pageController(browserInstance){
	let browser;
	try{
		browser = await browserInstance;
    // await login.login(browser); Попытка залогиниться
		const scrapedData = await pageScraper(browser);	
		await browser.close();
    
    // Запись результатов парсинга в .json
    fs.writeFile('./data/data.json', JSON.stringify(scrapedData, null, '\t'), 'utf8', (error) => {
      if(error) return console.log(error);
      console.log('Данные успешно собраны и сохранены!');
    })
	}
	catch(err){
		throw err;
	}
}

module.exports = (browserInstance) => pageController(browserInstance)