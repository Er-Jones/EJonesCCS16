var Lion;
var rSlider;
var bSlider;
var	gSlider;
var lww = ("Only you mustn't press her. She is wild you know. Not like a tame lioness.");// lion witch and the wardrobe
var story = [];
var r;
var g;
var b;
var storyLine = "";   

function preload(){
	 Lion = loadImage('assets/lion.png'); 
}

function setup() {
 createCanvas(windowWidth, windowHeight);
 background(0);
	
  rSlider = createSlider(0, 255, 100);
  rSlider.position(20, windowHeight-140);
  gSlider = createSlider(0, 255, 0);
  gSlider.position(20, windowHeight- 120);
  bSlider = createSlider(0, 255, 255);
  bSlider.position(20, windowHeight-100);

 lexicon = new RiLexicon();
 story = RiTa.tokenize(lww);
}
  

function draw() {
	background(0);
	r = rSlider.value();
  	g = gSlider.value();
  	b = bSlider.value();

	fill (r,g,b);

 	rect (windowWidth/2+60, windowHeight/2-45, 50, 50);
 	rect (windowWidth/2-120, windowHeight/2-45, 50, 50);
	tint(25);
	imageMode(CENTER);
    image(Lion, windowWidth/2, windowHeight/2);
    
    textSize(20);
	//background(0,0,0);
	fill(r,g,b);
	text(storyLine,windowWidth/2-375,windowHeight-20);
	
    

}///////END DRAW

     
 
  function mousePressed(){
    changingWords();
    
  }
      
  function changingWords (){
	storyLine = 
	"Only you mustn't press her. She is " + 
	lexicon.randomWord(" jj ") +
	" you know. Not like a " + 
	lexicon.randomWord(" jj ")+
	" lioness."

	
	}


   


 