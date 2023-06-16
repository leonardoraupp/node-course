require("./global")

// pode ser global. antes do objeto global também se quiser
console.log(minhaApp.saudacao())

minhaApp.nome = "Eita!" // com o uso de metodo freeze não é possível alterar o objeto global.
console.log(minhaApp.nome)