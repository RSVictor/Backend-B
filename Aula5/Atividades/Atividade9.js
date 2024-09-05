const anoAtual = new Date().getFullYear()
let livro = {
    titulo: 'O milagre do amanhã',
    autor: "Hal elrod",
    anoPublicacao: 2016,
    genero:"Autoajuda",
    avaliação: null
}

livro.idadePulblicacao = parseInt(anoAtual) - parseInt(livro.anoPublicacao)

livro.genero  = "Aventura";


console.log(`O gênero foi atualizado para ${livro.genero}`)