const express = require('express') // Variavel express que vai salvar uma requisição
const app = express()// variavel app armazena o express
const port = 3000 // porta padrão para aplicaçoes em node

// Cria uma requisição Get

app.get('/', (req,res) =>{
    res.send('Hello World!')
});

// app post é pra fazer um post na api com o express
app.get('/', (req,res) =>{
    res.send('Backend testes');
});

app.get('/usuario', (req,res) =>{
    res.send('usuario admin');
});

app.post('/', (req,res) =>{
    res.send('Teste post');
});

app.listen(port,() =>{
    console.log(`Exemplo app ouvindo  port ${port}`)
});