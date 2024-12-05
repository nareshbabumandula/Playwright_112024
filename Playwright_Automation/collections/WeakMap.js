/**
 * A WeakMap is a collection of key-value pairs, where keys must be objects and values are weakly referenced
 */

let key1 = {id:111};
let key2 = {id:222};

// Create a WeakMap
const weakMap = new WeakMap();
weakMap.set(key1, "Emp 1");
weakMap.set(key2, "Emp 2");

console.log(weakMap.get(key1));
console.log(weakMap.get(key2));



