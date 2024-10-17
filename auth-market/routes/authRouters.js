const express = require('express'); // Importa o Express
const router = express.Router(); // Cria um roteador do Express
const authController = require('../controllers/authController')// Importa o controlador de autenticação que contem as funções register e login

//Rota para registrar novos usuarios

router.post('/register', authController.register)

//Rota para login de usuario

router.post('/login', authController.login)

module.exports = router // Exporta o roteador para o uso no app.js