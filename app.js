
var burger = document.querySelector(".burger");
var nav = document.querySelector(".nav-links");
var navItem = document.querySelectorAll(".menu ul li");

function OnOff(){
    nav.classList.toggle("nav-active");
    
}



burger.addEventListener("click",OnOff);

navItem.forEach(element => {
    element.addEventListener("click",OnOff)
});






