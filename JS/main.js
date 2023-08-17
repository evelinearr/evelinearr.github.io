const bg = document.querySelector("body");

const bioSelect = document.querySelector("#bio");
const bioText = document.querySelector("#aboutme");
const bioBorder = document.querySelector("#border");
const bioGif = document.querySelector("#biogif");

const texts = ["age", "hobbies", "star", "opinions"]
const gifs = ["https://media.tenor.com/oQapBpQce_MAAAAC/bubles-floating.gif", "https://media.tenor.com/cNZXDAOYgyEAAAAC/wtf-weird.gif", "https://media.tenor.com/SW3my-IYMWgAAAAC/kiizii.gif"]

var demonGrabbed = false;

function updateBio(event){
    console.log(bioSelect);
    var index = bioSelect.selectedIndex;
    bioText.innerHTML = texts[index];
    bioBorder.src = `./Images/border${index+1}.png`;
    bioGif.src = gifs[index];
    // console.log()
}

function grabDemon(event){
    demonGrabbed = true;
    const demon = event.target;
    demon.setAttribute('draggable', false);

    const offsetX = event.clientX - demon.getBoundingClientRect().left;
    const offsetY = event.clientY - demon.getBoundingClientRect().top;

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);

    bg.style.backgroundImage = "url('./Images/bg2.png')";
    document.body.style.filter = "invert(100%)";

    function onMouseMove(event) {
        if (!demonGrabbed) return;

        const x = event.clientX - offsetX;
        const y = event.clientY - offsetY;

        demon.style.left = `${x}px`;
        demon.style.top = `${y}px`;
    }

    function onMouseUp() {
        demonGrabbed = false;
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
        bg.style.backgroundImage = "url('./Images/bg1.png')";
        document.body.style.filter = "";
    }
}

function timeoutCorner(event){
    if(demonGrabbed){
        localStorage.setItem("demonRepent", "100");
        console.log("LET ME OUT LET ME OUT LET ME OUT LET ME OUT PLEASE LET ME OUT LET ME OUT LET ME OUT LET ME OUT WHY HAVE YOU DONE THIS TO ME LET ME OUT OUT OUT OUT LET OUT LET ME OUT LET ME OUT LET ME OUT LET ME OUT PLEASE LET ME OUT LET ME OUT LET ME OUT LET ME OUT WHY HAVE YOU DONE THIS TO ME LET ME OUT OUT OUT OUT LET OUTLET ME OUT LET ME OUT LET ME OUT LET ME OUT PLEASE LET ME OUT LET ME OUT LET ME OUT LET ME OUT WHY HAVE YOU DONE THIS TO ME LET ME OUT OUT OUT OUT LET OUTLET ME OUT LET ME OUT LET ME OUT LET ME OUT PLEASE LET ME OUT LET ME OUT LET ME OUT LET ME OUT WHY HAVE YOU DONE THIS TO ME LET ME OUT OUT OUT OUT LET OUT LET ME OUT LET ME OUT LET ME OUT LET ME OUT PLEASE LET ME OUT LET ME OUT LET ME OUT LET ME OUT WHY HAVE YOU DONE THIS TO ME LET ME OUT OUT OUT OUT LET OUT");
    }
}

async function blinkBG(){
    bg.style.backgroundImage = "url('./Images/bg1.png')";
    await new Promise(r => setTimeout(r, 1000));
    bg.style.backgroundImage = "url('./Images/bg3.png')";
    await new Promise(r => setTimeout(r, 500));
    bg.style.backgroundImage = "url('./Images/bg1.png')";
}
setInterval(blinkBG, 6000);