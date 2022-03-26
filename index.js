const startBrowser = require('./browser');
const pageController = require('./pageController');

// Запуск экземпляра браузера
let browserInstance = startBrowser();

// Передача экземпляра браузера скраперу
pageController(browserInstance);


