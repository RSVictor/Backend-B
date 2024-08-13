const readline = require(`readline`);


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Pergunta o primeiro valor
rl.question('Digtite o primeiro valor: ',(base)=>{
    //Pergunta o segunfo valor
    rl.question('Digite o segundo valor: ',(altura) =>{
        //Exibe os valores digitados
        console.log('Primeiro valor:', base);
        console.log('Segundo valor:',altura);
        console.log("A área do triangulo é: ",base*altura);
      
    //Fecha a interface
    rl.close();
});
});