// array = a variable like structure that can hold more than 1 variable.

let fruits = ["apple", "orange", "banana"];

fruits.push("coconut");
fruits.pop();
fruits.unshift("mango");
fruits.shift();


console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);

console.log(fruits.length);
console.log(fruits.indexOf("apple"));
console.log(fruits.indexOf("kiwi")); // -1


for(let i=0; i<fruits.length; i++){
    console.log(fruits[i]);
}

for(let fruit of fruits){
    console.log(fruit);
}

console.log(fruits.sort());
console.log(fruits.sort().reverse());