let pessoa={
    nome : 'Victor',
    idade: 29,
    profissão: 'Estudante',
    saudacao: function(){
        console.log("Olá! Seja bem vindo!")
    }
}
pessoa.time = "São Paulo"

console.log(pessoa)
console.log(pessoa.saudacao())
console.log(pessoa.idade) // acessa uma informação específica do objeto pessoa
console.log(pessoa.profissão)
console.log(pessoa.nome)