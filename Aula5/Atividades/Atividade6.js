const anoAtual = new Date().getFullYear()
let livro = {
    titulo: null,
    autor: null,
    anoPublicacao: null,
    genero: null,
}


livro.titulo = "O milagre do amanhã";
livro.autor = "Hal Elrod";
livro.anoPublicacao = 2016;
livro.genero = "Autoajuda";

livro.idadePulblicacao = parseInt(anoAtual) - parseInt(livro.anoPublicacao)

console.log(livro.titulo);
console.log(livro.autor);
console.log(livro.anoPublicacao);
console.log(livro.genero)
console.log(livro.idadePulblicacao)

dadosLivro = `O livro ${livro.titulo} escrito por ${livro.autor} no ano de ${livro.anoPublicacao} do gênero ${livro.genero} tem ${livro.idadePulblicacao} de pulblicação`

console.log(dadosLivro)
