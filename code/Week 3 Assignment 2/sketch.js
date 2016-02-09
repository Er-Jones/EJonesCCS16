
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(150,100,255);
}

function draw() {
    
    for(var x=0; x<=40; x++){
      fill (100, 220, 220); 
      for(var y=0; y<=30; y++){
      ellipse(x*30,y*30,20,20);
    }
    } 
}