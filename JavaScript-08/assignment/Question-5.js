// Qs5. Write a function called mergeObjects that accepts two objects and returns a new
// object which contains all the keys and values of the first object and second object

const mergeObjects = (obj1,obj2) => ({...obj1,...obj2});
mergeObjects({a: 1,b:2},{c:5,d:8});
console.log(mergeObjects);