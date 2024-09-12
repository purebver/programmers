function solution(clothes) {
    const obj = {};
    clothes.forEach(a => {
        if(obj[a[1]]){
            obj[a[1]]++;
        } else {
            obj[a[1]] = 1;
        }
    })
    let mul = 1;
    for(let key in obj){
        mul *= obj[key] + 1;
    }
    return mul - 1
    
}