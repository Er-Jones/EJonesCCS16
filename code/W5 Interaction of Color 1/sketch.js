function setup() {
createCanvas (405,653);
frameRate(0.5);
colorMode(HSB, 360,100,100);
}

function draw () {
  var circColor = random;
  fill (160,60,50);
rect (0,0, width, 190);//top rect

fill (185,30,75);
rect (0,190, width, 170); //second rect

fill(340,20,80);
rect (0,360, width, 140); // third rect

fill(130,20,20);
rect (0,500, width, 153); //bottom rect


for (var x = 0; x <= width; x +=45) { //circles
    for (var y = 0; y <= height; y += 45){
      noStroke();
      fill(random(95)%115,random(50)%100, 30);
    ellipse (x+5, y+5, 45, 45);
    
            

             
           }
            
}
}