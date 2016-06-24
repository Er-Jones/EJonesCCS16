function setup() {
  createCanvas(windowWidth,windowHeight);
  background(0);
}

function draw() {
	

  if(mouseIsPressed){
  	stroke(200);
  	//fill(255,255,0);
    line(pmouseX,pmouseY,mouseX,mouseY)
    }
}