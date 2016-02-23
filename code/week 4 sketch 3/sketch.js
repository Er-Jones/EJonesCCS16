function setup() {
  createCanvas(320,400);
  background(0);
  strokeWeight(3);
  stroke(255);
}

function draw() {
 noFill(); //left eye
beginShape();
curveVertex(100,  100);
curveVertex(100,  100);
curveVertex(112,  108);
curveVertex(124,  108);
curveVertex(136, 100);
curveVertex(136, 100);
endShape();
 
noFill(); //right eye
beginShape();
curveVertex(200,  100);
curveVertex(200,  100);
curveVertex(212,  108);
curveVertex(224,  108);
curveVertex(236, 100);
curveVertex(236, 100);
endShape();
 
beginShape (); //nose bridge
vertex(150,75);
vertex (150,164);
endShape(); 
 
beginShape ();//nostril 1
curveVertex (164,170);
curveVertex (164,170);
curveVertex (168,166);
curveVertex (170,164);
curveVertex (172,166);
curveVertex (172,166);
endShape ();
 
beginShape ();//nostril 2
curveVertex (136,170);
curveVertex (136,170);
curveVertex (132,166);
curveVertex (130,164);
curveVertex (128,166);
curveVertex (128,166);
endShape ();
 
beginShape();//mouth
curveVertex(130,224);
curveVertex(130,224);
curveVertex(140,212);
curveVertex(152,204);
curveVertex(170,204);
curveVertex(170,204);
endShape();
 
beginShape();//side of face
curveVertex(240,40);
curveVertex(240,40);
curveVertex(228,204);
curveVertex(212,232);
curveVertex(156,276);
curveVertex(156,276);
endShape ();
 
beginShape ();//neck
vertex(192,252);
vertex (192,308);
endShape();
}