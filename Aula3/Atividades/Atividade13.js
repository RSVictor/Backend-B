function isPalindrome(word){
    const reversedword = word.split('').reverse().join('');
    return word === reversedword;
}

const palavra = 'ovo';
console.log(isPalindrome(palavra));