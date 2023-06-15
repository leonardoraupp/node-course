const axios = require('axios')
const url = "http://files.cod3r.com.br/curso-js/funcionarios.json"

const chineses = c => c.pais === "China"
const mulheres = m => m.genero === "F"
const menorSalario =  (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual  
}

axios.get(url).then(response => {
    const funcionarios = response.data
    const chinesaComMenorSalario = funcionarios
    .filter(chineses)
    .filter(mulheres)
    .reduce(menorSalario)
    console.log(chinesaComMenorSalario)   
})