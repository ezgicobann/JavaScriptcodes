document.getElementById("enter").onclick = function(){
    let time = Number(document.getElementById("time").value);
    
    
    if (time >= 1 && time < 12){
        console.log("Good Morning!");
        document.getElementById("myH1").textContent = `Good Morning!`
    }
    else if (time >= 12 && time < 17){
        console.log("Good Afternoon!");
        document.getElementById("myH1").textContent = `Good Afternoon!`

    }
    else if (time >=17 && time < 21){
        document.getElementById("myH1").textContent = `Good Evening!`

    }
    else if (time >= 21){
        document.getElementById("myH1").textContent = `Good Night!`

    }
    else{
        document.getElementById("myH1").textContent = `Please enter a time`

    }
}