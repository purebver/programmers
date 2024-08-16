function solution(s, skip, index) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('').filter(a => !skip.includes(a));
    let result = '';
    let alphabet_length = alphabet.length;
    for(let char of s){
        let temp = (alphabet.indexOf(char) + alphabet_length + index) % alphabet_length
        result += alphabet[temp];
    }
    return result;
}