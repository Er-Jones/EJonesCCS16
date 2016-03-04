function setup() {
  createCanvas (500,600);
  background (170,170,170);
  
}

function draw() {
  var firstX = 15;
  var rectWidth = 470;
  var rectHeight = 580;
  var inX1 = 50;
  var inX2 = 450;
  colorMode(HSB, 360, 80, 75);
  
  fill(15,100,100);
  noStroke();
  rect(firstX,10,rectWidth, rectHeight); //outside olarge light orane rect
  
  fill(15,75,45);//second large rect dark orange
  rect(firstX+10,20,450,560);
  
  fill(355,75,45);
  beginShape();//top skinny rect
  vertex(inX1,35);
  vertex(inX2,50);
  vertex(inX2,65);
  vertex(inX1,65);
  endShape();
  
  fill(360,70,45);//color 1
  beginShape();//2nd skinny rect
  vertex(inX1,80);
  vertex(inX2,80);
  vertex(inX2,85);
  vertex(inX1,85);
  endShape();
  
  fill(360,70,45);//color 1
  beginShape();//3nd skinny rect
  vertex(inX1,90);
  vertex(inX2,95);
  vertex(inX2,170);
  vertex(inX1,170);
  endShape();
  
  fill(270,70,40);//color 2
  beginShape();//4th skinny rect - Dark purple
  vertex(inX1+50,105);
  vertex(inX1+320,101);
  vertex(inX2-5,103);
  vertex(inX2-5,165);
  vertex(inX1+50,165);
  endShape();
  
  fill(340,80,40);//color 3
  beginShape();//5th skinny rect
  vertex(inX1,180);
  vertex(inX2,190);
  vertex(inX2,230);
  vertex(inX1,220);
  endShape();
  
  fill(340,80,40);//color 3
  beginShape();//6th skinny rect
  vertex(inX1,225);
  vertex(inX2,235);
  vertex(inX2,245);
  vertex(inX1,245);
  endShape();
  
 fill(360,70,45);//color 1
  beginShape();//7th skinny rect
  vertex(inX1,255);
  vertex(inX2,250);
  vertex(inX2,290);
  vertex(inX1,300);
  endShape(); 
  
  fill(270,70,40);//color 2
  beginShape();//8th skinny rect
  vertex(inX1+50,260);
  vertex(inX2,258);
  vertex(inX2,283);
  vertex(inX1+50,293);
  endShape();
  
  fill(360,70,45);//color 1
  beginShape();//9th skinny rect
  vertex(inX1,308);
  vertex(inX2,300);
  vertex(inX2,358);
  vertex(inX1,355);
  endShape(); 
  
   fill(270,70,40);//color 2
  beginShape();//10th skinny rect
  vertex(inX1+50,308);
  vertex(inX2,310);
  vertex(inX2,348);
  vertex(inX1+50,350);
  endShape();
  
  fill(360,70,45);//color 1
  beginShape();//11th skinny rect
  vertex(inX1,375);
  vertex(inX2,365);
  vertex(inX2,390);
  vertex(inX1,390);
  endShape(); 
  
  fill(360,70,45);//color 1
  beginShape();//12th skinny rect
  vertex(inX1,400);
  vertex(inX2,400);
  vertex(inX2,420);
  vertex(340,430);
  vertex(inX1,440);
  endShape(); 
  
  fill(270,70,40);//color 2
  beginShape();//13th skinny rect
  vertex(inX1+50,415);
  vertex(inX1+150,409);
  vertex(340,405);
  vertex(inX2,412);
  vertex(inX2,418);
  vertex(340,425);
  vertex(inX1+50,424);
  endShape();
  
  fill(360,70,45);//color 1
  beginShape();//14th skinny rect
  vertex(inX1,445);
  vertex(inX1+150,448);
  vertex(inX2,438);
  vertex(inX2,476);
  vertex(inX1,470);
  endShape();
  
  fill(270,70,40);//color 2
  beginShape();//13th skinny rect
  vertex(inX1+50,450);
  vertex(inX1+150,453);
  vertex(inX2,445);
  vertex(inX2,471);
  vertex(inX1+50,465);
  endShape();
  
  fill(360,70,45);//color 1
  beginShape();//14th skinny rect
  vertex(inX1,485);
  vertex(inX2,490);
  vertex(inX2,553);
  vertex(inX1,555);
  endShape();
  
  fill(270,70,40);//color 2
  beginShape();//13th skinny rect
  vertex(inX1+50,485);
  vertex(inX2-25,488);
  vertex(inX1+200,500);
  vertex(inX1+50,505);
  endShape();
  
   fill(270,70,40);//color 2
  beginShape();//13th skinny rect
  vertex(inX1+50,520);
  vertex(inX2,510);
  vertex(inX2,547);
  vertex(inX1+50,542);
  endShape();
  

}