// exports e this são apenas duas referências que apontam para o mesmo objeto que module.exports aponta, mas não são a mesma variavel/objeto

console.log(module.exports)
console.log(module.exports === this)
console.log(this === exports)


this.a = 1
exports.b = 2

console.log(module.exports)

exports = null // tentando mudar  o valor do objeto no modulo
exports = { 
    c: 'Tentativa de mudar o que será exportado'
}
console.log(module.exports)

// Para de fato exportar deve se usar o module.exports
module.exports = { public: true }
console.log(module.exports)

