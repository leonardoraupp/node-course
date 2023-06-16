// comportamento do this em diferentes escopos

console.log(this === global)
console.log(this === module.exports)
console.log(this === exports)

function thisFunc() {
    console.log("Dentro da função...")
    console.log(this === global)    
    console.log(this === module.exports)
    console.log(this === exports)
}

thisFunc()

