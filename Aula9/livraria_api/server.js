// arquivo principal da api
// inicia o servidor

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

// Inicialização do app
 const app = express();
 app.use(cors());
 app.use(express.json());

 // Conexão com o mongoDB
 mongoose.connect( 'mongodb+srv://Victor:victor123@cluster0.ngnna.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',{
 
     useNewUrlParser:true,
     useUnifiedTopology:true
 }).then(() => console.log('MongoDB conectado')).catch(err=>console.log('Erro ao conectar no mongo', err));

 // Importação das rotas
 const bookRoutes = require('./Routes/book');
 app.use('api/books',bookRoutes); // irá rertornar a rota dos livros

 // Define a porta do servidor
  app.listen(3000,() =>{   
    console.log('Servidor executando na porta 3000');
 })

 //'mongodb+srv://Victor:victor123@cluster0.ngnna.mongodb.net/'