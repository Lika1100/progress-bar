function nonUniqueNumbers(numbers) {
    let obj = {}
    for (let elem of numbers) {
      // if(obj[elem] === undefined) {
      //   obj[elem] = 0
      // }
      obj[elem] ??= 0
      obj[elem] += 1
    }
    return numbers.filter((x) => obj[x] > 1)
}

const N = 50_000;
const arr = Array(N).fill().map(() => Math.floor(Math.random() * N));

console.time(N)
console.log(nonUniqueNumbers(arr));
console.timeEnd(N)

// const numbers = [10, 5, 1, 2, 5, 3, 2, 1, 5, 8];
// console.log(nonUniqueNumbers(numbers));
// // //  [5, 1, 2, 5, 2, 1, 5];
