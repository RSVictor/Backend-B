class Cliente{
    constructor(nome,profissao, saldo){
        this.nome = nome || null;
        this.profissao = profissao || null;
        this.saldo = saldo || 0;
    }
    pix(valor){
        if(valor > 0){
            this.saldo -= valor;
            console.log(`Pix realizado no valor de ${valor.toFixed(2)}.`);
        }else{
            console.log(`Valor inválido para Pix.`);
        }
    }
    emprestimo(valor){        
            if(valor > 0){
                this.saldo += valor;
                console.log(`Emprestimo realizado no valor de ${valor.toFixed(2)}.`);
            }else{
                console.log(`Valor inválido para empréstimo.`);
            }
        }
    saque(valor){      
            if(valor > 0 && valor <=this.saldo){
                this.saldo -= valor;
                console.log(`Saque de ${valor.toFixed(2)}.`);
            }else if (valor>this.saldo){
                console.log(`Saldo insulficiente para saque.`);
            }else{
                console.log(`Valor inválido para saque`)

            }
        }
        extrato() {
            console.log(`Extrato: Saldo atual é R$${this.saldo.toFixed(2)}.`);
        }
    
}

function menu(){
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });


let cliente = new Cliente();
cliente.nome = 'Victor'
cliente.profisao = "Desenvolvedor";
cliente.saldo = '5000';

function Opcoes(){
    console.log('\nEscolha uma opção:');
    console.log('1. pix');
    console.log('2. Emprestimo');
    console.log('3. Saque');
    console.log('4. Extrato');
    console.log('5.Sair');


readline.question('Digite o número da opção desejada: ', (opcao) => {
    switch (parseInt(opcao)) {
        case 1:
            readline.question('Digite o valor do Pix: R$', (valor) => {
                cliente.pix(parseFloat(valor));
                cliente.extrato();
                Opcoes();
            });
            break;
        case 2:
            readline.question('Digite o valor do empréstimo: R$', (valor) => {
                cliente.emprestimo(parseFloat(valor));
                cliente.extrato();
                Opcoes();
            });
            break;
        case 3:
            readline.question('Digite o valor do saque: R$', (valor) => {
                cliente.saque(parseFloat(valor));
                cliente.extrato();
                Opcoes();
            });
            break;
        case 4:
            cliente.extrato();
            Opcoes();
            break;
        case 5:
            console.log('Saindo...');
            readline.close();
            break;
        default:
            console.log('Opção inválida. Tente novamente.');
            Opcoes();
            break;
    }
});

}

Opcoes();

}

menu();

