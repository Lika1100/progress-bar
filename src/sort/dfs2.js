/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  const graph = {}
  let visited = {}
  
  for (let i = 0; i < numCourses; i++) {
    visited[i] = "white"
    graph[i] = [];
  }
  for (let [to, from] of prerequisites) {
    graph[to].push(from)
  }

  const result = [];

  for (let key in graph) {
    if (isCyclicGraph(key, visited, graph, result)) {
        return []
    }
  }
  return result
}

function isCyclicGraph(currentNode, visited, graph, result) {
    if (visited[currentNode] === "black") {
        return false;
    }
    if (visited[currentNode] === "gray") {
        return true
    }


    visited[currentNode] = "gray"
    for (let elem of graph[currentNode]) {
       if (isCyclicGraph(elem, visited, graph, result)) {
          return true
       }
    }

    result.push(currentNode);

    visited[currentNode] = "black"
    return false
}
// https://magma.com/d/mHlM5SmHZz

const numCourses = 9
const prerequisites = [[3, 1], [4, 2], [5, 2], [8, 7], [5, 4]] // [[1, 0], [1, 2]]

console.log(canFinish(numCourses, prerequisites))