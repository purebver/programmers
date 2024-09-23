function solution(numbers, target) {
    const leng = numbers.length
    let result = 0;
    const cal = (arr, index, sum) => {
        if(arr.length === leng){
            if(sum === target){
                result++;
            }
            return;
        }
        cal([...arr, +numbers[index]], index + 1, sum + numbers[index]);
        cal([...arr, -numbers[index]], index + 1, sum - numbers[index]);
    }
    cal([],0,0);
    return result;
}