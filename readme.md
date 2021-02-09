# Api para raspagem de dados de Criptomoedas

## Objetivo da Api

Essa api foi desenvolvida para raspar dados de criptomoedas, esse material tem como único objetivo aprimorar os meus conhecimentos com a linguagem Javascript, sendo assim esses dados não são utilizados de forma comercial.

## O que foi feito até aqui?

Essa Api foi desenvolvida com JavaScript utilizando o NodeJs, express, cors, puppeteer e o nodemon.

"Puppeteer é uma biblioteca Node que fornece uma API de alto nível para controlar o Chrome ou Chromium sobre o protocolo DevTools. O Puppeteer funciona em segundo plano por padrão, mas pode ser configurado para rodar em primeiro plano."

<https://pptr.dev/>

Essa api manipula o navegador e acessa uma página <https://br.investing.com/crypto/currencies>, para os meus estudos escolhi o portal de finanças br investing, um portal muito renomado na área e que atualiza seus dados em tempo real.

Num segundo passo, temos uma variação entre os dois arquivos.

Na versão v1:

- Temos uma Api que ao receber uma requisição em uma rota, ele chama uma função que abre um navegador, abre uma nova aba, acessa um site específico, acessa uma tabela e raspa os dados, em outro momento ele atribui esses dados num array, usamos .map() para retornar todos os valores juntos. O resultado não ficou legal e não consegui acertar, por isso criei a v2.

Na versão v2:

- A diferença foi, em vez de usar o .map() usei o .forEach() para percorrer cada linha e no resultado atribuimos a cada campo específico uma variável, os dados ficaram muito melhor.

Como informado acima os dados utilizados foram destinados somente a material de estudo e não se trata de uma aplicação comercial.

**Versão 1.0** disponibilizada em **02/02/2021**

**Versão 2.0** disponibilizada em **07/02/2021**

## **Notas:** Aprendizado

- Criação de uma api do zero, assimilando toda a lógica de funcionamento.
- Utilização do Express para habilitar o servidor na porta (3060), criação de rota para requisição da função que irá raspar os dados selecionados.
- Liberação de acesso externos com o CORS.
- Utilização do Async/await, tratativa de erros e respostas com o Try e Catch.
- Utilização dos elementos do DOM.
- Utilização de array.
- Mapear a resposta da requisição e utilizar campos específicos.
- Utilização do Pupperteer.
- Funcionalidade do arquivo robots.txt (Muita atenção ao raspar dados de uma página, veja se página possui algum termo, condições e política de privacidade, se algo não autorizar a utilização dos dados peça autorização), deixei um arquivo robots para exemplo.
