import htmlContent from './formulaview.html?raw'; // Vite
// ou
// const htmlContent = require('./formulaview.html'); // Webpack com html-loader

document.body.innerHTML = htmlContent;