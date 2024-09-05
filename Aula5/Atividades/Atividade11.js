const anoAtual = new Date().getFullYear()
let livro = {
    titulo: 'O milagre do amanhã',
    autor: "Hal elrod",
    anoPublicacao: 2016,
    genero:"Autoajuda",
    avaliação: null
}
livro.idadePulblicacao = parseInt(anoAtual) - parseInt(livro.anoPublicacao)


livro.avaliação = "Um livro muito bom"


if (livro.avaliação === null){
    console.log("Um livro é muito bom")
}else{
    console.log("O livro já possui avaliação.")
}

delete livro.avaliação

console.log(livro["titulo"])
console.log(livro["autor"])
console.log(livro["anoPublicacao"])
console.log(livro["genero"])
console.log(livro["idadePulblicacao"])
console.log(livro["avaliação"])
