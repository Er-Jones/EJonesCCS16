function setup() {
  createCanvas(800,800);
  strokeWeight(2);
  
}

function draw() {
  colorMode(HSB, 360,100,100);
  background(190,0,0);
  
    beginShape();
    noStroke();
    
  fill(20,5,100);//door
  vertex(0,50);
  vertex(38,40);
  vertex(52,37);
  vertex(75,35);
  vertex(75,140);
  vertex(0,175);
  endShape();
   
  
  beginShape();//pathway
  fill(20,20,100);
  vertex(0,175);
  vertex(75,140);
  vertex(width,400);
  vertex(width,height);
  vertex(350,height);
  vertex(0,175);
  endShape();
   
   
  head (mouseX-5, mouseY-5, 10*mouseX/100, 20*mouseY/150);
   torso (mouseX-5, mouseY+5);
   legs (mouseX-3,mouseY+30);
   feet(mouseX-5,mouseY+54,8,5);
   
  

   function head (x, y, headW, headH){
     //var Y1 = 135;
     //var v = 48;
  
  fill(0,0,0);//head
  ellipse(x, y, headW, headH);
   }
   
   
  function torso (v,ty){
  fill(0,0,0);//torso
  //ty +110
  beginShape();
  fill(0,0,0);
  vertex(v,ty);
  vertex(v+4,ty+2);
  vertex(v+7,ty+10);//right elbow
  vertex(v+2,ty+20);
  vertex(v+2,ty+25);//bottom right torso
  vertex(v-3,ty+27);//bottom left torso
  vertex(v-3,ty+22);
  vertex(v-8,ty+22);//left elbow
  vertex(v-4,ty+4);
  vertex(v-1,ty);
  endShape();
    
  }
  
  function legs (x1,Y1){
  fill(0,0,0);//legs
  //x1 = 50
  vertex(x1,Y1);
  vertex(x1+1,Y1+3);
  vertex(x1+2,Y1+6);
  vertex(x1+2,Y1+9);//wide right leg
  vertex(x1+2,Y1+12);
  vertex(x1+1,Y1+15);
  vertex(x1,Y1+22);//bottom right leg
  vertex(x1-5,Y1+24);//bottom left leg
  vertex(x1-6,Y1+15);
  vertex(x1-7,Y1+12);
  vertex(x1-7,Y1+11);//wide left leg
  vertex(x1-7,Y1+6);
  vertex(x1-6,Y1+3);
  vertex(x1-5,Y1);//topleftleg
  vertex(x1,Y1);
  endShape();
  }
  
  function feet (x2,y2,feetwidth,feetheight){
  fill(0,0,0);//feet
  //y2=159
  //x2=47.5
  //feetwidth=8
  //feetheight=5
  ellipse(x2,y2,feetwidth,feetheight);
 
  }
  
}
   

 
 
 
  
  
