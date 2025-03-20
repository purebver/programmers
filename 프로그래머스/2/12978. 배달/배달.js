function solution(N, road, K) {
    const graph = {};
    for(const [a, b, c] of road){
        if(!graph[a]){
            graph[a] = {};
        }
        if(!graph[b]){
            graph[b] = {};
        }
        graph[a][b] = Math.min(graph[a][b] || Infinity, c);
        graph[b][a] = Math.min(graph[b][a] || Infinity, c);
    }
    const costs = cal(graph, 1);
    let result = 0;
    for(const end in costs){
        if(costs[end] <= K) result++;
    }

    return result;
}

function cal(graph, start) {
    const distances = {};
    const pq = new PQueue();
    for(const node in graph){
        distances[node] = Infinity;
    }
    distances[start] = 0;
    pq.enqueue(start, 0);
    while(!pq.isEmpty()){
        const { node, cost } = pq.dequeue();
        
        if(cost > distances[node]) continue;
        
        for(const end in graph[node]){
            const newCost = cost + graph[node][end];
            
            if(newCost < distances[end]){
                distances[end] = newCost;
                pq.enqueue(end, newCost);
            }
        }
    }
    return distances;
}

class PQueue {
    constructor(){
        this.queue = [];
    }
    enqueue(node, cost){
        this.queue.push({node, cost});
        this.queue.sort((a, b) => a.cost - b.cost);
    }
    dequeue(){
        return this.queue.shift();
    }
    isEmpty(){
        return this.queue.length === 0;
    }
}