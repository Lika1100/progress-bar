function compareObjects(o1, o2) {
  if (Object.keys(o1).length !== Object.keys(o2).length) {
    return false
  }
  
  const keysObj1 = Object.keys(o1)
  const result = keysObj1.every((key) => Object.is(o1[key], o2[key]))
  console.log(result)
}
/**if (Object.keys(o1).length !== Object.keys(o2).length) {
    return false
  }
  const aKeys = Object.keys(o1).sort()
  const bKeys = Object.keys(o2).sort()
  const isCompareKeys = aKeys.every((elem, i) => Object.is(elem, bKeys[i]))

  const aValues = Object.values(o1).sort()
  const bValues = Object.values(o2).sort()
  const isCompareValues = aValues.every((elem, i) => Object.is(elem, bValues[i]))
  
  return isCompareKeys && isCompareValues */

o1 = { a: 1, b: 2 }
o2 = { b: 2, a: 1 }
console.log(compareObjects(
   o1, o2
  )); // true
  
  console.log(compareObjects(
    { x: 1, y: "a" },
    { x: 1, y: "b" },
  )); // false