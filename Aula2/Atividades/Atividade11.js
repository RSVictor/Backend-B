const readline = require(`readline`);

function calculoSalario(salarioBruto,imposto){
   
    return salarioBruto - (salarioBruto * imposto);
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question('Digtite o salário bruto: ',(input) =>{

    let salarioBruto = parseFloat(input);

    // calculo
    let imposto = 0.20;

    let salarioLiquido = calculoSalario(salarioBruto,imposto);

    console.log('O salário liquido é: ', salarioLiquido);
    

    //Fecha a interface
    rl.close();
});