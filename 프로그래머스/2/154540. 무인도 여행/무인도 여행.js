function solution(maps) {
    const visited = Array.from({length: maps.length}, () => Array(maps[0].length).fill(false));
    const direction = [[1,0], [-1,0], [0,1], [0,-1]];
    
    const bfs = (startX, startY) => {
        let queue = [[startX, startY]];
        let sum = 0;
        
        while(queue.length > 0){
            const [x, y] = queue.shift();
            if(visited[x][y]) continue;
            
            visited[x][y] = true;
            
            sum += Number(maps[x][y]);
            
            for(let [dx, dy] of direction){
                const nextX = x + dx;
                const nextY = y + dy;
                
                if(nextX >= 0 && nextX < maps.length && nextY >= 0 && nextY < maps[0].length){
                    if(maps[nextX][nextY] !== 'X' && !visited[nextX][nextY]){
                        queue.push([nextX, nextY])
                    }
                }
            }
        }
        return sum;
    }
    
    const result = [];
    for(let i = 0; i < maps.length; i++){
        for(let j = 0; j < maps[i].length; j++){
            if(maps[i][j] !== 'X' && !visited[i][j]){
                result.push(bfs(i,j));
            }
        }
    }
    
    return result.length > 0 ? result.sort((a, b) => a - b) : [-1];
}