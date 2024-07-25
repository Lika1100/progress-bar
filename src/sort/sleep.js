function sleep(ms) {
    return function(fns) {
        return new Promise(resolve => setTimeout(() => resolve(fns), ms))
    }
}

async function multiplyBy3(n) {
    return n * 3
}

function divideBy5(n) {
    return n / 5
}

function square(n) {
    return n**2
}

multiplyBy3(10)
  .then(x => divideBy5(x))
  .then(x => square(x))
  .then(x => console.log(x)); // 36 через 4 секунды


  multiplyBy3(10)
  .then(x => divideBy5(x))
  .then(sleep(2000)) // добавляет дополнительные 2 секунды
  .then(x => square(x))
  .then(x => console.log(x)); // 36 через 6 секунд
