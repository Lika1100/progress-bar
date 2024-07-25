function sum(a, b) {
    return a + b
}
function curry(fn) {
    return (...args) => args.length >= fn.length
        ? fn(...args)
        : (...args2) => curry(fn)(...args, ...args2);
}
    

const curriedSum = curry(sum)
console.log(curriedSum(1)(2), "???")
