let dino = document.getElementById('dino');
let smalltree=document.getElementById('smalltree')
let bigtree=document.getElementById('bigtree')
let score=document.getElementById('score');
let over=document.getElementById('gameover');
var score1=0;
var gameover=0;

   document.onkeydown = function (e) {
    if (e.keyCode == 38 || e.keyCode == 32) {
         dino.classList.add('animation');
         setTimeout(() => {
             dino.classList.remove('animation')
             
         }, 400);
    }
    if(e.keyCode==39){
        let dinoX=parseInt(window.getComputedStyle(dino , null).getPropertyValue('left'));
        dino.style.left=dinoX+ 20 + "px";
    }
    if(e.keyCode==37){
        let dinoX=parseInt(window.getComputedStyle(dino , null).getPropertyValue('left'));
        dino.style.left=dinoX- 20 + "px";
    }
}

setInterval(()=>{
    let dinoX=parseInt(window.getComputedStyle(dino , null).getPropertyValue('left'));
    let dinoY=parseInt(window.getComputedStyle(dino , null).getPropertyValue('top'));
    let smalltreeX=parseInt(window.getComputedStyle(smalltree , null).getPropertyValue('left'));
    let bigtreeX=parseInt(window.getComputedStyle(bigtree , null).getPropertyValue('left'));
     let diffX=Math.abs(dinoX-smalltreeX);
     diffX1=Math.abs(dinoX-bigtreeX)
     if(dinoY==241)
     {
     if(diffX<32)
     {
        smalltree.classList.remove("smalltreeanimation");
        bigtree.classList.remove("bigtreeanimation");
        gameover=1;
        over.src="gameover.png"

     }
     if(diffX1<32)
     {
        bigtree.classList.remove("bigtreeanimation");
        smalltree.classList.remove("smalltreeanimation");
        gameover=1;
        over.src="gameover.png"
     }  
      }

},100)

setInterval(()=>{
    if(gameover!=1)
    {
    score.innerHTML=score1;
   score1=score1+1;
}
},1);

restart=()=>{
if(bigtree.className=="bigtreeanimation" || smalltree.className=="smalltreeanimation")
{
return;
}
else{
    bigtree.classList.add("bigtreeanimation");
        smalltree.classList.add("smalltreeanimation");
        over.src="";
        score1=0;
        score.innerHTML=score1;
        gameover=0;
}
}

