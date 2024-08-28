nomes=['Victor','José','Maria', 'João']
console.log(nomes)

nomes.splice(1,1,'Viviane') // splice adiciona elementos e remove em uma posição especifica
console.log(nomes)

const nomes2 = nomes.slice(1,3) // fatia a lista a partir da posição 1 até  2
console.log(nomes2)

const tamanho = nomes.length // length - retorna o tamanho da lista
console.log(tamanho)