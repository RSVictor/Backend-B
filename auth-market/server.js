// arquivo principal da api
// inicia o servidor

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser');
require('dotenv').config() // Carrega as variaveis do arquivo venv

// inicialização do app

const app = express();
app.use(cors());
app.use(express.json());

const authRoutes = require('./routes/authRouters')

// Conexão ao MongoDB
mongoose.connect('mongodb+srv://Victor:victor123@cluster0.ngnna.mongodb.net/Market', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB conectado'))
.catch(err => console.log('Erro ao conectar ao MongoDB:', err));

// Importação das rotas
const ProductsRoutes = require('./routes/product');
app.use('/products',ProductsRoutes); // irá retornar a rota dos produtos
app.use('/api/auth',authRoutes);
// Define a porta do servidor
app.listen(5000,()=>{
    console.log('Servidor executando na porta 5000');
});