// Cria as rotas
const express = require('express') // Importa o express para criar o servidor
const Book = require('./book') // Importa o modelo dos livros
const router = express.Router(); // Cria o elemento para roter com base nas

//Cria rota do post
// async é por conta que a requisição tem um certo tempo para retornar
router.post('/',async(req,res) =>{
    const {Title,author,year} = req.body; // Extraiod dados da requisiçã
    try{
        const newbOK = new Book({title,author,year});
        await newBook.save();
        // 201 Coidgo de status
        res.status(201).json(newBook);
    }catch(error){
        res.satus(500).json({message : 'Erro ao cadastrar o livro'});
    }
    });

    // rota Get
    // req - requisição
    // res - resposta
    router.get('/', async(req,res) => {
        try{
            const books = await Books.find(); // busca todos os livros com o metodo find
            res.status(200).json(books) // retorna a lista de livros
        }catch(error){
            res.status(500).json({message: 'Erro as buscar livros', error}) // retorna o erro se houver
        }

    });
    
    // put - modifica elemento
    router.put('/::id',async(req,rres)=> {
        const{title,author,year} = req.body // extrai o conteudo da requisiçao
        try{
            constupdatedBook = await Book.findbyIdndUpdate(req.params[':id'],{title,author,year},{new: true});
            res.status(200).json(updatedBook);
        }catch(error){
            res.satus(500).json({message: 'Erro ao atualizar o livro', error});
        }
    })

    //delete - deleta elemento pelo ID
    router.delete ('/:id',async(req,res) =>{
        try{
            await Book.findbyIdndDelete(req.params.id);
        res.status(200).json({message: 'Livro deletado com sucesso'});
        }catch(erro){
            res.status(500).json({message: 'Erro ao deletar o livro', error});
        }
    })

    // Exporta o toteador para usar no server.js
    module.exports = router