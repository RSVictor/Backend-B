
qualMaior(5,14,11);

function qualMaior(num1,num2,num3){
    let maior;

    if(num1 >= num2 && num1 >= num3) {
        maior = num1;
    } else if (num2 >= num1 && num2 >= num3) {
        maior = num2;
    } else {
        maior = num3;
    }
    console.log('O maior é:', maior);
}

