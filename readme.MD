A1. Importação e exportação de módulos seguindo o padrão CommonJS module.
    
Para a importação usa a função require() e "./" que é chamado de importação relativa, quando o modulo está no mesmo projeto.

A2. Para importar módulos de terceiros, é feito através do npm, a importação é feita de  forma diferente, buscando apenas pelo nome do módulo que normalmente é fica na pasta node_modules. É importante colocar a pasta node_modules no .gitignore para não subir todos essa pasta grande para alguma ferramenta de  versionamento de código.

A3. Criando modulos em diferentes locais, como por exemplo em subpastas, e usando    módulos de diferentes caminhos. 
Utilizando modulos core do Node,como por exemplo o módulo  Http.

A4. Conceitos importantes sobre Exports no sistema de módulos, this, exports, são 2 referências que apontam para o mesmo objeto(objeto vazio inicialmente criado {})que module.exports aponta. 
A partir do momento que o objeto é alterado, ao atribuir um novo objeto para o module, e tentar sobrescrever e exportar sem que seja atráves de module.exports, não funcionará, apenas module.exports pode mudar o que será exportado. 


A5. Utilizando a dependência axios para fazer requisições http para uma api de funcionários.
Salvando a depência axios no package.json, que é o arquivo descritivo do node, onde mostra as informações do projeto e as depências do projeto, mas a visão mais elaborada das dependências do projeto ficam no arquivo package-lock.json. 
Para que tenha esses arquivos e possa ter as dependências indicadas neles, é necessário iniciar um repositório node, que pode ser feito a  partir do comando npm init.

A6. Foi abordado a maneira como o node usa  "cache" ao exportar módulos. Por padrão ao exportar um módulo o node faz cache e cria apenas uma instância(Singleton), mas ao passar uma factory(arrow function) para exports.module é criado mais de uma instância, criando objetos independentes.

A7. Foi abordado sobre o objeto global, que assim como existe o window que é o objeto global no browser, existe também no Node. Não é recomendado criar objetos global, pois isso foge das boas práticas de sistemas de módulos do Node. Mas se precisar criar objetos globais é poaassível, pode usar o método da classe Object chamado freeze para deixar o  objeto global constante, evitando que qualquer parte do sistema altere esse objeto global.

A8. Comportamento do this no Node. Dentro do módulo no Node, o this aponta para o objeto module.exports ou exports e não aponta para o objeto global. Ou seja ao atribuir dados para o this, não está declarando para o objeto global mas sim para o module.exports, ficando visivel para fora do móbulo(público).
No entando, no espopo de uma função, dentro da função, o this aponta para global e não aponta para module.exports ou exports, ou seja tudo criado no this será criado de maneira global e não no módulo para ser exportado publicamente. Essas são as suas nuances no Node.

A9. Foram visto a diferenças do comportamento do this, como se comporta no módulo, expressão de função(função tradicional), como visto no A8, mas agora como se comporta dentro de uma arrow function. Dentro da arrow function o this tem o mesmo padrão de comportamento que teria no escopo do módulo no Node.

A10. Aprendendo a passar parametros para o módulo. Basicamente atribuindo uma função com parametros ao módulo, automaticamente o módulo passa a receber parametros, sendo possivel passar parametros para esse módulo de algum outro módulo que o requira.