class Livros {
    constructor(nome,quantidade,preco,nomeAutor,nEdicao){
        this.nome = nome || 'Produto desconhecido';
        this.quantidade = quantidade || 0;
        this.preco = preco || 0.0;
        this.nomeAutor  =  nomeAutor|| 'Nenhum';
        this.nEdicao = nEdicao || '0';
        this.emprestado = false;
      

    }
    emprestar(){
        if(!this.quantidade >0 && !this.emprestado){
            this.emprestado = true;
            this.quantidade -=1;
            console.log(`O livro ${this.nome} foi emprestado.`);
             }else if(this.emprestado){
                console.log(`O livro ${this.nome}ja esta emprestado.`);
             }else if(this.quantidade <= 0){
                console.log(`Não há cópias disponiveis do livro ${this.nome}`)
             }
    }

    devolver(){
        if(!this.emprestado){
            this.emprestado = true;
            this.quantidade += 1;
            console.log(`O livro ${this.nome} foi devolvido e está dispovivel para emprestar.`);
             }else{
                console.log(`O livro ${this.nome}não está emprestado.`)
             }
    }
}

let livro1 = new Livros('Programador',1, 150.0, 'Autor1', '222')

livro1.emprestar();
livro1.devolver();