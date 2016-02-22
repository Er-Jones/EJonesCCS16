function setup() {
  createCanvas(400,400);
}

function draw() {
  background(0);
  strokeWeight(4);
  stroke(255);
  
  for (var x = 0; x <= mouseX; x += 65){
    for (var y = 0; y <= height; y+= 65){
     fill(255, random(215), random(0));
      rect(x,y,50,50);
    }
      
  }
  
    
  for (var i = 0; i<= width; i += 15){
    beginShape();
    vertex(0,i);
    vertex(400,400);
    endShape();
     
    beginShape();
    vertex(i,0);
    vertex(400,400);
    endShape();
  }
}