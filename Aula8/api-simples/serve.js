const express = require('express'); // Importa o Express

const app = express(); // Cria a instância

const port = 3000; // Define a porta onde a api irá rodar

const dados = []; // Lista para armazenar todos os dados cadastrados

app.use(express.json()); // Middleware para permitir que o servidor lide com requisições no formato json

// Cria a rota GET na raiz '/', 'res'=requisição e 'res'=resposta
app.get('/', (req, res) => {
    res.send('API funcionando');
})

app.post('/data', (req, res) => {
    // Parse para envio dos dados
    const { nome, idade } = req.body;
    res.send(`Nome: ${nome}, Idade: ${idade}`);
    dados.push({nome, idade}); // Adiciona na lista
})

// Método data para o end point data
app.get('/data', (req, res) => {
    // Parse para leitura dos dados
    const { nome, idade } = req.body;
    // res.send(`Nome: ${nome}, Idade: ${idade}`);
    res.json(dados) // Armazena a resposta
})


// Inicia o servidor e define que ele deve rodar na porta especificada
app.listen(port, () => {
    console.log(`API rodando na porta ${port}`);
})