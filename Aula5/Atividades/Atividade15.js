let pessoa = {
    nome : null,
    idade : null,
    solteiro : null,
    hobbies : null,
    endereco:{
        rua: null,
        cidade: null,
        estado: null
    },
    
    
}

pessoa.nome = "Neymar Junior"
pessoa.idade = "36"
pessoa.solteiro = true
pessoa.hobbies = "Enjoie parties"
pessoa.endereco.rua =  "Avenida Amoreiras"
pessoa.endereco.cidade = "Campinas"
pessoa.endereco.estado = "São Paulo"

function mostrarinfoPessoa(person) {
     console.log(person.nome)
     console.log(person.idade)
     console.log(person.solteiro)
     console.log(person.hobbies)
     console.log(person.endereco.rua)
     console.log(person.endereco.cidade)
     console.log(person.endereco.estado)
}

mostrarinfoPessoa(pessoa)