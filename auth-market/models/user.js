const mongoose = require('mongoose')

// Definir o esquema de usuario

const userSchema = new mongoose.Schema({
    username: {type: String, required: true, unique:true},
    password: { type: String, required: true}
})

// Exportar o modelo de usuario
module.exports = mongoose.model('User',userSchema);