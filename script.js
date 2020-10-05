var PHP = 5;
var DHP = 10;


var DHPEle = document.body.querySelector(".DHP");
var PHPEle = document.body.querySelector(".PHP");

document.body.querySelector(".DHP").innerHTML=DHP;
document.body.querySelector(".PHP").innerHTML=PHP;

var prompter1 = prompt("How many hits will you do? (up to 5)");

var PDMG = Math.floor(Math.random() * prompter1 + 1);

var DDMG = Math.floor(Math.random() * 2 + 1);


var DTaken = DHP-PDMG;
var PTaken = PHP-DDMG;

for (var i=0; i<4; i++)
{
  repeat=Number(prompt("How many hits will you do? (up to 5)"));
  document.body.querySelector(".DHP").innerHTML=DTaken;
  document.body.querySelector(".PHP").innerHTML=PTaken;
}

if (DHP <= 0){
  document.body.querySelector(".results").innerHTML="Excellent you have saved the town from the dragon"
  
}else if (PHP <= 0){
  document.body.querySelector(".result").innerHTML="you lost the game. Try and refresh to try again"
}