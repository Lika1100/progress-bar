function mergeObjects(...objects) {
    return Object.assign({}, ...objects)
}


const o1 = { y: 5, s: 6 };
const o2 = { x: 3, t: 4 };
const o3 = { x: 1, y: 2 };

console.log(mergeObjects(o1, o2, o3));
// { x: 3, y: 5, t: 4, s: 6 }