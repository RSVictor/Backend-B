const pessoa = {
    nome : "Bruce Banner",
    dataNascimento: "25/01/1980",
    carteiraIdentidade:"997776-X",
    email: "profbanner@email.com",
    telefone: "+552877776666",
    cidade:"Cachoeiro de iItapemirim",
    estado:"ES",
    

    exibir(){
    console.log(this.nome);
    console.log(this.dataNascimento);
    console.log(this.carteiraIdentidade);
    console.log(this.email);
    console.log(this.telefone);
    console.log(this.cidade);
    console.log(this.estado);

    pessoa.cpf = "325658978";
    pessoa.seguroSocial = "12345678";
    
    console.log(this.cpf.slice(0,4) );
    console.log(this.seguroSocial.slice(0,4) );
    
   

}
 
};

pessoa.exibir()