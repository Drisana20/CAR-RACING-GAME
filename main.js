canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
rover_width = 100;
rover_height = 90;
rover_x = 10;
rover_y = 10;
background_img = "mars.jpg";
rover_img = "rover.png";
function add(){
    imgtag = new Image();
    imgtag.onload = uploadBackground;
    imgtag.src = background_img;
    rimgtag = new Image();
    rimgtag.onload = uploadrover;
    rimgtag.src = rover_img;
}
function uploadBackground(){
    ctx.drawImage(imgtag, 0, 0, canvas.width, canvas.height);
}
function uploadrover(){
    ctx.drawImage(rimgtag, rover_x, rover_y, rover_width, rover_height);
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e){
  keyPressed = e.keyCode; 
  console.log(keyPressed);
if (keyPressed == '38'){
up();
console.log("up");
}
if (keyPressed == '40'){
    down();
    console.log("down");
    }
    if (keyPressed == '37'){
        left();
        console.log("left");
        }
        if (keyPressed == '39'){
            right();
            console.log("right");
            }
}

