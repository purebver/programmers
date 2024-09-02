function solution(n,a,b)
{
    let temp_a = 0;
    let temp_b = 0;
    if(a < b){
        temp_a = a;
        temp_b = b;
    } else {
        temp_a = b;
        temp_b = a;
    }
    let count = 1;
    while(true){
        if(temp_b % 2 === 0 && temp_b - temp_a === 1){
            return count;
        }
        count++;
        temp_a = Math.ceil(temp_a / 2);
        temp_b = Math.ceil(temp_b / 2);
    }
}