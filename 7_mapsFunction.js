//Original code by Dan Stillman, Modifidied by Zahra A.

var r = 0;
var b = 255;

function setup() {
  createCanvas(820, 625);
}

function draw() {
  //background
  r = map(mouseX,0, 600, 0, 255);//Maps red
  b = map(mouseX, 0, 600, 255, 0)//Maps blue
  background(r, 0, b);
  //rectangle
  fill(65,10,93);
  rect(mouseX, 350, 55, 55);//MouseX allos for movement of shape with mouse.
  
}