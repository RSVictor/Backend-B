function calculoConsumo(){
    potencia =  1750;
    horasDia = 8 ;
    diasMes = 25;
    custoKw = 0.75


 
 let consumoDiario = potencia * horasDia;

 let consumoMensal = consumoDiario * diasMes;

 let consumoMensaKWh = consumoMensal/1000;

 let custoMensal = consumoMensaKWh * custoKw

 return custoMensal;

}

 let custoMensal = calculoConsumo();

 console.log("O valor da energia a ser pago é " ,custoMensal,'R$');
    

