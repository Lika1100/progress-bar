function any(iterable) {
    return new Promise((resolve, reject) => {
      const result = []
      let counter = 0
      let length = 0
      for (let item of iterable) {
        const promise = item instanceof Promise ? item : Promise.resolve(item)
        let index = length
        promise.then(
          (value) => {
            resolve(value)
          },
          (reason) => {
            result[index] = reason
            counter++
            if (counter === length) {
              reject(new AggregateError(result, "All promises were rejected"))
            }
          },
        )
        length++
      }
      if (length === 0) {
        reject(new AggregateError([], "All promises were rejected"))
      }
    })
}

const p1 = Promise.reject("💣")
const p2 = Promise.reject("🌪️")
const p3 = Promise.reject("🔥")

any([p1, p2, p3]).catch(error => {
  console.log(error instanceof AggregateError); // true
  console.log(error.message); // "All promises were rejected"
  console.log(error.errors); // ["💣", "🌪️", "🔥"]
});