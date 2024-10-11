function solution(numbers) {
    let result = 0;
    const array = numbers.split('')
    const tempmemo = new Map();
    const memo = new Map();
    console.log(array)
    const cal = (arr) => {
        const num = Number(arr.join(''));
        if(!memo.has(num)){
            memo.set(num)
            if(truth(num) === true){
                result++;
            }
        }
        
        for(let i = 0; i < array.length; i++){
            if(tempmemo.get(i) === 1) continue;
            tempmemo.set(i, 1)
            cal([...arr, array[i]])
            tempmemo.delete(i)
        }
    }
    cal([])
    return result;
}

function truth(num) {
    console.log(num)
    if(num === 1 || num === 0){
        return false;
    }
    for(let i = 2; i <= Math.sqrt(num); i++){
        if(num % i === 0){
            return false;
        }
    }
    return true;
}