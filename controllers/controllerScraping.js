const cheerio = require('cheerio');
const request = require('request-promise');
const { chromium } = require('playwright');


//cheerio
const requestHttp = async(req,res)=>{
const web = req.body;
 const response = await request({
    uri: 'https://www.npmjs.com/package/cheerio',
    transform : body => cheerio.load(body)
 });

 //cheerio nos permite extraer partes de la estructura html de una web sacando etiquetas para ver su contenido 
 const webTile = response('title');
 const webHeading = response('p');
 console.log (webHeading.text().trim());
 console.log(webTile.html())   
}

//playwright
const searchWerb = async (req,res) => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await browser.searchWerb

    //buscar pagina web
    await page.goto('https://www.nike.com/es/t/air-force-1-le-zapatillas-nino-a-r2kdvj/DH2920-111');
    //tomar captura de el sitio web 
    await page.screenshot({path : 'web.png'})


    //buscar palabra clave en la web 
     const content  = await page.textContent('[for="skuAndSize__26009270" ]')
     console.log(content.includes('EU 35.5'))
    await browser.close();
  

};
module.exports= {
    requestHttp,
    searchWerb
}