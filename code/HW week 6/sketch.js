
var girl;
var theta = 0.0;
function setup() {
  createCanvas(windowWidth,windowHeight);
  
 girl = loadImage("images/girl.jpg")
}

function draw() {
  colorMode(HSB, 360, 100, 100);
  background(girl);
  noStroke();
  translate (width/2, height/2);
  rotate (theta);
  from = color(5, 100, 100);
  to = color(75, 100, 100)
  interA = lerpColor(from, to,2);
  interB = lerpColor(from, to,3);
  interC = lerpColor(from, to,4);
  theta += 2.0;
  fill (from);
  ellipse(frameCount % (width/2),0,80,80);
  fill (interA);
  ellipse(frameCount % (width/3),0,random(90),random(90));
  fill (interB)
  ellipse(frameCount % (width/4), 0,100,100);
  fill (interC);
  ellipse(frameCount % (width/5), 0,125,125);
  fill (to)
 
    }
  



    

