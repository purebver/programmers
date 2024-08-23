function solution(park, routes) {
    let dog = [];
    park.forEach((val, index) => {
        if(val.includes('S')){
            dog = [index, val.indexOf('S')];
        }
    })
    
    const maxH = park.length - 1;
    const maxW = park[0].length - 1;
    routes.forEach((val, index) => {
        const temp = val.split(' ');
        const num = Number(temp[1]);
        switch(temp[0]){
                case 'E':
                const A = dog[1];
                for(let i = 0; i < num; i++){
                    dog[1]++;
                    if(dog[1] > maxW){
                        dog[1] = A;
                        break;
                    } else if (park[dog[0]][dog[1]] === 'X'){
                        dog[1] = A;
                        break;
                    }
                }
                break;
            case 'W':
                const B = dog[1];
                for(let i = 0; i < num; i++){
                    dog[1]--;
                    if(dog[1] < 0){
                        dog[1] = B;
                        break;
                    } else if(park[dog[0]][dog[1]] === 'X') {
                        dog[1] = B;
                        break;
                    }
                }
                break;
            case 'S':
                const C = dog[0];
                for(let i = 0; i < num; i++){
                    dog[0]++;
                    if(dog[0] > maxW){
                        dog[0] = C;
                        break;
                    } else if(park[dog[0]][dog[1]] === 'X'){
                        dog[0] = C;
                        break;
                    }
                }
                break;
            case 'N':
                const D = dog[0];
                for(let i = 0; i < num; i++){
                    dog[0]--;
                    if(dog[0] < 0){
                        dog[0] = D;
                        break;
                    } else if(park[dog[0]][dog[1]] === 'X'){
                        dog[0] = D;
                        break;
                    }
                }
                break;
        }
    })
    //E+1, W-1, N-1, S+1
    return dog;
}