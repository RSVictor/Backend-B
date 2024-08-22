class Usuario{
    constructor(){
        this.nome = null;
        this.idade;
    }
    exibeinfo(){
        console.log(`Nome ${this.nome},idade${this.idade}`);
    }
}
class Cliente extends Usuario{
    constructor(){
        super();

        this.cargo = null;
    }
    exibirinfocargo(){
        console.log(`Nome ${this.nome}, idade${this.idade},cargo ${this.cargo}`)
    }
}

const victor = new Cliente();
victor.nome = "Victor"
victor.idade = 29;
victor.cargo = "Aluno";

const victor1 = new Usuario();
victor1.nome = "Ribeiro";
victor1.idade = 29;
victor.exibirinfocargo();
victor1.exibeinfo();





