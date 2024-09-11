let calculadora = {
    soma(num1 , num2){
       let resultado = parseFloat(num1) + parseFloat(num2);
        console.log(`${num1} + ${num2} = ${resultado}`);
    },
    subtracao(num1 , num2){
       let resultado = parseFloat(num1) - parseFloat(num2);
        console.log(`${num1} - ${num2} = ${resultado}`);
    },
    multiplicacao(num1 , num2){
       let resultado = parseFloat(num1) * parseFloat(num2);
        console.log(`${num1} * ${num2} = ${resultado}`);
    },
    divisao(num1, num2) {
        if (parseFloat(num2) === 0) {
            console.log('Não é possível a divisão por zero');
        } else {
            let resultado = parseFloat(num1) / parseFloat(num2);
            console.log(`${num1} / ${num2} = ${resultado}`);
        }
      
    }

}

calculadora.soma(10,2);
calculadora.subtracao(10,2);
calculadora.multiplicacao(10,2);
calculadora.divisao(10,0);
calculadora.divisao(10,2);