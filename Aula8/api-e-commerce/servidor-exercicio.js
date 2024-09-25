const express = require('express'); // Importa o Express

const app = express(); // Cria a instância do express

const port = 3000; // Defime a porta onde a api irá rodar

// Variaveis para armazenar os dados
const dados_prod = [];
const dados_cliente = [];


app.use(express.json()) // Permite o servidor lifdar com requisições no formato json


// Cria a rota GET principal
app.get('/', (req, res) => {
    res.send('Bem vindo a API - Senai Market v 1.0');
})

// Cria a rota para cadastrar e mostrar os produtos
app.post('/produtos', (req, res) => {
    // Parse para envio dos dados
    const { nome_prod, qtde, valor} = req.body;
    res.send(`Nome do produto: ${nome_prod}, Qtde: ${qtde}, Valor: R$ ${valor}`);
    dados_prod.push({nome_prod, qtde, valor}); // Armazena os dados dos produtos
})

app.get('/produtos', (req, res) => {
    // Parse para leitura dos dados
    const { nome_prod, qtde, valor} = req.body;
    res.json(dados_prod);
})

// Cria a rota para cadastrar e mostrar os produtos
app.post('/clientes', (req, res) => {
    // Parse para envio dos dados
    const { email, senha } = req.body;
    res.send(`Email: ${email}, Senha: ${senha}`);
    dados_cliente.push({email, senha});
})

app.get('/clientes', (req, res) => {
    // Parse para leitura dos dados
    const { email, senha } = req.body;
    res.json(dados_cliente);
})

app.listen(port, () => {
    console.log(`API rodando na porta ${port}`)
})
