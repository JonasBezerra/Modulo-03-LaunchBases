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
    return res.render("views/index.html")
    /*
        SEGUNDO PARAMETRO é um método que tem dois parâmetros.O primeiro para requisição 
        ou envio de alguma coisa. O segundo é para dá uma resposta para o usuario.
    */
})
