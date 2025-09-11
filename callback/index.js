// callback = a function that is passed as an argument to another func.

sum(displaytoConsole, 12,7)
sum(displayPage, 12,7)

function sum(callback, x, y){
    let result = x + y;
    callback(result);
}

function displaytoConsole(result){
    console.log(result);
}
function displayPage(result){
    document.getElementById("myH1").textContent = result;
}
