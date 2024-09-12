const express = require('express');
const bodyParser = require('body-parser'); // faz um parse das informaçoes quando faz um post
const bookRoutes = require('./routes/bookRoutes'); // rota dos livros

const app = express(); // define o serridor como express
app.use(bodyParser.json()); // função para realizar o parse
app.use('/api', bookRoutes); // rota api

// Definir a porta do servidor
const PORT = process.env.PORT || 3000;

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});