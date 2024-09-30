function solution(numbers) {
    return numbers.map(val => {
        const valTostring = val.toString(2).split('');
        const result = [];
        const index = valTostring.lastIndexOf('0');
        if(index === -1){
            for(let i = 0; i <= valTostring.length; i++){
                if(i === 1){
                    result.push(0)
                } else {
                    result.push(1)
                }
            }
            return parseInt(result.join(''), 2)
        } else {
            valTostring[index] = '1'
            if(index + 1 < valTostring.length){
                valTostring[index + 1] = '0'
            }
            return parseInt(valTostring.join(''), 2)
        }
    })
}