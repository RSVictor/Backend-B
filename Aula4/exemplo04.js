class Animal {
    constructor() {
      this.nome = null;
      this.idade = null;
    }
  
    // Método da classe base
    fazerSom() {
      console.log(`${this.nome} faz um som.`);
    }
  }
        

    // extends herança, a classe cachorro herda da classe  animal algumas caracteristicas como nome e idade
class Cachorro extends Animal {
    constructor() {
        super();
        this.raca = null;
      // Chama o construtor da classe base     
    }


    // Método sobrescrito
    fazerSom() {
      console.log(`${this.nome} late.`);
    }

    // Método adicional
    exibirInfo() {
      console.log(`Nome: ${this.nome}, Idade: ${this.idade}, Raça: ${this.raca}`);
    }
  }
  
  const Rocky = new Cachorro();
  Rocky.nome = "Rocky";
  Rocky.idade = "2";
  Rocky.exibirInfo();