//I recorded the number of times I searched travel related info every day. The height of
//the building correlates to the number of searches I made. Taller = more searches

var table;
var travelsearch = [];
var BH;
var colorFrom;
var colorTo;
var rectStep = 10;
var plane;

function preload() {
  table = loadTable("Data/travelsearch.csv", "csv", "header");//table of # of times I serch travel info per day
}


function setup() {
  	createCanvas(500,500);
  	textSize(12);
  	travelsearch = table.getColumn("Search");//getting data from travel search table
  	plane = loadImage("assets/plane.png")
  
}

function draw(){
  background(255);
  push();
  	colorFrom = color(230, 191, 70);
  	colorTo = color(209, 74,63);
  	
  		for(var x=0; x < height; x += rectStep){
		 noStroke();
   		var lerpAmt = map(x,height,0, 0, 1.0);
    	var lerpedCol = lerpColor(colorFrom, colorTo, lerpAmt);    
		 fill(lerpedCol);
    	rect(0,x,width,rectStep);
  	}
  translate(200,270);
  for(var i = 0; i < travelsearch.length; i++){
     translate(42,0)//moves building over for every array element
    
    push();
    var BH = travelsearch[i];
    var r = 100
    
  beginShape();
  	 vertex(20,200);
  	  vertex(20,r -(50+BH*10));//buliding height according to # travel searches per day
	  vertex(25,r -(50+BH*10));
	  	vertex(25,r-(60+BH*10));
		 vertex(30,r-(60+BH*10));
	  		vertex(30,r-(65+BH*10));
	  		vertex(35,r-(65+BH*10));
	  			vertex(35,r-(70+BH*10));//mid building
	  			vertex(45,r-(70+BH*10));//mid building
	  		vertex(45,r-(65+BH*10));
	  		vertex(50,r-(65+BH*10));
	  	vertex(50,r-(60+BH*10));
	  	vertex(55,r-(60+BH*10));
	  vertex(55,r-(50+BH*10));
	  vertex(60,r-(50+BH*10));
	 vertex(60,200);
	 vertex(20,200);
  endShape(CLOSE);
  
   pop();

  }
pop();

text("mon", 270, 482);
text("tue",315,482);
text("wed",357,482);
text("thur",400,482);
text("fri",445,482);

noCursor();
tint(255,145);
image(plane, mouseX, mouseY)
}