let  carro ={
    nome: 'Jeep', 
    cor: 'Vermelho',
    ano: 2024,
velocidade: function(){
    return this.nome + ' 150 km/h'
}

}
console.log(carro)
console.log(carro.velocidade())