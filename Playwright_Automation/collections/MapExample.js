// Map is a collection of key-value pairs

const map = new Map();
map.set('name', 'Alex');
map.set('age', '28');

// Access values
console.log(map.get('name'));
console.log(map.get('age'));

// Check existence
console.log(map.has('age'));

// Iterate
map.forEach((value, key)=>console.log(`${key}:${value}`));

console.log(map.keys());
console.log(map.values())
console.log(map.size);
console.log(map.entries());
console.log('Age is : ' + map.get('age'));
console.log(map);





