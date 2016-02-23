function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  colorMode(HSB, 360, 100, 100);
rectMode(CENTER);
background(mouseY%360, 50,100);
noStroke();
fill(360-mouseX%360,50,100); // inverse color
rect(width/2,height/2,mouseX+1,mouseX+1);

}