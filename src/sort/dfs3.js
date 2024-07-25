/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    const graph = {}
    let visited = {}
    
    for (let i = 0; i < numCourses; i++) {
      visited[i] = "white"
      graph[i] = [];
    }
    for (let [to, from] of prerequisites) {
      graph[from].push(to)
    }
    for (let key in graph) {
        if (isCyclicGraph(key, visited, graph)) {
            return false
        }
    }

    return true

    //console.log(result, graph, visited)
    //return result
};
  
  function isCyclicGraph(currentNode, visited, graph) {
      if (visited[currentNode] === "black") {
          return false;
      }
      if (visited[currentNode] === "gray") {
          return true
      }
      visited[currentNode] = "gray"
      for (let elem of graph[currentNode]) {
         if (isCyclicGraph(elem, visited, graph)) {
            return true
         }
      }
      visited[currentNode] = "black"
      return false
  }
  // https://magma.com/d/mHlM5SmHZz
  const numCourses = 2
  const prerequisites = [[0, 1]]//[[1,0],[2,0],[3,1],[3,2]]

  
  console.log(findOrder(numCourses, prerequisites)) // [0,1,2,3] [0,2,1,3]