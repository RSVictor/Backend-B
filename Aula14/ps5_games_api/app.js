const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const gameRoutes = require('./routes/game');
const path = require('path');


const app = express();

// Conectar ao MongoDB
mongoose.connect('mongodb+srv://Victor:victor123@cluster0.ngnna.mongodb.net/ps5_games', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

.then(() => console.log('Conectado ao MongoDB'))
.catch(err => console.log(err));

//Middleware
app.use(bodyParser.json());
app.use('/uploads',express.static(path.join(__dirname, 'uploads')));

// Rotas
app.use('/api/games',gameRoutes);

//Iniciar o servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});