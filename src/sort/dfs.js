function dfs(graph, currentNode, targetNode, visited = new Set()) {
    console.log({currentNode});
    visited.add(currentNode);

    if (currentNode === targetNode) {
        return 1
    }

    for (let key in graph[currentNode]) {
        if (visited.has(key)) {
            continue;
        }
        const nextRate = dfs(graph, key, targetNode, visited);
        console.log({nextRate});
        if (nextRate === 0) {
            continue;
        }
        return graph[currentNode][key] * nextRate
    }

    return 0;
}

//  from    to    
const rates = [
    ["USD", "RUB", 89.0658],
    ["RUB", "CNY", 0.0822],
    ["RUB", "KZT", 5.0679],
    ["KZT", "RUB", 0.1973],
    ["AMD", "CNY", 0.0188],
    ["CNY", "KZT", 61.6408],
    ["UAH", "KZT", 11.0929],
];
/* {
  USD: { RUB: 89.0658 },
  RUB: { USD: 0.011227654161305462, CNY: 0.0822, KZT: 5.06842372022301 },
  CNY: { RUB: 12.165450121654501, AMD: 53.191489361702125, KZT: 61.6408 },
  KZT: { RUB: 0.1973, CNY: 0.016223021115884285, UAH: 0.09014775216579975 },
  AMD: { CNY: 0.0188 },
  UAH: { KZT: 11.0929 }
}
}*/
// usd rub cny kzt amd uah

function crossRate(rates, from, to) {
    const result = {}
    rates.forEach(([from, to, amount]) => {
        result[from] ??= {}
        result[from][to] = amount
        result[to] ??= {}
        result[to][from] = 1 / amount
    })


    return dfs(result, from, to);
}

console.log(crossRate(rates, "USD", "UAH"));  // → 40.6909 UAH

/* const graph = {
    A: ['B', 'C'],
    B: ['D', 'E'],
    C: ['F', 'G'],
    D: [],
    E: [],
    F: [],
    G: [],
};

dfs(graph) // ['A', 'B', 'D', 'E', 'C', 'F', 'G']` */