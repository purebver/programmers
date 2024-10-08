function solution(bridge_length, weight, truck_weights) {
    const waittruck = [...truck_weights.reverse()];
    const passing = new Array(bridge_length).fill(0);
    const pass = [];
    let sum = 0;
    let result = 0;
    
    while(pass.length < truck_weights.length){
        const passtruck = passing.shift()
        if(passtruck !== 0){
            pass.push(passtruck)
            sum -= passtruck
        }
        const truck = waittruck.pop()
        if(sum + truck <= weight){
            passing.push(truck)
            sum += truck
        } else {
            passing.push(0)
            waittruck.push(truck);
        }
        result++
    }
    return result
}