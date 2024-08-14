const readline = require(`readline`);


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question('Digtite sua altura: ',(altura) =>{

    let a = parseFloat(altura);
    
    rl.question('Digite seu peso: ', (peso) =>{

      let p = parseFloat(peso);

    let calculoIMC = p/(a*a);

    console.log('O sei IMC é ', calculoIMC);
    
        if (calculoIMC < 18.5){
            console.log('Magreza');
        }
        else if (calculoIMC >= 18.5 && calculoIMC <= 24.9){
            console.log('Normal');
        }
        else if(calculoIMC >= 25.0 &&  calculoIMC <= 29.9){
            console.log ('Sobrepeso');
        }
        else if(calculoIMC >= 30.0 && calculoIMC <=39.9){
            console.log('Obesidade');
        }
        else if (calculoIMC >= 40) {
            console.log('Obesidade Grave');
        }
    //Fecha a interface
    rl.close();
});
});