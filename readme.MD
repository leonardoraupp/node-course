A1. Importação e exportação de módulos seguindo o padrão CommonJS module.

Para a importação usa a função require() e "./" que é chamado de importação relativa, quando o modulo está no mesmo projeto.

A2. Para importar módulos de terceiros, é feito através do npm, a importação é feita de  forma diferente, buscando apenas pelo nome do módulo que normalmente é fica na pasta node_modules. É importante colocar a pasta node_modules no .gitignore para não subir todos essa pasta grande para alguma ferramenta de  versionamento de código.


