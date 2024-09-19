function solution(k, dungeons) {
    const obj = {};
    const length = dungeons.length;
    const result = [];
    dungeons.forEach((a, b) => {
        obj[b] = true;
    })
    const cal = (point, obj, arr, result, max) => {
        for(let i = 0; i < length; i++){
            if(obj[i]){
                if(point >= arr[i][0]){
                    point -= arr[i][1];
                    result++;
                    obj[i] = false;
                    max = Math.max(cal(point, obj, arr, result, max), result);
                    point += arr[i][1];
                    result--;
                    obj[i] = true;
                }
            }
        }
        return max;
    }
    const max = cal(k, obj, dungeons, 0, 0)
    console.log(max+"일단 대기 순열사용으로 전환할것")
    return max;
}



