function setup() {
  createCanvas(windowWidth,windowHeight);
  fill(255,0,100);
  frameRate();
}

function draw() {
  var rand = (windowHeight/2);
  background(100,0,0);
  
  if(random(100)<12)
  {ellipse(rand,rand,rand,rand);
  ellipse (rand/2,rand/2,rand/2,rand/2);
  ellipse (rand*2,rand*2,rand*2,rand*2);
  ellipse (rand*4,rand*4,rand*4,rand*4);

  }

}