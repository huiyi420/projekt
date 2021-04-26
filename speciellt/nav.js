"use strict"

let nav=document.getElementById("nav")
let Hej=document.getElementById("Hej")

//console.log(nav,Hej);

Hej.addEventListener("click",function(){
    //console.log("Klickad på: )");
    nav.classList.toggle("open")
})

document.addEventListener("keydown",function(event){
    if(event.key ==="Escape" && nav.classList.contains("open")){
        nav.classList.toggle("open")
    }
})