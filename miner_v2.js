const cors = require('cors')
//const axios = require('axios') 
const express = require('express')
const app = express()
const port = 3060
const puppeteer = require('puppeteer')

app.use(cors())

/*Rota*/
app.get('/cripto', async(req, res) => {
    try {
        /*Chama o Browser em primeiro plano { headless: false } o pabrão é { headless: true }, 
        nesse caso como de padrão estamos o utilizando o Chromium que é instalado junto a biblioteca.*/
        const browser = await puppeteer.launch({ headless: false });

        /*Abri uma nova aba no navgeador*/
        const page = await browser.newPage();

        /*Inseri o link abaixo*/
        await page.goto('https://br.investing.com/crypto/currencies');

        /*Atribui uma variável para receber o retorno de page.evaluate(), ela é uma função de retorno de chamada, 
        onde podemos adicionar o código necessário para recuperar os elementos da página que precisamos.*/
        const miner = await page.evaluate(()=>{

            /*Criamos um novo array*/
            const newArray = [];

            /*Atribui uma variável para receber as linhas da tabela*/
            const data = document
            .querySelectorAll('#fullColumn > div:nth-child(14) > table > tbody > tr')

            /*Usei um .forEach() para percorrer os campos específicos que precisei e atribui as suas variáveis.*/
            data.forEach(item => {
                const currencyCripto = item.querySelector('td.left.bold.elp.name.cryptoName.first.js-currency-name').innerText
                const currencyCod = item.querySelector('td.left.noWrap.elp.symb.js-currency-symbol').innerText
                const price = item.querySelector('td.price.js-currency-price').innerText
                const marketCap = item.querySelector('td.js-market-cap').getAttribute('data-value')
                const vol24h = item.querySelector('td.js-24h-volume').getAttribute('data-value')
                const iDate = Date.now()

                /*Aqui faz o imput desses dados no array criado anteriormente.*/
                newArray.push({ 
                    currencyCripto, 
                    currencyCod, 
                    price, 
                    marketCap,
                    vol24h,
                    iDate })
            })

                return (newArray)
    
            });

        /*Após concluir todo processo acima encerramos o browser*/
        await browser.close(); 
        
        /*Converte a resposta da rota em Json e chama a variável que recebeu a função
        que recuperou os elementos da página*/
        return res.json(miner)
      
    /*Aqui se por algum motivo nosso código der algum erro iremos receber a mensagem do mesmo.*/
    } catch (error) {
        console.error(error)
    };
    
});

app.listen(port);