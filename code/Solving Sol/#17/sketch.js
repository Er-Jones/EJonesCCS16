function setup() {
  createCanvas(600,400);
}

function draw() {
  var rectHeight=50;
  var lineOne=175
  background(255,210,210);
  rect(25,rectHeight,100,300);
  //set a fill color
  fill(255,210,210);
  rect(lineOne,rectHeight,100,300);
  //set a fill color
  fill(255,210,210);
  rect(325,rectHeight,100,300);
  //set a fill color
  fill(255,210,210);
  rect(475,rectHeight,100,300);
  line(rectHeight,rectHeight,rectHeight,350);
  line(75,rectHeight,75,350);
  line(100,rectHeight,100,350);
  line(lineOne,100,275,100);
  line(lineOne,150,275,150);
  line(lineOne,200,275,200);
  line(lineOne,250,275,250);
  line(lineOne,300,275,300);
  line(375,rectHeight,325,100);
  line(425,85,325,185);
  line(425,175,325,270);
  line(425,265,325,350);
  line(475,90,575,215);
  line(525,50,575,115);
  line(475,180,575,310);
  line(475,270,535,350);
}