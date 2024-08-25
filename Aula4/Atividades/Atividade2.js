class Pessoa {
    constructor(nome,idade,profissao,salario){
        this.nome = nome;
        this.idade =idade;
        this.profissao = profissao;
        this.salario = salario;
    }

    exibe_trabalho(nomeEmpresa,tempoTrabalho){
        console.log(`O funcionário ${this.nome} trabalha na empresa ${nomeEmpresa} há ${tempoTrabalho} anos`)
    }
    
}
let pessoa = new Pessoa('Victor', 30, 'Desenvolvedor',10000);

pessoa.exibe_trabalho('LSCH',10)