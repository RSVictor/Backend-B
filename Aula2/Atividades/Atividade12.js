const readline = require(`readline`);

function calculoAbastecimento(qntlitros){
    let valorGasolina = 5.50
    return qntlitros * valorGasolina;
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question('Digtite a quantidade de litros a  abastecer: ',(input) =>{

    let qntlitros = parseFloat(input);
    
    let totalApagar = calculoAbastecimento(qntlitros);

    console.log('O total a apagar é: ', totalApagar,'R$');
    

    //Fecha a interface
    rl.close();
});