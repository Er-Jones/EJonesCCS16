function setup() {
  createCanvas(400,400);
}

function draw() {
  background(0);
  strokeWeight(4);
  stroke(random(250),0,200);
  
 for (var i = 0; i<= width; i += 15){
    beginShape();
    vertex(0,i);
    vertex(200,200);
    endShape();
     
    beginShape();
    vertex(i,0);
    vertex(200,200);
    endShape();
 }
    
for (var y = 0; y<= height; y += 15){//lines set 2
    beginShape();
    vertex(200,200);
    vertex(400,y);
    endShape();
     
    beginShape();
    vertex(200,200);
    vertex(y,400);
    endShape();
  }
}
  
