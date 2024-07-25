function filterByShape(arr, filter) {
    const filterKeys = Object.keys(filter)
    return arr.filter((x) => {
        return filterKeys.every((key) => x[key] === filter[key])
    })
}

const arr = [
    { a: 1, b: 1, c: 1 },
    { a: 2, b: 1, c: 1 },
    { a: 1, b: 2, c: 1 },
    { a: 1, b: 1, c: 2 },
    { a: 1, b: 2, c: 2 },
    { a: 2, b: 1, c: 2 },
    { a: 2, b: 2, c: 2 },
  ];
  
  console.log(filterByShape(arr, {a: 1}));
  // [
  //   { a: 1, b: 1, c: 1 },
  //   { a: 1, b: 2, c: 1 },
  //   { a: 1, b: 1, c: 2 },
  //   { a: 1, b: 2, c: 2 },
  // ]
  
  console.log(filterByShape(arr, { a: 1, b: 2 }));
  // [
  //   { a: 1, b: 2, c: 1 },
  //   { a: 1, b: 2, c: 2 },
  // ]