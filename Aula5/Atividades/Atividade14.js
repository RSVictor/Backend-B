let pessoa = {
    nome : null,
    idade : null,
    solteiro : null,
    hobbies : null,
    
    
}

pessoa.nome = "Neymar Junior"
pessoa.idade = "36"
pessoa.solteiro = true
pessoa.hobbies = "Enjoie parties"

function mostrarinfoPessoa(person) {
     console.log(person.nome)
     console.log(person.idade)
     console.log(person.solteiro)
     console.log(person.hobbies)
}

mostrarinfoPessoa(pessoa)