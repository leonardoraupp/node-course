// exportando um módulo usando uma factory(arrow function)
module.exports = () => {
    return { 
        valor:1, 
        inc() { this.valor++ }
    } 
}