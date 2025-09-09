// function: a section of reusable code.

function add(x,y){
    return x+y;
}
function subtract(x,y){
    return x-y;
}
function multiply(x,y){
    return x*y;
}
function divide(x,y){
    return x/y;
}

console.log(add(5,7));
console.log(subtract(5,7));
console.log(multiply(5,7));
console.log(divide(5,7));

function isEven(number){
    if(number % 2 === 0){
        return true;
    }
    else{
        return false;
    }
}
console.log(isEven(4));
console.log(isEven(9));

function isValidEmail(email){
    return email.includes("@") ? true : false;
}

console.log(isValidEmail("ezgi.com"))
console.log(isValidEmail("ezgi@.com"))
