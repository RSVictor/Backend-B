function isPalindrome(word){
    const palavrareversa = word.split('').reverse().join('');
    return word === palavrareversa;
}

const palavra = 'ovo';
console.log(isPalindrome(palavra));