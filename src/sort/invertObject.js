function invertObject(object) {
    const result = {}
    for (let key in object) {
        object[key].forEach((x) => {
            result[x] ??= []
            result[x].push(key)
        })
    }
    return result
}

const user2problems = {
    user1: ["problemA", "problemB"],
    user2: ["problemB", "problemC", "problemD"],
    user3: ["problemA"],
    user4: ["problemC", "problemD"],
    user5: ["problemB"],
  };
  
  const problem2users = invertObject(user2problems);
  
  console.log(problem2users);
  
  const expected = {
    problemA: ["user1", "user3"],
    problemB: ["user1", "user2", "user5"],
    problemC: ["user2", "user4"],
    problemD: ["user2", "user4"]
  };