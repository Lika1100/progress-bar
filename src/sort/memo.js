function memo(fn, t = Infinity) {
  const cache = new Map();
  return function (arg) {
    if (cache.has(arg)) {
      clearTimeout(cache.get(arg).timeout);
    }

    const result = cache.has(arg) ? cache.get(arg) : fn(arg);

    cache.set(arg, {
      result,
      timeout: setTimeout(() => cache.delete(arg), t),
    });

    return result;
  }
}

const original = (n) => n
const memoized = memo(original, 1000);

console.log(original(1))
console.log(original(1))
console.log(original(2))

// https://maxcode.dev/problems/cache