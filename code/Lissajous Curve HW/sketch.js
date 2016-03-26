var angle = 0.0;
  var amplitude = 50;
  var wavelengthone = 50;
  var wavelengthtwo = 60;
  var pointCount = 0.0;
  function setup() {
  createCanvas(420,420);
}

function draw() {
  //frameRate = 0.5
 push();
 ellipses (50,50);//ellipses(e,l) row1
 pop(); 
        push();
        triangles (160,50);//triangles(t,r) row1
        pop();
               push();
               rectangles (270,50);//rectangles(g,l) row1 
               pop();
 push();
 rectangles (50,160);//rectangles(g,l) row2 
 pop();
        push();
        ellipses (160,160);//ellipses(e,l) row2
        pop(); 
                push();
                triangles (270,160);//triangles(t,r) row2
                pop();
  push();
  triangles (50,270);//triangles(t,r) row3
  pop();
         push();
         rectangles (160,270);//rectangles(g,l) row3
         pop();
                push();
                ellipses (270,270);//ellipses(e,l) row3
                pop(); 

  
  function ellipses (e,l){//function to set up cirlce curve
  push();//first curve circles
  translate(e,l);
  strokeWeight(1);
  noStroke();
  fill(250,sin(5),250);
  beginShape();
 for (var i=0; i<pointCount; i+=2) {
    angle = i/ wavelengthone * PI;
    var x= sin(angle)*amplitude;
    
    angle = i/ wavelengthtwo * PI;
    var y= sin(angle)*amplitude;
    
    ellipse(x,y,5,5);
 }
 
  endShape();
  pointCount++;
  pop();
  }
  
  function triangles(t,r){//function to set up triangle curve
  push();//second curve triangles
  translate(t, r);
  strokeWeight(2);
  stroke(200,sin(5),250);
  fill(200,sin(5),250);
  beginShape();
 for (var i=0; i<pointCount; i+=2) {
    angle = i/ wavelengthone * PI;
    var x= sin(angle)*amplitude;
    
    angle = i/ wavelengthtwo * PI;
    var y= sin(angle)*amplitude;
    
    triangle(x,y,x+1,y+1, x-1, y+1);
 }
 
  endShape();
  pointCount++;
  pop();
  } 
  
  function rectangles (g,l){//function to set up rectangle curve curve
  push();
  translate(g, l);
  strokeWeight(2);
  noStroke();
  fill(175,sin(5),200);
  beginShape();
 for (var i=0; i<pointCount; i+=2) {
    angle = i/ wavelengthone * PI;
    var x= sin(angle)*amplitude;
    
    angle = i/ wavelengthtwo * PI;
    var y= sin(angle)*amplitude;
    
    rect(x,y,3,3);
 }
 
  endShape();
  pointCount++;
  pop();
  } 
   
}