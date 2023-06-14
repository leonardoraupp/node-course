// não precisa usar ./(importação relacional) quando é um módulo externo
const _= require('lodash')

setInterval(() => console.log(_.random(0, 1000)), 2000)