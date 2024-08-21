class Usuario{
    constructor(){
        this.nome = null;
        this.login = null;
        this.senha = null;
        this.cpf = null;
        this.celular = null;
    }

    exibir_info(){
        console.log(`Nome do usuario: ${this.nome}`);
        console.log(`Login: ${this.login}`);
        console.log(`senha: ${this.senha}`)
        console.log(`Cpf: ${this.cpf}`)
        console.log(`Celular: ${this.celular}`)
    }
    veriica_login(user,senha){
        if((user == this.login) && (senha == this.senha)){
            console.log(`Login correto! Bem vindo ${user}`);
        }
        else{
            console.log(`login incorrreto! Tente novamente!`);
        }
    }
}

const Usuario1 = new Usuario() // cria um objeto usuario1 a partir da classe usuario
Usuario1.nome = "Victor Ribeiro";
Usuario1.login = "Victor";
Usuario1.senha = "1234";
Usuario1.cpf = "12025678942";
Usuario1.celular = "19999999999";
Usuario1.exibir_info();
Usuario1.veriica_login("Victor","12345");
