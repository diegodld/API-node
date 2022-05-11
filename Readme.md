## Api para pegar dados dos produtos no banco de dados

Essa Api foi construida para o curso de ADS para disciplina de desenvolvimento mobile.
O objetivo era apenas renderizar no aplicativo, os dados dos produtos cadastrados no banco de dados
utilizando o verbo HTTP 'GET'.

Para testar, baixe o código e rode o comando "npm install" na pasta raiz do projeto.

Execute o arquivo SQL no Mysql Workbench para gerar o banco previamente preenchido.

No arquivo "database/database.js", altere as credenciais de conexão de acordo com as configurações do seu banco local.

Por fim, para rodar a API, digite "npm start" na pasta raiz do projeto e acesse o endereço que será indicado no console.
Exemplo: ("Servidor rodando em http://localhost:8080")

Os dados poderão ser visualizados na rota "/produtos" (http://localhost:8080/produtos).

O endereço citado anteriormente deverá ser utilizado para carregar os dados no frontend.