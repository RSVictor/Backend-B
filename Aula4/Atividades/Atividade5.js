class Maquina{
    constructor(){
        this.nomeMaquina = null;
        this.qntEixos = null;
        this.rotacaoMin = null;
        this.consumo = null;
    }
}

class  Furadeira extends Maquina{
    constructor(){
        super();
        this.ligado = false;
    };

    ligar(){
        this.ligado = true;
        console.log(`A ${this.nome} está ligada`);
    }

    desligar(){
        this.ligado = true;
        console.log(`A ${this.nome} está desligada`);
    }
    velocidade(){
        this.ligado = true;
        console.log(`A ${this.nome} está ligada. Deseja ajustar a velocidade?`)
    }
}


let furadeira = new Furadeira();
furadeira.nome = 'Furadeira de impacto';
furadeira.consumo = '160 kw/h';

furadeira.ligar();
furadeira.desligar();
furadeira.velocidade();