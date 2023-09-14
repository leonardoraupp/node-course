#Projeto de estudos do NodeJS
Nesse projeto registrei todas as minhas aulas de NodeJS. 

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

A11. Aprofundamento sobre os arquivo descritivo do Node, package.js. Sobre os scripts nativo do Node, como start, restart etc e  script personalizados que o próprio programador pode criar. Para executar scripts do node basta apenas usar npm mais o nome do script, no entanto scripts personalizados é necessário usar npm mais run e mais o nome do script(npm run <scriptName>). Nos scripts podemos encadear tarefas a partir do &&,ou seja um script pode executar mais de uma atividade. 
Graças ao arquivo package.js é possível deletar a pasta node_modules e criá-la sempre que quiser, bastando apenas usar o script npm i ou npm install a pasta é instalada novamente com todas as dependências descritas no package.js. Por essa razão que a pasta node_modules não é subida no gerenciador de versões de projeto(Github e entre outros)

A12. Como fazer a leitura de arquivos e diretórios em Node com o módulo core fs(file system). A leitura pode ser sincrona, que dependendo do tamanho do que será lido pode ser ruim, pois atrasa e deixa lento os ciclo Event do Node, ou pode ser assincrona, sendo implementada através de uma callback.

A13. Como fazer escrita de arquivo a partir do módulo core fs do Node.  Em si é feito através do método writeFile, passando 3 argumentos, o path seguido do nome do arquivo que deseja criar, o conteúdo e uma callback.  

A14. Aprendizado sobre middlewares, ou também conhecido como change of responsability. Basicamente é um padrão de criar uma cadeia de responsabilidades através de funções, sem forte acoplamento, independentes, que de maneira que seja faça um inversão de passos não afete a cadeia. Podemos fazer isso criando funções, que recebem parametros,sendo um dele uma função next() que aponta para outra função desejada. Ne ExpressJS é necessário três parametros, a request, response e a função next. 


A15. Integrando o Express  e o Nodemon juntos para criar um projeto de API Rest, baseado no padrão de projeto Middleware(change of responsability)


A16. Criando uma API Rest com o Express e Nodemon integrados. Utilizando o pacote nodeParser para fazer o parser de urlencoded para objeto e assim ser possível persistir os dados no banco de dados em memória.

A17. Introdução ao Schedule Node, cujo objetivo é criar atividades programadas, ou "schedule jobs". É possível programar tarefas para executar em intervalos de tempos, segundos, minutos, horas, dias, dias da semana e mês. Com o auxiliar de outras funções do Javascript, como setInterval, setTimeout é possível criar tarefas programadas também, mas usando o pacote node-schecule pode ser mais conveniente no dia a dia. Foi utilizado o setTimeout para implementar o cancelamento de uma tarefa do node-schedule. 

A18. Introdução ao objeto global do Node process, que é usado em operações de entreda e saida(teclado e tela). Onde é possível configurar saida para determinados tipos de entrada no terminal. 
