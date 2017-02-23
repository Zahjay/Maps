// Original code by Daniel Shiffman: https://vimeo.com/channels/learningp5js/138327559
// Modified by Dawn C. Hayes February 2017
// Modified by Zahra Vestibule work.

//Spot
//spot b/c point doesn't work.
var spot = {
  x: 350,
  y: 175
}

//color with rgb
var col = {
  r:255,
  g: 204,
  b: 153
}

function setup() {
  createCanvas(680,460);
  background(0);
}

function draw() {
  col.r = random(200,254);
  col.g = random(54,100);
  col.b = random(150);
  spot.x = random(0,width);
  spot.y = random(0,height);
  noStroke();
  fill(col.r, col.g, col.b, 100);
  ellipse(spot.x, spot.y, 16, 16);
  
}