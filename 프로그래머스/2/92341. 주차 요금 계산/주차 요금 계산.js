function solution(fees, records) {
    const obj = {};
    records.forEach(a => {
        const a_arr = a.split(' ');
        if(obj[a_arr[1]]){
            obj[a_arr[1]].push(a_arr[0].split(':').reduce((result, val, index) =>{
                if(index === 0){
                    return result = +val * 60
                } else {
                    return result += +val
                }
            }, 0))
        } else {
            obj[a_arr[1]] = [a_arr[0].split(':').reduce((result, val, index) =>{
                if(index === 0){
                    return result = +val * 60
                } else {
                    return result += +val
                }
            }, 0)]
        }
    })
    const result = []
    for(let key in obj){
        if(obj[key].length % 2 !== 0){
            obj[key].push(1439)
        }
        result.push([key, obj[key].reduce((result, val, index, arr) => {
            if(index % 2 === 1){
                return result += val - arr[index - 1]
            } else {
                return result
            }
        }, 0)])
    }
    result.sort((a, b) => a[0] - b[0])
    const result_fee = []
    for(let i = 0; i < result.length; i++){
        if(result[i][1] <= fees[0]){
            result_fee.push(fees[1])
        } else {
            let temp = result[i][1] - fees[0];
            result_fee.push(fees[1] + Math.ceil(temp / fees[2]) * fees[3]);
        }
    }
    return result_fee;
}