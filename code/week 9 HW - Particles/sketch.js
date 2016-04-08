var circles = [];

function setup() { 
  var particles = { // object
  x : random(0, width),
  y : random (0, height),
  display : function() { ellipse (this.x, this.y, 5, 5)},
  mytranslate :function() {translate (frameCount % width,frameCount%height);
  rotate(radians(frameCount))},
  
};

function Particles(){ //constructor function 
  this.x = random (0, width);
  this.y = random (0, height);
  this.display = function() { ellipse (this.x, this.y, 15, 15)};
  this.mytranslate = function() {translate (frameCount % width,frameCount%height);
  rotate(radians(frameCount))}; 
  
}
  
  createCanvas(1100, 500);
  for (i=0; i<150; i++){ // add to circles array
    circles[i] = new Particles();
}
}

function draw() {
  push();
  colorMode(HSB,360,100,100);
  noStroke ();
  fill(255);
  
  for (i=0; i< circles.length; i++){
     var lerpAmt = map(i, 0, width, 0, 1.0);
     colorFrom = color(245,70,90);
     colorTo = color(100,75,100);
     var lerpedCol = lerpColor(colorFrom, colorTo,lerpAmt);
     fill(lerpedCol);
     
    circles[i].display();
    circles[i].mytranslate();
  }
  pop();
  fill(255);
  textSize(22);
  text("Even behind prison walls I can see the heavy clouds and the blue sky over the horizon - Mandela",10,300);
 

}
