/*
1- Accept user input with window prompt

let username;

username = window.prompt("What's your username?");

console.log(username);

*/


/*
2- Accept user input with HTML textbox
*/

document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById("myText").value;
    console.log(username);
    document.getElementById("myH1").textContent= `Hello ${username}`;
}