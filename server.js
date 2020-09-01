const express = require("express") // importando o express para inicializar o servidor
const nunjucks = require("nunjucks")
const server = express()



/*  esse servidor vai ficar ouvindo uma porta que eu declarar como 
primeiro parâmetro. O segundo parâmetro é um calbback ou seja uma função dentro de 
uma outra função
essa função será executada assim que esse listen de certo
*/
server.listen(5000, function () {
    console.log("Server is Running")
})

/* Agora vamos dá rotas no nosso servidor.
qnd ele deu a mensagem Cannot get / no navegador ele disse
que não esta achando a rota barra que é a rota para o meu arquivo principal*/ 
server.get("/", function (req, res) {
    return res.render("index")
    /*
        SEGUNDO PARAMETRO é um método que tem dois parâmetros.O primeiro para requisição 
        ou envio de alguma coisa. O segundo é para dá uma resposta para o usuario.
    */
})

/*Configurando minha template Engenie */
// declarar o tipo de motor de view que eu vou usar aqui

server.set("view engine", "html")

nunjucks.configure("views", {express: server }) 
/*(digo o caminho, tipo. no caso em formato de objetos) */

/*  =========== configurando servidor para receber CSS ======*/

server.use(express.static('public'))

/* Agora vamos criar a rota para o arquivo portifolio.html */

server.get("/portifolio", function (req, res) {
    return res.render("portifolio")
    /*
        SEGUNDO PARAMETRO é um método que tem dois parâmetros.O primeiro para requisição 
        ou envio de alguma coisa. O segundo é para dá uma resposta para o usuario.
    */
})