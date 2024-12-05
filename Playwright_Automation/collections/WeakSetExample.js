/**
 * WeakSet: It's a collection of objects, where object are weakly referenced
 */

let obj1 = {name:'Alex'};
let obj2 = {name:'Peter'};
let obj3 = {name:'Alex'};

const weakSet = new WeakSet([obj1, obj2]);

// Add and object
const obj4 = {name: 'Sjoerd'};

weakSet.add(obj4);

console.log(weakSet.has(obj1));
obj1=null;
console.log(weakSet.has(obj1));



