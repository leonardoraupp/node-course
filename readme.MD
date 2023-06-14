A1. Importação e exportação de módulos seguindo o padrão CommonJS module.
    
Para a importação usa a função require() e "./" que é chamado de importação relativa, quando o modulo está no mesmo projeto.

A2. Para importar módulos de terceiros, é feito através do npm, a importação é feita de  forma diferente, buscando apenas pelo nome do módulo que normalmente é fica na pasta node_modules. É importante colocar a pasta node_modules no .gitignore para não subir todos essa pasta grande para alguma ferramenta de  versionamento de código.

A3. Criando modulos em diferentes locais, como por exemplo em subpastas, e usando    módulos de diferentes caminhos. 
Utilizando modulos core do Node,como por exemplo o módulo  Http.

A4. Conceitos importantes sobre Exports no sistema de módulos, this, exports, são 2 referências que apontam para o mesmo objeto(objeto vazio inicialmente criado {})que module.exports aponta. 
A partir do momento que o objeto é alterado, ao atribuir um novo objeto para o module, e tentar sobrescrever e exportar sem que seja atráves de module.exports, não funcionará, apenas module.exports pode mudar o que será exportado. 

