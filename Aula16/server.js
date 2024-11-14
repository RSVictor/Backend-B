
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser');
require('dotenv').config();

//Inicialição do app
const app = express();
app.use(cors());
app.use(express.json());

//Conexão ao MongoDB
mongoose.connect('mongodb+srv://Victor:victor123@cluster0.ngnna.mongodb.net/Somativa-library', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB conectado'))
.catch(err => console.log('Erro ao conectar ao MongoDB:', err));

// Importação das rotas
const bookRoutes = require('./routes/books');
const authRoutes = require('./routes/authRouters')

app.use('/api/books',bookRoutes); // irá retornar a rota dos livros
app.use('/api/auth',authRoutes);
// Define a porta do servidor
app.listen(3000,()=>{
    console.log('Servidor executando na porta 3000');
});






