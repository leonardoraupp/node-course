const anonimo = process.argv.indexOf('-a') !== -1  // A função String.indexOf busca o indice de uma determinada string. Caso a string não esteja na string, é retornado -1
// console.log(anonimo)

if (anonimo) {
    process.stdout.write('Fala anonimo!\n')
} else {
    process.stdout.write('Informe seu nome: ')
    process.stdin.on('data', data => {
        const nome = data.toString().replace('\n', '')
        process.stdout.write(`Fala ${nome}!!\n`)
        process.exit()
    })
}