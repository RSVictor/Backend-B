const contaBancaria = {
    titular: null,
    saldo: 0,
    depositar:function(valor){
        if(valor > 0){
        this.saldo += valor;
        }else{
            console.log(`Valor inválido para depósito`)
        }
    },
    sacar:function(valor){
        if(valor > 0){
             if (this.saldo >= valor){
            this.saldo -= valor;
        }else{
            console.log('Saldo Insulficiente.');
        }
    } else{
        console.log(`Valor inválido para saque`)
    }
}
};

const cliente = {
    nome: null,
    conta: contaBancaria
};

function mostrarSaldo(cliente){
console.log(`Cliente: ${cliente.nome}`);
console.log(`Saldo da conta: ${cliente.conta.saldo} R$`);
}

cliente.nome = 'Silva Junior';
cliente.conta. saldo = 5000;
cliente.conta.depositar(500);
cliente.conta.sacar(2000);
mostrarSaldo(cliente);


