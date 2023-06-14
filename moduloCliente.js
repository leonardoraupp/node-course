// Maneira de importar(requerir) um módulo que está dentro do sistema(no mesmo projeto).
const moduloA = require('./moduloA')
const moduloB = require('./moduloB')

console.log(moduloA.ola)
console.log(moduloA.bomDia)
console.log(moduloA.ateLogo)
console.log(moduloA)

console.log(moduloB.boaTarde)
console.log(moduloB.boaNoite())
console.log(moduloB)

