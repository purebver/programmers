function solution(n, wires) {
    let result = Infinity;
    const makeGraph = () => {
        const graph = {};
        for(let i = 0; i < wires.length; i++){
            const [a, b] = wires[i];
            if(!graph[a]){
                graph[a] = [];
            }
            if(!graph[b]){
                graph[b] = [];
            }
            graph[a].push(b);
            graph[b].push(a);
        }
        return graph;
    }
    
    const bfs = (graph, start, block) => {
        const visited = new Set();
        const queue = [start];
        visited.add(start)
        while(queue.length > 0){
            let node = queue.shift();
            for(let a of graph[node]){
                if(a !== block && !visited.has(a)){
                    queue.push(a);
                    visited.add(a)
                }
            }
        }
        return visited.size;
    }
    
    for(let [a, b] of wires){
        let graph = makeGraph(wires);
        graph[a] = graph[a].filter(node => node !== b);
        graph[b] = graph[b].filter(node => node !== a);
        
        let sizeA = bfs(graph, a, b);
        let sizeB = n - sizeA;
        result = Math.min(Math.abs(sizeA - sizeB), result)
    }
    
    return result;
}