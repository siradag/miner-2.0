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

            /*Atribui uma variável para receber um array com a tabela*/
            const table = Array.from(document.querySelectorAll('table'));

            /*Atribui uma variável para receber o resultado do .map() utilizado no array*/
            const data = table.map(th => th.innerText);
            
                return (data)
                
            });
        
        /*Após concluir todo processo acima encerramos o browser*/
        await browser.close(); 

        /*Converte a resposta da rota em Json e chamamos a variável que recebeu a função
        que recuperou os elementos da página*/
        return res.json(miner)

      /*Aqui se por algum motivo nosso código der algum erro iremos receber a mensagem do mesmo.*/ 
    } catch (error) {
        console.error(error)
    };
    
});

app.listen(port);
