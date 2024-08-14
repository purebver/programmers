function solution(nums) {
    let leng = nums.length;
    let count = 0;
    const sum3 = (arr, start) => {
        if(arr.length === 3){
            if(truth(...arr)){
                count++;
            }
            return;
        }
        
        for(let i = start; i < leng; i++){
            sum3([...arr, nums[i]], i + 1);
        }
    }
    sum3([], 0);
    return count;
}
function truth(a, b, c) {
    let sum = a + b + c;
    for(let i = 2; i <= Math.sqrt(sum); i++){
        if(sum % i === 0){
            return false;
        }
    }
    return true;
}