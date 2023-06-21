const porta = 3003
const express = require('express')
const app = express()

// app.get('/produtos', (req, res, next) => {
//     console.log('Middleware 1...')
//     next()
// })

app.get('/produtos', (req, res, next) => {
    res.send({
        produto: 'notebook',
        preco: 123.80
    }) // objeto é convertido para JSON
})

app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}.`)
})

 /*
    Maneira errada de acessa a aplicação
 http://localhost/produtos:3003

    Maneira certa
 http://localhost:3003/produtos
*/

