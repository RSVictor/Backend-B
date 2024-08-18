function old(idade){
    if (idade >= 18){
        return(`Você é maior de idade!`)
    }else{
        return(`Você é menor de idade`)
    }
}
const anos = old(18)
console.log(anos)