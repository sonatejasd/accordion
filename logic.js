const details = document.getElementsByClassName("content");
const buttons = document.getElementsByClassName("section");
let signs = document.getElementsByClassName("sign");
let display = ["none","none","none"];

for (let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click",function(){
        if(display[i] === "none"){
            details[i].style.display = "block";
            display[i] = "block";
            buttons[i].classList.add("active");
            signs[i].textContent = "-";
            closeOtherContent(i);
        }
        else{
            console.log("second click")
            details[i].style.display = "none"; 
            display[i] = "none";
            buttons[i].classList.remove("active");
            signs[i].textContent = "+"; 
        }  
    });
}

function closeOtherContent(index) {
    for (let j = 0; j < display.length; j++) {
        if (j !== index && display[j] === "block") {
            details[j].style.display = "none";
            display[j] = "none";
            buttons[j].classList.remove("active")
            signs[j].textContent = "+"; 
        }
    }
}
