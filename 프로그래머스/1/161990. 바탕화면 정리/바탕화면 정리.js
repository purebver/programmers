function solution(wallpaper) {
    let point = [];
    wallpaper.forEach((a, i) => {
        let temp = pointcheck(a);
        if(temp[0] !== -1){
            point.push([i ,temp[0]]);
            point.push([i ,temp[1]]);
        }
    })
    let result = resultmake(point);
    result[2]++;
    result[3]++;
    console.log(result);
    return result;
}
function resultmake(arr) {
    return arr.reduce(([min1, min2, max1, max2], [row, col]) => {
        return[
            Math.min(row, min1),
            Math.min(col, min2),
            Math.max(row, max1),
            Math.max(col, max2)
        ];
    }, [51, 51, 0, 0]);
}
function pointcheck(str) {
    return [str.indexOf('#'), str.lastIndexOf('#')];
}