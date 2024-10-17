const express = require('express');// Importamos o Express
const Products = require('../models/products');// Importamos o modelo Book
const router = express.Router();// Importamos o modelo Book

//Criação (POST)
router.post('/', async(req,res) => {
    const {descricao, quantidade, valor,dataValidade } = req.body; // Extraimos os dados da requisição
    try{
        const newProduct = new Products({descricao, quantidade, valor,dataValidade});// Criamos e salvamos o produto
        await newProduct.save();
        res.status(201).json(newproduct); // Retornamos o produto criado
    } catch(error) {
        res.status(500).json({message: 'Erro ao cadastrar o produto', error});
    }
});

// Leitura (GET)
router.get('/', async (req, res) => {
    try {
        const products = await Products.find();// Buscamos todos os produtos
        res.status(2).json(products);// Retornamos a lista de produtos 
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar veiculo',error}); // Retornamos erro, se houver
    }
});

// Atualização (PUT)
router.put('/:id', async (req,res) => {
    const {descricao, quantidade, valor,dataValidade } = req.body; // Extraimos os novos dados
    try {
        const updateProduct = await Products.findByIdAndUpdate(req.params.id, {descricao, quantidade, valor,dataValidade}, {new: true}); // Atualizamos o produto pelo ID
        res.status(200).json(updateProduct); // Retornamos o produto atualizado
    } catch (error) {
        res.status(500).json({message: 'Erro ao atuaçizar o produto', error}); // Retornamos erro, se houver
    }
});

// Exclusão (Delete)
router.delete('/:id', async(req,res) => {
    try {
        await Products.findByIdAndDelete(req.params.id);// Deletamos o livro pelo ID
        res.status(200).json({ message: 'Produto deletado com sucesso'});// Retornamos mensagem de sucesso
    } catch (error) {
        res.status(500).json({message: 'Erro ao deletar o produto'})// Retornamos mensagem de sucesso
    }
})
// Exportamos o roteador para ser usado no sever.js
module.exports = router;