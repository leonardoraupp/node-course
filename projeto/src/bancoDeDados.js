
const sequence = {
    _id: 1,     
    get id() { return this.id++ }
}

const produtos = {}

const salvarProduto = (produto) => {
    if (!produto._id) produto.id = sequence.id   // Se o produto passado não ter id, é chamado o objeto sequence e atribuido um id ao produto. 
    produtos[produto.id] = produto // Atribui o objeto produto(recebido no parametro) a lista de "produtos" através da "chave [produto.id]".
    return produto
}
/*
Exemplo
na primeira chamado de salvarProduto seria  
produtos[produto.id] = produto seria equivalente a produtos[1]  = produto(que poderia ser um computador de preco 1200)
*/


const getProduto = (id) => {
    return produtos[id] || {}
}   

const getProdutos = () => {
    return Object.values(produtos)
}

module.exports = { salvarProduto, getProduto, getProdutos }
