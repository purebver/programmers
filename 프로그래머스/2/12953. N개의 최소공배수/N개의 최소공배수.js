function solution(arr) {
    const action = (a, b) => {
        const multy = a * b;
        if(a > b){
            const temp_a = a;
            a = b;
            b = temp_a;
        }
        
        while(b % a !=0){
            let temp = b % a;
            b = a;
            a = temp;
        }
        return multy / a;
    }
    const result = arr.reduce((a, b) => action(a, b));
    return result;
}