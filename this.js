console.log("Comportamento do this em diferentes escopos")
console.log()

console.log("No módulo: ")
console.log("Não aponta para o global -> ", this === global)
console.log("Aponta para module.exports -> ", this === module.exports)
console.log("Aponta para exports -> ", this === exports)

console.log()
console.log()

function thisFunctionExpression() {
    console.log("Dentro da função de expressão:")
    console.log("Aponta para o global  -> ", this === global)    
    console.log("Não aponta para module.exports -> ", this === module.exports)
    console.log("Não aponta para exports -> ", this === exports)
}
const thisArrowFunction = () => {
    console.log("Dentro da arrow function: (Se comporta como se estivesse no módulo novamente)")
    console.log("Não aponta para o global -> ", this === global)
    console.log("Aponta para module.exports -> ", this === module.exports)
    console.log("Aponta para exports -> ", this === exports)    
    console.log()
    }

thisFunctionExpression()
console.log()
console.log()
thisArrowFunction()

