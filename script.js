score=0;
cross= true;

audio= new Audio('music.mp3');
audiogo= new Audio('gameover.mp3');

setTimeout(()=>{
  audio.play();
},1000);
document.onkeydown= function(e){
    console.log("key code is: ",e.keyCode)
    if(e.keyCode==38){
        dino= document.querySelector('.dino');
        dino.classList.add('animateDino');
        setTimeout(()=>{
            console.log('yes')
        dino.classList.remove('animateDino')
    },700);
}

 if(e.keyCode==39){
  dino= document.querySelector('.dino');
  dinoX= parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
  dino.style.left = dinoX + 150 + "px";
}

if(e.keyCode== 37){
  dino= document.querySelector('.dino');
  dinoX= parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
  dino.style.left= (dinoX - 122) + "px";
}
}

setInterval(()=>{
  dino=document.querySelector('.dino');
  obstacle= document.querySelector('.obstacle');
  gameover = document.querySelector('.gameover');

  dx= parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
  dy= parseInt(window.getComputedStyle(dino,null).getPropertyValue('top'));

  ox= parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('left'));
  oy= parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('top'));

  offsetX= Math.abs(dx-ox);
  offsetY= Math.abs(dy-oy);

  if(offsetX<73 &&  offsetY<52){
    gameover.innerHTML= "GAME OVER- Reload to play again ";
    obstacle.classList.remove('obstacleAni');
    dino.style.transform='rotate(-135deg)';
    audiogo.play();
    audio.pause();
  }
  else if(offsetX<140 && cross){
     score+=10;
     updateScore(score);
     cross=false;
     setTimeout(()=>{
     cross=true;
},1000);
setTimeout(()=>{
  aniDur= parseFloat(window.getComputedStyle(obstacle,null).getPropertyValue('animation-duration'));
 
  obstacle.style.animationDuration= (aniDur-0.1)+'s';
},500);
  }
    
},10);

function updateScore(score){
  scorecont.innerHTML= "your score is : "+ score;
}