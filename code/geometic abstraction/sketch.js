function setup() {
  createCanvas(300,440);
  background(209);
}

function draw() {
  beginShape();//purple rectangle
  noStroke();
  fill(40,0,60);
  vertex(150,0);
  vertex(240,15);
  vertex(180,110);
  vertex(85,95);
  endShape(CLOSE);
  beginShape();//yellow
  fill(200,175,0);
  noStroke();
  vertex(130,235);
  vertex(220,238);
  vertex(193,342);
  vertex(140,342);
  endShape(CLOSE);
  beginShape();//blue bar
  fill(0,0,100);
  vertex(50,305);
  vertex(250,322);
  vertex(250,333);
  vertex(50,316);
  endShape(CLOSE);
  beginShape();//blacksquare
  fill(25);
  vertex(65,288);
  vertex(115,288);
  vertex(117,340);
  vertex(64,339);
  endShape(CLOSE);
  beginShape();//blackrectangle 
  fill(25);
  vertex(138,350);
  vertex(148,365);
  vertex(108,385);
  vertex(98,370);
  endShape(CLOSE);
  beginShape();//larger red rect
  fill(200,35,0);
  vertex(138,375);
  vertex(185,373);
  vertex(188,386);
  vertex(140,388);
  endShape(CLOSE);
  beginShape();//small red rect
  fill(200,35,0);
  vertex(180,391);
  vertex(234,390);
  vertex(235,394);
  vertex(180,395);
  endShape(CLOSE);
  beginShape(0,200,0);
  fill(0,150,0);
  ellipse(200,408,15,15);
  
  
  
  
}