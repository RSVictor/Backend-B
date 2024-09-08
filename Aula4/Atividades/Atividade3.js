class Maquina {
    constructor(nome, qntEixos, rotacaoMin, consumo) {
        this.nome = nome || 'Máquina desconhecida';
        this.qntEixos = qntEixos || 0;
        this.rotacaoMin = rotacaoMin || 0;
        this.consumo = consumo || '0 kWh';
    }
}

class Furadeira extends Maquina {
    constructor(nome, rotacaoMin, consumo) {
        super(nome, 0, rotacaoMin, consumo); 
        this.ligada = false;
    }

    ligar() {
        if (!this.ligada) {
            this.ligada = true;
            console.log(`A ${this.nome} está ligada.`);
        } else {
            console.log(`A ${this.nome} já está ligada.`);
        }
    }

    desligar() {
        if (this.ligada) {
            this.ligada = false;
            console.log(`A ${this.nome} está desligada.`);
        } else {
            console.log(`A ${this.nome} já está desligada.`);
        }
    }

    ajustarVelocidade(novaRotacao) {
        if (this.ligada) {
            console.log(`A ${this.nome} está ligada. Deseja ajustar a velocidade para ${novaRotacao} rotações por minuto? (S/N)`);
           
            const confirmar = true; 
            if (confirmar) {
                this.rotacaoMin = novaRotacao;
                console.log(`A ${this.nome} agora está com ${this.rotacaoMin} rotações por minuto.`);
            } else {
                console.log(`O ajuste de velocidade foi cancelado.`);
            }
        } else {
            console.log(`A ${this.nome} está desligada. Ligue a máquina para ajustar a velocidade.`);
        }
    }
}


let furadeira = new Furadeira('Furadeira de impacto', 1500, '160 kWh');


furadeira.ligar();
furadeira.ajustarVelocidade(2000);
furadeira.desligar();
furadeira.ajustarVelocidade(1000);
