class Carro{
    constructor(){
        this.marca = null;
        this.modelo = null;
        this.ano = null;
        this.motor = false;

    }
    exibeinfo(marca,modelo,ano,motor){
        console.log(`O carro da marca ${marca}, modelo ${modelo} do ano ${ano} esta com o motor ${motor}`)
    }

    ligar_motor(){
        if(motor == false){
            motor = True
            console.log(`O motor esta desligado`);        
        }
        else if (motor = false){
            console.log(`O motor esta já esta desligado`); 
        }
      }
    
    
    desliga_motor(){
        if(motor == true){
            motor = false
            console.log(`O motor esta ligado`);        
    }
    else if(this.motor = true){
        console.log(`O motor já esta ligado`);
    }
    
}
    }



        let carro = new Carro()
        carro.marca = "VW";
        carro.modelo = "Gol";
        carro.ano = 2022;
        carro.exibeinfo();
        carro.ligar_motor(),
        carro.desliga_motor();