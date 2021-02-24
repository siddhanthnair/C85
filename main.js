canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
backgroundimage="mars.jpg";
roverimage="rover.png";
function add(){
    background_img=new Image();
background_img.onload=uploadbackground;
background_img.src=backgroundimage;
rover_img=new Image();
rover_img.onload=uploadrover;
rover_img=roverimage;
}
function uploadbackground(){
    ctx.drawImage(background_img,0,0,canvas.width,canvas.height);
}
rover_x=10;
rover_y=10;
w=100;
h=100;
function uploadrover(){
    ctx.drawImage(rover_img,rover_x,rover_y,w,h);
}
window.addEventListener("keydown",mykeydown);
function mykeydown(e){
    keypress=e.keyCode;
    console.log("inside my keydown function")
    console.log(keypress);
        if(keypress=="38"){
            up();
}
if(keypress=="40"){
    down();
}
if(keypress=="37"){
    left();
}
if(keypress=="39"){
    right();
}
}

function up(){
    if(rover_y>0){
    rover_y=rover_y-10
    uploadbackground();
    uploadrover();
    }
}
    function down(){
        if(rover_y<500){
        rover_y=rover_y+10;
        uploadbackground();
        uploadrover();
        }
}
function left(){
    if(rover_x>0){
    rover_x=rover_x-10;
    uploadbackground();
    uploadrover();
    }
}
function right(){
    if(rover_x<700){
    rover_x=rover_x+10;
    uploadbackground();
    uploadrover();
    }
}



