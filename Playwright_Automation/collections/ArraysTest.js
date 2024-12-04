
/**
 * Array:  
 * 1. Insertion order is maintained
 * 2. Duplicate elements are allowed in Array collection
 * 3. Supports predefined utility methods
 */
function arraysDemo(params) {
    const fruits = ["Orange", "pineapple", "apple", "papaya", "guava", "dragon fruit", "litchi", "malberry"];
    // access 1st element of an array based on array index
    console.log(fruits[0]);
    console.log(fruits[1]);
    console.log(fruits[2]);

    console.log(fruits.indexOf("Orange"));

    // Utility methods
    console.log(fruits.push("watermelon")); // appends new elements to the end of an array, and returns the new length of the array.
    console.log(fruits);
    fruits.pop(); // Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
    console.log(fruits);

    fruits.forEach(fruit => {
        console.log("Fruit is " + fruit);
    });

    const rareFruits = ["mango", "grapes"];

    // Merging 2 arrays using concat() method
    const finalfruits = fruits.concat(rareFruits);
    console.log(finalfruits);

    // Merging 2 arrays using (...) spread operator
    const res = [...fruits, ...rareFruits];
    console.log(finalfruits);


}

arraysDemo();
