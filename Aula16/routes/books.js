const express = require('express'); // importamos o Express
const Book = require('../models/Book'); // Importamos o modelo book
const router = express.Router(); // Criamos o roteador
const multer = require('multer');

// Configuração do multer para upload de imagens
const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,'uploads/');
    },
    filename: function(req,file,cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage: storage });
// Criação (POST)
router.post('/', upload.single('image'),async (req,res) => {
    try {
        const { title, author, year, isbn} = req.body;
        const image = req.file.path;
        
        const newGame = new Book({
            title, author, year, isbn
        });
        await newGame.save();
        res.status(201).json({ message: 'Livro cadastrado com sucesso', game: newGame});
    }catch (error) {
        res.status(500).json({ message: 'Erro ao cadastrar o Livro', error });
    }
});

//Leitura (GET)
router.get('/', async (req, res) => {
    try {
        const books = await Book.find(); // Buscamos todos os livros
        res.status(200).json(books); // Retornamos a lista de livros
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar os livros', error }); // Retornamos o erro, se houver
    }
});

// *** ATUALIZAÇÃO (PUT) ***
router.put('/:id', upload.single('image'), async (req, res) => {
    try {
        const { title, author, year, isbn } = req.body;
        let image = req.file ? req.file.path : undefined; // Se houver uma imagem, pega o caminho

        // Encontre o livro a ser atualizado
        const book = await Book.findById(req.params.id);
        if (!book) {
            return res.status(404).json({ message: 'Livro não encontrado' });
        }

        // Se o livro já tem uma imagem e uma nova foi enviada, deletamos a antiga
        if (book.image && image) {
            const oldImagePath = path.join(__dirname, '..', book.image); // Corrige o caminho da imagem
            fs.unlink(oldImagePath, (err) => {
                if (err) {
                    console.error('Erro ao deletar a imagem antiga:', err);
                }
            });
        }

        // Atualizar os dados do livro, incluindo a nova imagem, se houver
        const updatedBook = await Book.findByIdAndUpdate(
            req.params.id,
            { title, author, year, isbn, image: image || book.image }, // Se não houver nova imagem, mantém a antiga
            { new: true }
        );

        res.status(200).json(updatedBook);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao atualizar livro', error });
    }
});

// *** EXCLUSÃO (DELETE) ***
router.delete('/:id', async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if (!book) {
            return res.status(404).json({ message: 'Livro não encontrado' });
        }

        // Deletar a imagem associada ao livro, se existir
        if (book.image) {
            const filePath = path.join(__dirname, '..', book.image);
            fs.unlink(filePath, (err) => {
                if (err) {
                    console.error('Erro ao deletar a imagem:', err);
                    return res.status(500).json({ message: 'Erro ao deletar a imagem do livro', error: err });
                }
            });
        }

        // Deletar o livro do banco de dados
        await Book.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Livro deletado com sucesso' });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao deletar livro', error });
    }
});

//Exportamos o roteador para ser usado no server.js
module.exports = router;