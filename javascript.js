'use strict'
  
document.oncontextmenu = function(){return false}


var Menu =document.querySelector("#menu");
var Desplegar=document.querySelector("#Desplegar");
var colapse=document.querySelector("#Colapse"); 
var Banner=document.querySelector("#imagen");


 
  
 Desplegar.addEventListener("click",function(){

  Menu.style.display="block";
  Desplegar.style.display="none";
  colapse.style.display="block";

});

colapse.addEventListener("click",function(){

    Menu.style.display="none";
    Desplegar.style.display="block";
    colapse.style.display="none";
  
});
  

