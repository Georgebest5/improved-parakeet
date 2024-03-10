image ="" ;

function preload() {
    image=createImage('background.jpg');
    image.hide();
}
function setup() {
    canvas=createCanvas(480, 380);
    canvas.center();
}
function draw(){
    image(image,0,0,480,380);
}
function start() {
    objectDetector = ml5.objectDetector('cocossd' , modelLoaded);
  document.getElementById("status").innerHTML= "Status : Detecting Objects";
}
 function modelLoaded() {
    console.log ("Model Loaded!");
    status=true;
 }