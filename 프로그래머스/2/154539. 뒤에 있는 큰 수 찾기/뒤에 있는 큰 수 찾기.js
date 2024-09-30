function solution(numbers) {
    const leng = numbers.length
    const result = new Array(leng).fill(-1);
    const index = [];
    numbers.forEach((v, i) => {
        if(i === 0){
            index.push(i)
        } else {
            if(v > numbers[i - 1]){
                for(let j = index.length - 1; j >= 0; j--){
                    if(v > numbers[index[j]]){
                        result[index[j]] = v
                        index.pop()
                    } else {
                        break;
                    }
                }
                index.push(i)
            } else {
                index.push(i)
            }
        }
    })
    return result
}