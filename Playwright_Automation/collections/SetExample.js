/**
 * Set is a collection which allows only unique values
 * Set maintains the insertion order
**/
const fruits = new Set(["Orange", "pineapple", "apple", "guava", "papaya", "guava", "dragon fruit", "litchi", "malberry"]);
console.log(fruits);
fruits.add("grapes");
console.log(fruits);
fruits.add("Orange"); // It will not add as Orange item already exists in the Set collection (fruits)
console.log(fruits);
console.log(fruits.has("apple"));

// Iterate using arrow function
fruits.forEach(fruit=>console.log(fruit));

