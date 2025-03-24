function solution(places) {
    // 우, 하, 좌, 상
    const lineS = [[1, 0], [0, 1], [-1, 0], [0, -1]];
    const lineL = [[2, 0], [0, 2], [-2, 0], [0, -2]];
    
    // 사선(우하, 좌하, 좌상, 우상)
    const diagonal = [[1, 1], [-1, 1], [-1, -1], [1, -1]];
    
    // 검사
    const test = (place) => {
        // P탐색
        for(let i = 0; i < place.length; i++){
            for(let j = 0; j < place[i].length; j++){
                if(place[i][j] !== 'P'){
                    continue;
                }
                // 직선탐색
                for(const [dx, dy] of lineS){
                    const ni = i + dx, nj = j + dy;
                    if(ni < 0 || nj < 0 || ni >= 5 || nj >= 5) continue;
                    if(place[ni][nj] === 'P') return 0;
                }
                
                // 직선2칸 탐색
                for(let k = 0; k < 4; k++){
                    const [dx2, dy2] = lineL[k];
                    const ni = i + dx2, nj = j + dy2;
                    if(ni < 0 || nj < 0 || ni >= 5 || nj >= 5) continue;
                    if(place[ni][nj] === 'P'){
                        const mi = i + lineS[k][0], mj = j + lineS[k][1];
                        if(place[mi][mj] !== 'X') return 0;
                    }
                }
                
                // 대각선 탐색
                for(const [dx, dy] of diagonal){
                    const ni = i + dx, nj = j + dy;
                    if(ni < 0 || nj < 0 || ni >= 5 || nj >= 5) continue;
                    if(place[ni][nj] === 'P'){
                        if(!(place[i][nj] === 'X' && place[ni][j] === 'X')) return 0;
                    }
                }
            }
        }
            return 1;
    }
    return places.map(place => test(place));
}