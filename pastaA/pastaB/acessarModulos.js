const moduloA = require('../../moduloA')
console.log(moduloA.bomDia)

const saudacao = require('saudacao')        
console.log(saudacao.ola    )   

const http = require('http')
http.createServer((req, res) => {
    res.write('Olá mundo! Servidor criado a partir do módulo http')
    res.end()
}).listen(8080)
