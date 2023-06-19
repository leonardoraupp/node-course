const fs = require('fs')

const produto = {
    nome: "computador",
    preco: 1500,
    desconto: 0.05,
    categoria: "eletronico"
}

fs.writeFile(__dirname + '/arquivoEscrita.json',JSON.stringify(produto), err => {
    console.log(err || 'Arquivo salvo!')    
 })