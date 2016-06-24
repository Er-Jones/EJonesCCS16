var size = 5;
var bangLength = 5;
var lifeConstant = 1000;
var startVelMin = -5;
var startVelMax = 7;
var drag = -50;
var planetArray = [];
var planet;
var planet0;
var planet1;
var planet3;
var posX;
var posY;
var systems;// SEE NOTE BELOW
var capture; // variable for the video

function preload(){

  bubble3 = loadImage('https://raw.githubusercontent.com/Er-Jones/EJonesCCS16/master/code/ipod/assets/bubbles.png');
  append(planetArray, bubble3);

  bubble0 = loadImage('https://raw.githubusercontent.com/Er-Jones/EJonesCCS16/master/code/ipod/assets/bubbles.png');
  append(planetArray, bubble0);

  bubble1 = loadImage('https://raw.githubusercontent.com/Er-Jones/EJonesCCS16/master/code/ipod/assets/bubbles.png');
  append(planetArray, bubble1);
}

//planetArray.add(bubble);
function setup() {
  createCanvas(windowWidth, windowHeight);
  capture = createCapture(VIDEO); // capture the video
  capture.size(windowWidth,windowHeight); // camera size
  capture.hide();
  systems = [];
  background(51);
  
}

function draw() {
  background(0)
  push();
  translate(width, 0);
  scale(-1.0, 1.0);
  tint(0,153,254);
  image(capture, 0, 0); // write to canvas
  pop();
  
  for (i = 0; i < systems.length; i++) { //add particles to array
    
    systems[i].addParticle();
    systems[i].run();

  }

  if (systems.length===0) {
    fill('white');
    stroke('black');
    textAlign(CENTER);
    textSize(42);
    text("Bubbles", width/2, height/2);
  }
}

function mousePressed() {
  var p = new ParticleSystem(createVector(mouseX, mouseY));
  systems.push(p);
  posX= mouseX;
  posY= mouseY;
}

// A simple Particle class
var Particle = function(position) {
  this.acceleration = createVector(0.1, .01);
  this.velocity = createVector(random(startVelMin,startVelMax), random(startVelMin,startVelMax));
  this.position = position.copy();
  this.lifespan = lifeConstant;
};

Particle.prototype.run = function() {
  this.update();
  this.display();
};

// Method to update position
Particle.prototype.update = function(){
  this.velocity.add(drag*this.acceleration);
  this.position.add(this.velocity);
  this.lifespan -= 150;
};

// Method to display
Particle.prototype.display = function () {
  //image(planet1, this.position.x, this.position.y, 15, 15)
  //KEVINS NOTE
  //MAKE SURE YOU USE planetArray.length INSTEAD OF HARD CODED NUMBER
  image(planetArray[floor(random(planetArray.length))], this.position.x, this.position.y, 15, 15); //displays images
};

// Is the particle still useful?
Particle.prototype.isDead = function () {
  if (this.lifespan < 0) {
    return true;
  } else {
    return false;
  }
};

var ParticleSystem = function (position) {
  this.origin = position.copy();
  this.particles = [];
};

ParticleSystem.prototype.addParticle = function () {
  // Add either a Particle or CrazyParticle to the system
  if (int(random(0, 2)) == 0) {
    p = new Particle(this.origin);
  }
  else {
    p = new
    CrazyParticle(this.origin);
  }
  this.particles.push(p);
};

ParticleSystem.prototype.run = function () {
  for (var i = this.particles.length - 1; i >= 0; i--) {
    var p = this.particles[i];
    p.run();
    if (p.isDead()) {
      this.particles.splice(i, 1);
    }
  }
};

// A subclass of Particle

function CrazyParticle(origin) {
  // Call the parent constructor, making sure (using Function#call)
  // that "this" is set correctly during the call
  Particle.call(this, origin);

  // Initialize our added properties
  this.theta = 0.0;
};

// Create a Crazy.prototype object that inherits from Particle.prototype.
// Note: A common error here is to use "new Particle()" to create the
// Crazy.prototype. That's incorrect for several reasons, not least 
// that we don't have anything to give Particle for the "origin" 
// argument. The correct place to call Particle is above, where we call 
// it from Crazy.
CrazyParticle.prototype = Object.create(Particle.prototype); // See note below

// Set the "constructor" property to refer to CrazyParticle
CrazyParticle.prototype.constructor = CrazyParticle;

// Notice we don't have the method run() here; it is inherited from Particle

// This update() method overrides the parent class update() method
CrazyParticle.prototype.update=function() {
  Particle.prototype.update.call(this);
  // Increment rotation based on horizontal velocity
  this.theta += (this.velocity.x * this.velocity.mag()) / 2.0;
}

// This display() method overrides the parent class display() method
CrazyParticle.prototype.display=function() {
  // Render the ellipse just like in a regular particle
  //  Particle.prototype.display.call(this);

}