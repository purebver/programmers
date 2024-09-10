function solution(arr1, arr2) {
    let sum = 0;
    const result = [];
    for(let x = 0; x < arr1.length; x++){
        let arr = [];
        for(let y = 0; y < arr2[0].length; y++){
            for(let z = 0; z < arr1[0].length; z++){
                sum += arr1[x][z] * arr2[z][y];
            }
            arr.push(sum);
            sum = 0;
        }
        result.push(arr);
    }
    return result;
}