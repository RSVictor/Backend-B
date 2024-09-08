// Classe base Produtos
class Produtos {
    constructor(nome, quantidade, preco, tipoComunicacao, consumoEnergia) {
        this.nome = nome || 'Produto desconhecido';
        this.quantidade = quantidade || 0;
        this.preco = preco || 0.0;
        this.tipoComunicacao = tipoComunicacao || 'Nenhum';
        this.consumoEnergia = consumoEnergia || '0 kWh';
        this.ligado = false; 
    }

    ligar() {
        if (!this.ligado) {
            this.ligado = true;
            console.log(`A ${this.nome} está ligada.`);
        } else {
            console.log(`A ${this.nome} já está ligada.`);
        }
    }

    desligar() {
        if (this.ligado) {
            this.ligado = false;
            console.log(`A ${this.nome} está desligada.`);
        } else {
            console.log(`A ${this.nome} já está desligada.`);
        }
    }
}


class Fritadeira extends Produtos {
    constructor(nome, quantidade, preco, tipoComunicacao, consumoEnergia) {
        super(nome, quantidade, preco, tipoComunicacao, consumoEnergia);
        this.temperatura = 0;
    }

    ajusteTemperatura(temperaturaSetpoint) {
        if (this.ligado) {
            this.temperatura = temperaturaSetpoint;
            console.log(`A ${this.nome} está configurada para ${this.temperatura} graus.`);
        } else {
            console.log(`A ${this.nome} está desligada. Ligue o aparelho para ajustar a temperatura.`);
        }
    }
}


class Televisao extends Produtos {
    constructor(nome, quantidade, preco, tipoComunicacao, consumoEnergia) {
        super(nome, quantidade, preco, tipoComunicacao, consumoEnergia);
        this.volume = 0;
    }

    ajusteTemperatura(volumeSetpoint) {
        if (this.ligado) {
            this.volume = volumeSetpoint;
            console.log(`A ${this.nome} está configurada para volume ${this.volume}.`);
        } else {
            console.log(`A ${this.nome} está desligada. Ligue o aparelho para ajustar o volume.`);
        }
    }
}


class ArCondicionado extends Produtos {
    constructor(nome, quantidade, preco, tipoComunicacao, consumoEnergia) {
        super(nome, quantidade, preco, tipoComunicacao, consumoEnergia);
        this.temperatura = 0;
    }

    ajusteTemperatura(temperaturaSetpoint) {
        if (this.ligado) {
            this.temperatura = temperaturaSetpoint;
            console.log(`O ${this.nome} está configurado para ${this.temperatura} graus Celsius.`);
        } else {
            console.log(`O ${this.nome} está desligado. Ligue o aparelho para ajustar a temperatura.`);
        }
    }
}


let fritadeira = new Fritadeira('Fritadeira Elétrica', 1, 150.0, 'Wi-Fi', '1 kWh');
let televisao = new Televisao('TV LED', 2, 1200.0, 'HDMI', '150 kWh');
let arCondicionado = new ArCondicionado('Ar Condicionado Split', 1, 2500.0, 'Controle remoto', '1.5 kWh');

fritadeira.ligar();
fritadeira.ajusteTemperatura(180);

televisao.ligar();
televisao.ajusteTemperatura(15); 

arCondicionado.ligar();
arCondicionado.ajusteTemperatura(22);
