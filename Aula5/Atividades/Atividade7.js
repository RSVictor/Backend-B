const anoAtual = new Date().getFullYear()
let livro = {
    titulo: 'O milagre do amanhã',
    autor: "Hal elrod",
    anoPublicacao: 2016,
    genero:"Autoajuda",
}

livro.idadePulblicacao = parseInt(anoAtual) - parseInt(livro.anoPublicacao)

console.log(livro["titulo"])
console.log(livro["autor"])
console.log(livro["anoPublicacao"])
console.log(livro["genero"])
console.log(livro["idadePulblicacao"])
