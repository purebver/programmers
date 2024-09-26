function solution(word) {
    const dictionary_char = ['A', 'E',  'I', 'O', 'U'];
    const dictionary = [];
    let count = 0;
    let stop = false;
    const cal = (arr) => {
        if(arr.length === 5){
            return;
        }
        for(let i = 0; i < dictionary_char.length; i++){
            count++;
            if(word === arr.join('') + dictionary_char[i]){
                stop = true;
                return
            }
            cal([...arr, dictionary_char[i]])
            if(stop){
                return;
            }
        }
    }
    cal([])
    return count;
}