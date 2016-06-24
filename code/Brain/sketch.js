var hi;
var no;
var coolpup;
var button;
var createImg;
var mydiv;
  //coolpup.parent('p5.Element');
  //brains = createImg('https://raw.githubusercontent.com/Er-Jones/EJonesCCS16/master/code/kevin%20final/assets/brains.png');
//function setup() {


// coolpup.position(windowWidth/2, windowHeight/2);
//  h1 = createElement('h1', "Here is a story all about Erica her life. Once upon a time she was like this");
//  //no = createImg("img', https://raw.githubusercontent.com/Er-Jones/EJonesCCS16/master/code/Brain/gifs/nonono.gif');
// }
// function changeImg(){
// 	hi.html(clea)
// }

// function mousePressed() {
//     h1.html("but then she started coding and was like this");
//     coolpup.remove();
//     createImg("https://raw.githubusercontent.com/Er-Jones/EJonesCCS16/master/code/Brain/gifs/nonono.gif");
//   }

var sel;

function setup() {
  textAlign(CENTER);
 // mydiv = createImg('https://raw.githubusercontent.com/Er-Jones/EJonesCCS16/master/code/Brain/gifs/pup.gif');
 // coolpup = createImg('https://raw.githubusercontent.com/Er-Jones/EJonesCCS16/master/code/Brain/gifs/pup.gif');
  sel = createSelect();
  sel.position(10, 10);
  sel.option('My coding story');
  sel.option('Before coding');
  sel.option('When p5 crashes');
  sel.option('grape');
  sel.changed(mySelectEvent);


function mySelectEvent() {
  var item = sel.value();
  //createCanvas(windowWidth, windowHeight);
 // background(200);
  if (item = 'Before Coding'){
   createImg('https://raw.githubusercontent.com/Er-Jones/EJonesCCS16/master/code/Brain/gifs/pup.gif');
  } 
  
  if (item = 'When p5 crashes'){
  	//mydiv.html('https://raw.githubusercontent.com/Er-Jones/EJonesCCS16/master/code/Brain/gifs/nonono.gif');
    //remove('https://raw.githubusercontent.com/Er-Jones/EJonesCCS16/master/code/Brain/gifs/pup.gif');
  	createImg('https://raw.githubusercontent.com/Er-Jones/EJonesCCS16/master/code/Brain/gifs/nonono.gif');
  }
  
}

} 
