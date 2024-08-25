class Carro {
    constructor() {
        this.marca = null;
        this.modelo = null;
        this.ano = null;
        this.motor = true; 
    }
  
    ligar_motor() {
        if (!this.motor) {
            this.motor = true;
            console.log('O motor está ligado.');
        } else {
            console.log('O motor já está ligado.');
        }
    }
    
    desliga_motor() {
        if (this.motor) {
            this.motor = false;
            console.log('O motor está desligado.');
        } else {
            console.log('O motor já está desligado.');
        }
    }
    
    status_motor() {
        return this.motor ? 'o motor está ligado.' : 'o motor está desligado.';
    }
    
    exibeinfo() {
        console.log(`O carro da marca ${this.marca}, modelo ${this.modelo} do ano ${this.ano} ${this.status_motor()}`);
    }
}


let carro = new Carro();
carro.marca = "VW";
carro.modelo = "Gol";
carro.ano = 2022;

carro.exibeinfo(); 
carro.ligar_motor();
carro.exibeinfo(); 
carro.desliga_motor(); 
carro.exibeinfo();
