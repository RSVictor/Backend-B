class Automovel{
    constructor(){
        this.cor = null;
        this.modelo = null;
        this.tipocombustivel = null;
        this.qntRodas = null;
    }
}

class Carro extends Automovel{
    constructor(){
        super();
        this.ligado = false;
        this.vidroAberto = false;        
    }

    ligar(){
        this.ligado = true;
        console.log(`O carro ${this.modelo} esta ligado.`);
    }
    desligar(){
        this.ligado = false;
        console.log(`O carro ${this.modelo} esta desligado.`);
    }
    abrirVidro(){
        this.aberto = true;
        console.log(`O vidro do carro ${this.modelo} esta aberto.`);
    }
    fecharVidro(){
        this.aberto = false;
        console.log(`O vidro do carro ${this.modelo} esta fechado.`);
    }
           
    exibe_infoCarro(){
        console.log(`O carro ${this.modelo} da cor ${this.cor} do tipo ${this.tipocombustivel} de ${this.qntRodas} está com o motor ${this.ligado ? 'ligado' : 'desligado'} e o viro está ${this.aberto ? 'aberto' : 'fechado'}.`)
    }

}

class Moto extends Automovel{
    constructor(){
        super();

    }
    exibe_infoMoto(){
        console.log(`A moto ${this.modelo} da cor ${this.cor} do tipo ${this.tipocombustivel} de ${this.qntRodas} esta desligada.`)
    }
}

class Caminhao extends Automovel{
    constructor(){
        super();
    } 
    ligar(){
        this.ligado = true;
        console.log(`O caminhão ${this.modelo} esta ligado.`);
    }
    desligar(){
        this.ligado = false;
        console.log(`O caminhão ${this.modelo} esta desligado.`);
    }
    abrirVidro(){
        this.aberto = true;
        console.log(`O vidro do caminhão ${this.modelo} esta aberto.`);
    }
    fecharVidro(){
        this.aberto = false;
        console.log(`O vidro do caminhão ${this.modelo} esta fechado.`);
    }
    exibe_infoCaminhao(){
        console.log(`O caminhão ${this.modelo} da cor ${this.cor} do tipo ${this.tipocombustivel} de ${this.qntRodas} está com o motor ${this.ligado ? 'ligado' : 'desligado'} e o viro está ${this.aberto ? 'aberto' : 'fechado'}.`)
    }
}

let carro = new Carro();
    carro.modelo = 'Zafira';
    carro.cor= 'Cinza';
    carro.tipocombustivel = 'Flex';
    carro.qntRodas = '4 rodas';

carro.ligar()
carro.abrirVidro();
carro.exibe_infoCarro();
carro.fecharVidro();
carro.desligar();
carro.exibe_infoCarro()

let moto = new Moto();
    moto.modelo = "Yamaha";
    moto.cor = "Vermelho";
    moto.tipocombustivel = "Gasolina";
    moto.qntRodas = "2 rodas";

moto.exibe_infoMoto();

let caminhao = new Caminhao();
    caminhao.modelo = "Scania P310";
    caminhao.cor = "Azul";
    caminhao.tipocombustivel = "Disel";
    caminhao.qntRodas = "18 rodas";

caminhao.ligar()
caminhao.abrirVidro();
caminhao.exibe_infoCaminhao();
caminhao.fecharVidro();
caminhao.desligar();
caminhao.exibe_infoCaminhao();
