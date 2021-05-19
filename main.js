marsImage=["mars.jpg","Mars1.jpg","Mars2.jpg","Mars3.jpg","Mars4.jpg"];
randomNumber=Math.floor(Math.random()*4);
console.log(randomNumber)

canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

roverX=10;
roverY=10;
roverWidth=100;
roverHeight=90;

backgroundImage=marsImage[randomNumber];
roverImage="rover.png";

function add(){
    bg_Img_tg=new Image();
    bg_Img_tg.onload=uploadbackground;
    bg_Img_tg.src=backgroundImage;

    rover_Img_tg=new Image();
    rover_Img_tg.onload=uploadrover;
    rover_Img_tg.src=roverImage;
}

function uploadbackground(){
    ctx.drawImage(bg_Img_tg,0,0,canvas.width,canvas.height);
}
function uploadrover(){
    ctx.drawImage(rover_Img_tg,roverX,roverY,roverWidth,roverHeight);
}
window.addEventListener("keydown",myKeyDown);
function myKeyDown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(keyPressed=='37'){
       Left();
       console.log("left")
    }
    if(keyPressed=='38'){
        Top();
        console.log("top")
     }
     if(keyPressed=='39'){
        Right();
        console.log("right")
     }
     if(keyPressed=='40'){
        Down();
        console.log("down")
     }
}

function Left(){
    if(roverX>0){
    roverX=roverX-10;
    uploadbackground();
    uploadrover();
    }
}
function Right(){
    if(roverX<700){
    roverX=roverX+10;
    uploadbackground();
    uploadrover();
    }
}
function Top(){
    if(roverY>0){
    roverY=roverY-10;
    uploadbackground();
    uploadrover();
    }
}
function Down(){
    if(roverY<500){
    roverY=roverY+10;
    uploadbackground();
    uploadrover();
    }
}