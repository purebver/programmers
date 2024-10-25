function solution(n) {
    if(n === 1){
        return [1]
    }
    if(n === 2){
        return [1, 2, 3]
    }
    const coordinate = new Array(n).fill(0).map((a, b) => new Array(b + 1));
    const location = [0, 0];
    const addLocation = [[1, 0], [0, 1], [-1, -1]];
    let direction = 0;
    let num = 1;
    while(true){
        const [y, x] = location;
        if(coordinate[y][x]){
            break;
        }
        coordinate[y][x] = num;
        num++;
        const [yPlus, xPlus] = addLocation[direction];
        location[0] = y + yPlus;
        location[1] = x + xPlus;
        if(location[0] + yPlus === n || location[1] + xPlus === n || coordinate[location[0] + yPlus][location[1] + xPlus]){
            direction = (direction + 1) % 3;
        }
    }
    return coordinate.flat()
}