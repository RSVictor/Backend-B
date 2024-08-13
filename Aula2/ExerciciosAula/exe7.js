/*
let readline = require(`readline`);
// Cria uma interface de leitura
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Pergunta ao usuário 
rl.question(`Digite algo: `, (answer) => {
    //Resposta do usuário
    console.log(`Você digitou: ${answer}`);

    //Fecha a interface
    rl.close();
});
console.log(readline);

*/

const readline = require(`readline`);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let res;
//Pergunta o primeiro valor
rl.question('Digtite o primeiro valor: ',(valor1)=>{
    //Pergunta o segunfo valor
    rl.question('Digite o segundo valor: ',(valor2) =>{
        //Exibe os valores digitados
        console.log('Primeiro valor:', valor1);
        console.log('Segundo valor:',valor2);
        console.log(valor1+valor2);
        console.log(Number(valor1)+Number(valor2));


    //Fecha a interface
    rl.close();
});
});
