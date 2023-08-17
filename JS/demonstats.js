const hungerBar = document.querySelector("#innerHungerBar");
const thirstBar = document.querySelector("#innerThirstBar");
const repentBar = document.querySelector("#innerRepentBar");

var hungReduce = 2;
var thirsReduce = 4;
var repenReduce = 6;

var loopid = 0;

// check if these values are on the client, if not, then create them at max
if(!localStorage.getItem("demonHunger") && !localStorage.getItem("demonThirst") && !localStorage.getItem("demonRepent")){
    localStorage.setItem("demonHunger", "100");
    localStorage.setItem("demonThirst", "100");
    localStorage.setItem("demonRepent", "100");
} 

function demonDead(){
    clearInterval(loopid);
    console.log("harmless creature destroyed");
    hungerBar.parentNode.parentNode.remove();
    document.querySelector("#cornerdemon").src = "./Images/dead.jpg";
}

function updateBars(){
    var hung = parseInt(localStorage.getItem("demonHunger"));
    var thirs = parseInt(localStorage.getItem("demonThirst"));
    var repen = parseInt(localStorage.getItem("demonRepent"));

    if(hung < 1 || thirs < 1 || repen < 1){
        demonDead();
        clearInterval(loopid);
        return;
    }

    hungerBar.style.width = hung * 4 + "px";
    thirstBar.style.width = thirs * 4 + "px";
    repentBar.style.width = repen * 4 + "px";

    localStorage.setItem("demonHunger", hung-hungReduce.toString());
    localStorage.setItem("demonThirst", thirs-thirsReduce.toString());
    localStorage.setItem("demonRepent", repen-repenReduce.toString());
}

updateBars();

loopid = setInterval(updateBars, 5000);

function reviveDemon(){
    localStorage.setItem("demonHunger", "100");
    localStorage.setItem("demonThirst", "100");
    localStorage.setItem("demonRepent", "100");
}