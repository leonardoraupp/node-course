const fs = require('fs')

const caminhoArquivo = __dirname + '/arquivo.json'

// padrão sincrono de leitura...    
const conteudo = fs.readFileSync(caminhoArquivo, 'utf-8')
console.log(conteudo)


// padrão assincrono de leitura
// const config = JSON.parse(conteudo)
// fs.readFile()
fs.readFile(caminhoArquivo, 'utf-8', (err, conteudo) => {
    console.log("Maneira assincrona de ler...")
    const config =  JSON.parse(conteudo)
    console.log(`http://${config.db.host}:${config.db.port}`)
})


// leitura usando require
const arquivo = require('./arquivo.json')
console.log(arquivo.db)

// leitura de diretorio
fs.readdir(__dirname, (err, arquivos) => {
    console.log('módulos do diretório...')
    console.log(arquivos)

})
