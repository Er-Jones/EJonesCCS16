function setup() {
  createCanvas(500, 500);
}

function draw() {
  var x = 0;
  var y = 0;
  beginShape(LINES);
    while(x<width && y < height){
        vertex (x,y);
        x+=random(5);
        y+=random(5);
    }
    endShape();
  
}