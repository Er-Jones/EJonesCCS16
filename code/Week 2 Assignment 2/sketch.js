function setup() {
  createCanvas(400,400);
}

function draw() {
background (255,0,240);
 if(mouseX > 200){
   triangle(mouseX, mouseY, 250,250,75,75);}
 else if(mouseY > 200){
   rect(mouseX,mouseY, 100,100);
 }
}