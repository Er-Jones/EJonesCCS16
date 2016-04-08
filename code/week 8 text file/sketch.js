//Fairy tales of Andersen (Paull)  (1872)  by Hans Christian Andersen, translated by H. P. Paull
//The Little Mermaid
var Lm;
var mermaid = ("Fishes, both large and small, glide between the branches, as birds fly among the trees here upon land. In the deepest spot of all, stands the castle of the Sea King. Its walls are built of coral, and the long, gothic windows are of the clearest amber. The roof is formed of shells, that open and close as the water flows over them. Their appearance is very beautiful, for in each lies a glittering pearl, which would be fit for the diadem of a queen.");
var story = [];
//var partsOfSpeech = [];
   var wordPosX = 10;
   var wordPosY = 250;
   var lexicon;
   

function setup() {
    Lm = loadImage("assets/littlemermaid.PNG");
    createCanvas(650,400);
    
    story = RiTa.tokenize(mermaid);
 
         //background(250,100,100);
         
        textSize(16);
        background(50,150,150);
    for(var i=0; i < story.length; i++){
      text(story[i], wordPosX, wordPosY, textWidth(story[i]+5,30));
      text("The Little Mermaid (1872)", 400, 390);
      
     
      wordPosX += textWidth(story[i])+ 3;
      
      //if wordPosX goes past width,
      //move the text down to a new line
      if(wordPosX +60 > width){
        wordPosX = 10;
        wordPosY += 25;
      }//closes if statement
    }// closes for loop
}//closes function setup
      lexicon = new RiLexicon();
      function mousePressed(){
        changingWords();
        fill(200,random(250),random (200));
        
        function changingWords (){
        var story = "Fishes, " +
        lexicon.randomWord(" nn ")+ "  "+
        lexicon.randomWord(" jj ")+
        " and "+ lexicon.randomWord(" jj ")+
        ", glide between the branches, as birds fly among the trees here upon "+
        lexicon.randomWord("nn")+
        ". In the deepest "+ lexicon.randomWord(" nn ")+
        " of all, stands the " + lexicon.randomWord(" nn ")+
        " of the Sea King. Its walls are built of "+
        lexicon.randomWord(" jj")+
        ", and the "+ lexicon.randomWord(" jj")+
        ", "+lexicon.randomWord(" jj ")+
        " windows are of the clearest " +
        lexicon.randomWord(" jj ")+
        ". The "+ lexicon.randomWord(" nn ")+
        " is formed of shells, that " +
        lexicon.randomWord(" jj ")+
        " and close as the "+
        lexicon.randomWord(" nn ")+
        " flows over them. Their "+
        lexicon.randomWord(" nn ")+
        " is very " + lexicon.randomWord(" jj ")+
        ", for in each lies a glittering "+
        lexicon.randomWord(" nn ")+
        ", which would be fit for the "+
        lexicon.randomWord(" nn ")+
        " of a queen. ";
        
        //background(random(250),random(100),random(100));
        background(Lm);
        textSize(16);
        text(story,10,250,630,380);
        text("The Little Mermaid (1872)", 400, 390);
      
        
        }
        
    }
 
        

