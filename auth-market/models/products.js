const mongoose = require('mongoose');

// Definir o esquema do produto

const BookSchema = new mongoose.Schema({
    descricao: { type: String, required:true },
    quantidade: { type: Number, required: true},
    valor: { type: Number},
    dataValidade: {type: Number},
})

// Exportando o modelo
module.exports = mongoose.model('Products', BookSchema);