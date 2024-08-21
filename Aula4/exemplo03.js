class Fruta{
// cria construtor 
constructor(){
    this.sabor = "Doce";
    this.nome = "Laranja";
    this.cor = "Verde";
    this.peso = 400;
    this.diasdecolheita = 5;
    this.isMadura = null; // o atributo pode ser opcional, inicalizado como null
}
// Criar metodo
madura(diasParaMadura){
    if(diasParaMadura >= this.diasdecolheita){
        console.log(`A ${this.nome} está madura`);
    }else{
        console.log(`A ${this.nome} não está madura`);
    }
  }
}

const tangerina = new Fruta();
tangerina.madura(3);
