let userName = "webDesign";

console.log(userName.charAt(2)); //b

console.log(userName.indexOf("e")); //1

console.log(userName.lastIndexOf("e")); //4

console.log(userName.length); //9


userName = userName.toUpperCase();

console.log(userName);

userName = userName.toLowerCase();

console.log(userName); // webdesign


userName = userName.repeat(2);

console.log(userName);


let userName2 = "webDesign     ";

userName2 = userName2.trim();

console.log(userName);   //webDesign without space


let phoneNumber ="123-456-7890";

phoneNumber = phoneNumber.replaceAll("-", "");

console.log(phoneNumber);

let phoneNumber1 ="123-456-7890";

phoneNumber1 = phoneNumber1.padStart(15 , "0");

console.log(phoneNumber1);

let phoneNumber2 ="123-456-7890";

phoneNumber2 = phoneNumber2.padEnd(15 , "0");

console.log(phoneNumber2);