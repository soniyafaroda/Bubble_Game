var timer = 60;
var score = 0;
var hitrn =0; 

/* jispe click krege us element par event raise hoga,
or event listener na milne pr event element ke parent 
 par listener dhundhega, waha bhi na milne par event 
parent ke parent par listner dhundhega */

function increaseScore(){
   score += 10; // score = score + 10;
   document.querySelector("#scoreval").textContent = score;
}

function getNewHit(){
 hitrn =  Math.floor(Math.random() * 10);
 document.querySelector("#hitval").textContent = hitrn;
}

function makeBubble(){
var clutter = "";
for(var i=1;i<190; i++){
   var rn = Math.floor(Math.random()*10)
  clutter +=  `<div class="bubble">${rn}</div>`;
}
document.querySelector("#Pbtm").innerHTML= clutter;
}
function runTimer(){ 
  var timerint =  setInterval(function () {
    if(timer > 0){
    timer--;
    document.querySelector("#timerval").textContent = timer;
    }
    else{
      clearInterval(timerint);
      document.querySelector("#Pbtm").innerHTML = `<h1 id="game">GAME OVER !</h1>`;
    }

  }, 1000);
}

document.querySelector("#Pbtm")
.addEventListener("click",function (dets) {
var clickednum =( Number(dets.target.textContent));
if(clickednum === hitrn){
  increaseScore();
  makeBubble(); 
  getNewHit();
}

});


runTimer();
makeBubble(); 
getNewHit();



