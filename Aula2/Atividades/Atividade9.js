const readline = require(`readline`);

function areaCirculo(raio){
    let pi = 3.14;
    return pi * raio * raio;
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question('Digtite o raio do circulo: ',(input) =>{
    let raio = parseFloat(input);

    // calculo
    let area = areaCirculo(raio);


    console.log('A area do circulo é: ', area);
    

    //Fecha a interface
    rl.close();
});