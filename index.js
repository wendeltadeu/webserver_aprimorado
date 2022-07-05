const express = require('express');
const app = express();

let port = 3000;

app.get('/', (req, res) =>{
  res.send("Ola! Seja bem vindo!")
});

app.get('/index.html', (req, res) =>{
  res.send("Ola! Seja bem vindoa vitrine de filmes")
});

//  metodos GET - exemplo expressão regular
app.get('*', (req, res) => {
  res.send("<h1>Link inválido: 404</h1>");
});

//  metodo POST - exemplo expressão regular
app.post('/post/teste_post', (req, res) => {
  res.send("<h1>Você acessou uma página via metodo post</h1>");
});

app.listen(port, () => console.log(`Escutando na porta ${port}`));