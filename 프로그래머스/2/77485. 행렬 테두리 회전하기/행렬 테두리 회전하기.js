function solution(rows, columns, queries) {
    //[a, b] = (a - 1) * columns + b
    const cal = (y, x, temp) => {
        const new_temp = memo.get(`${x},${y}`) ?? (y - 1) * columns + x
        memo.set(`${x},${y}`, temp);
        return new_temp;
    }
    const memo = new Map();
    const result = [];
    queries.map(([min_y, min_x, max_y, max_x]) => {
        const arr = [];
        let x = min_x;
        let y = min_y;
        let temp = memo.get(`${x},${y}`) ?? (y - 1) * columns + x
        for(let i = 0; i < max_x - min_x; i++){
            arr.push(temp);
            x = x + 1
            temp = cal(y, x, temp);
        }
        for(let i = 0; i < max_y - min_y; i++){
            arr.push(temp);
            y = y + 1;
            temp = cal(y, x, temp);
        }
        for(let i = 0; i < max_x - min_x; i++){
            arr.push(temp);
            x = x - 1;
            temp = cal(y, x, temp);
        }
        for(let i = 0; i < max_y - min_y; i++){
            arr.push(temp);
            y = y - 1;
            temp = cal(y, x, temp);
        }
        result.push(Math.min(...arr))
    })
    return result
}