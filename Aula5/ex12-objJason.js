// Cria um objeto vazio e adiciona os atributos
carro = {}
carro.modelo = "Corsa"
carro.ano = 2009
carro.combistivel = "Flex"
carro.portas = 5

carro.acelera = function(){
    return 'O carro está acelerando'
}
console.log(carro)
console.log(carro.acelera())