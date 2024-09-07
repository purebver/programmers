function solution(elements) {
    const map = new Map()
    const cal = (num) => {
        let sum = 0;
        for(let i = 0; i < num; i++){
            sum += elements[i];
            map.set(sum);
        }
        for(let i = num; i < elements.length + num - 1; i++){
            let index = i
            if(index >= elements.length){
                index -= elements.length;
            }
            let index2 = index - num
            if(index2 < 0){
                index2 += elements.length;
            }
            
            sum += elements[index] - elements[index2];
            map.set(sum);
        }
    }
    for(let i = 1; i <= elements.length; i++){
        cal(i);
    }
    return map.size
}