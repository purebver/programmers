function solution(survey, choices) {
    let RTCFJMAN = {
        'R': 0, 'T': 0, 'C': 0, 'F': 0, 'J': 0, 'M': 0, 'A': 0, 'N': 0,
    }
    for(let i = 0; i < survey.length; i++){
        switch(choices[i]){
            case 1:
                RTCFJMAN[survey[i][0]] += 3;
                break;
            case 2:
                RTCFJMAN[survey[i][0]] += 2;
                break;
            case 3:
                RTCFJMAN[survey[i][0]] += 1;
                break;
            case 4:
                break;
            case 5:
                RTCFJMAN[survey[i][1]] += 1;
                break;
            case 6:
                RTCFJMAN[survey[i][1]] += 2;
                break;
            case 7:
                RTCFJMAN[survey[i][1]] += 3;
                break;
        }
    }
    let result = '';
    let RTCFJMAN_key = [['R', 'T'], ['C', 'F'], ['J', 'M'], ['A', 'N']];
    RTCFJMAN_key.forEach(a => {
        const [key1, key2] = a;
        if(RTCFJMAN[key1] >= RTCFJMAN[key2]){
            result += key1;
        } else {
            result += key2;
        }
    })
    return result;
}