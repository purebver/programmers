function solution(ingredient) {
    let temp = [];
    let result = 0;
    for(let i = 0; i < ingredient.length; i++){
        temp.push(ingredient[i]);
        if(temp.length >= 4 && temp.slice(-4).join('') === '1231'){
            temp.splice(-4);
            result++;
        }
    }
    return result;
}