var button = 1;
var foodCount = 0;
var rs = 5;
var fs = 9;
var wt = 0;
var birdFlightFrame = 0;
var birdDirect = 0;

let x = 1;
let y = 1;
let easing = 0.3;

let rbg;
let bg1;
let bg2;
let bg3a;
let bg3b;
let bg4;


let bf1;
let bf2;
let bf3;
let bf4;
let bf5;
let bf6;
let bf7;
let bf8;
let bf9;
let bf10;

let bfr1;
let bfr2;
let bfr3;
let bfr4;
let bfr5;
let bfr6;
let bfr7;
let bfr8;
let bfr9;
let bfr10;


let bs1;
let bs2;
let bs3;
let bs4;
let bs5;
let bs6;
let bs7;
let bs8;
let bs9;
let bs10;

let bsr1;
let bsr2;
let bsr3;
let bsr4;
let bsr5;
let bsr6;
let bsr7;
let bsr8;
let bsr9;
let bsr10;


let bw0;
let bwr0;

let bw1;
let bw2;
let bw3;
let bw4;
let bw5;
let bw6;
let bw7;
let bw8;
let bw9;
let bw10;

let bwr1;
let bwr2;
let bwr3;
let bwr4;
let bwr5;
let bwr6;
let bwr7;
let bwr8;
let bwr9;
let bwr10;


let rg;

let r1;
let r2;
let r3;
let r4;
let r5;
let r6;
let r7;
let r8;


let f1
let f2
let f3
let f4
let f5
let f6
let f8

let f9a
let f9ag
let f9b
let f9bg
let f9c
let f9cg


function preload() {
  rbg = loadImage('BG/BG 2699x1839.png');
  bg1 = loadImage('BG/BG 1.png');
  bg2 = loadImage('BG/BG 2.png');
  bg3a = loadImage('BG/BG 3a.png');
  bg3b = loadImage('BG/BG 3b.png');
  bg4 = loadImage('BG/BG 4.png');
  
  
  bf1 = loadImage('flyingBirdFrames/1.png');
  bf2 = loadImage('flyingBirdFrames/2.png');
  bf3 = loadImage('flyingBirdFrames/3.png');
  bf4 = loadImage('flyingBirdFrames/4.png');
  bf5 = loadImage('flyingBirdFrames/5.png');
  bf6 = loadImage('flyingBirdFrames/6.png');
  bf7 = loadImage('flyingBirdFrames/7.png');
  bf8 = loadImage('flyingBirdFrames/8.png');
  bf9 = loadImage('flyingBirdFrames/9.png');
  bf10 = loadImage('flyingBirdFrames/10.png');
  
  bfr1 = loadImage('flyingBirdFrames/1r.png');
  bfr2 = loadImage('flyingBirdFrames/2r.png');
  bfr3 = loadImage('flyingBirdFrames/3r.png');
  bfr4 = loadImage('flyingBirdFrames/4r.png');
  bfr5 = loadImage('flyingBirdFrames/5r.png');
  bfr6 = loadImage('flyingBirdFrames/6r.png');
  bfr7 = loadImage('flyingBirdFrames/7r.png');
  bfr8 = loadImage('flyingBirdFrames/8r.png');
  bfr9 = loadImage('flyingBirdFrames/9r.png');
  bfr10 = loadImage('flyingBirdFrames/10r.png');
  
  
  bs1 = loadImage('sleepingBirdFrames/1.png');
  bs2 = loadImage('sleepingBirdFrames/2.png');
  bs3 = loadImage('sleepingBirdFrames/3.png');
  bs4 = loadImage('sleepingBirdFrames/4.png');
  bs5 = loadImage('sleepingBirdFrames/5.png');
  bs6 = loadImage('sleepingBirdFrames/6.png');
  bs7 = loadImage('sleepingBirdFrames/7.png');
  bs8 = loadImage('sleepingBirdFrames/8.png');
  bs9 = loadImage('sleepingBirdFrames/9.png');
  bs10 = loadImage('sleepingBirdFrames/10.png');
  
  bsr1 = loadImage('sleepingBirdFrames/1r.png');
  bsr2 = loadImage('sleepingBirdFrames/2r.png');
  bsr3 = loadImage('sleepingBirdFrames/3r.png');
  bsr4 = loadImage('sleepingBirdFrames/4r.png');
  bsr5 = loadImage('sleepingBirdFrames/5r.png');
  bsr6 = loadImage('sleepingBirdFrames/6r.png');
  bsr7 = loadImage('sleepingBirdFrames/7r.png');
  bsr8 = loadImage('sleepingBirdFrames/8r.png');
  bsr9 = loadImage('sleepingBirdFrames/9r.png');
  bsr10 = loadImage('sleepingBirdFrames/10r.png');
  
  
  bwr0 = loadImage('walkingBirdFrames/sr.png');
  bw0 = loadImage('walkingBirdFrames/s.png');
  
  bw1 = loadImage('walkingBirdFrames/1.png');
  bw2 = loadImage('walkingBirdFrames/2.png');
  bw3 = loadImage('walkingBirdFrames/3.png');
  bw4 = loadImage('walkingBirdFrames/4.png');
  bw5 = loadImage('walkingBirdFrames/5.png');
  bw6 = loadImage('walkingBirdFrames/6.png');
  bw7 = loadImage('walkingBirdFrames/7.png');
  bw8 = loadImage('walkingBirdFrames/8.png');
  bw9 = loadImage('walkingBirdFrames/9.png');
  bw10 = loadImage('walkingBirdFrames/10.png');
  
  bwr1 = loadImage('walkingBirdFrames/1r.png');
  bwr2 = loadImage('walkingBirdFrames/2r.png');
  bwr3 = loadImage('walkingBirdFrames/3r.png');
  bwr4 = loadImage('walkingBirdFrames/4r.png');
  bwr5 = loadImage('walkingBirdFrames/5r.png');
  bwr6 = loadImage('walkingBirdFrames/6r.png');
  bwr7 = loadImage('walkingBirdFrames/7r.png');
  bwr8 = loadImage('walkingBirdFrames/8r.png');
  bwr9 = loadImage('walkingBirdFrames/9r.png');
  bwr10 = loadImage('walkingBirdFrames/10r.png');
  
  
  rg = loadImage('rope/g.png');
  
  r1 = loadImage('rope/1.png');
  r2 = loadImage('rope/2.png');
  r3 = loadImage('rope/3.png');
  r4 = loadImage('rope/4.png');
  r5 = loadImage('rope/5.png');
  r6 = loadImage('rope/6.png');
  r7 = loadImage('rope/7.png');
  r8 = loadImage('rope/8.png');
  
  
  f1 = loadImage('feeder/1.png');
  f2 = loadImage('feeder/2.png');
  f3 = loadImage('feeder/3.png');
  f4 = loadImage('feeder/4.png');
  f5 = loadImage('feeder/5.png');
  f6 = loadImage('feeder/6.png');
  f7 = loadImage('feeder/7.png');
  f8 = loadImage('feeder/8.png');
  
  f9a = loadImage('feeder/9a.png');
  f9ag = loadImage('feeder/9ag.png');
  f9b = loadImage('feeder/9b.png');
  f9bg = loadImage('feeder/9bg.png');
  f9c = loadImage('feeder/9c.png');
  f9cg = loadImage('feeder/9cg.png');
  
  
}

function setup() {
  createCanvas(windowWidth, windowHeight);
   noCursor();
}

function draw() {
  image(rbg, 0, 0, windowWidth, windowHeight);
  image(bg4, 0, 0, windowWidth, windowHeight);
  
  ropeState();
  
  image(bg3b, 0, 0, windowWidth, windowHeight);
  image(bg2, 0, 0, windowWidth, windowHeight);
  
  let targetX = mouseX;
  let dx = targetX - x;
  x += dx * easing;

  let targetY = mouseY;
  let dy = targetY - y;
  y += dy * easing;
  
  feederState();
  
  birdDirection();
  

  cursorLoc();
  
 
  birdFlightFrame++;
   if(birdFlightFrame == 10){
    birdFlightFrame = 0
    }
  
  image(bg3a, 0, 0, windowWidth, windowHeight);
  image(bg1, 0, 0, windowWidth, windowHeight);

}

function birdDirection(){
  if(pmouseX > mouseX){
    birdDirect = 0
  }
  if(pmouseX < mouseX){
    birdDirect = 1
  }
}

function cursorLoc(){
   if(mouseX > (1.5* windowWidth)/6 && mouseX < (2.4* windowWidth)/6 && mouseY+60 > windowHeight/2 && mouseY+60 <(3*windowHeight)/5 || mouseX > windowWidth - (.9 * windowWidth)/3 && mouseY+60 > (.85*windowHeight)/2 && mouseY+60 <(5.25*windowHeight)/10 || mouseX > windowWidth - (1.1 * windowWidth)/3 && mouseY+60 > (4.9*windowHeight)/6 && mouseY+60 <(40.3*windowHeight)/42){
    if(pmouseX != mouseX || pmouseY != mouseY){
      walkingBirdFrame();
    }else{
      standingBirdFrame();
    }
     
  }else if(mouseX < (1.5* windowWidth)/6 && mouseY+60 > windowHeight/2 && mouseY+60 <(3*windowHeight)/5){
     if(pmouseX != mouseX || pmouseY != mouseY){
      //frameRate(15);
      //circle (mouseX, mouseY, 30);
      walkingBirdFrame();
    }else{
      sleepingBirdFrame();
    }
  }else{
    flyingBirdFrame();
  }

}


function flyingBirdFrame(){
  
  frameRate(15);
  
  if(birdDirect == 0){
   
  if(birdFlightFrame == 0){
    image(bf1, x-125, y-125, 250, 250);
    }
  if(birdFlightFrame == 1){
    image(bf2, x-125, y-125, 250, 250);
    } 
 if(birdFlightFrame == 2){
    image(bf3, x-125, y-125, 250, 250);
    } 
  if(birdFlightFrame == 3){
    image(bf4, x-125, y-125, 250, 250);
    } 
  if(birdFlightFrame == 4){
    image(bf5, x-125, y-125, 250, 250);
    } 
  if(birdFlightFrame == 5){
    image(bf6, x-125, y-125, 250, 250);
    } 
  if(birdFlightFrame == 6){
    image(bf7, x-125, y-125, 250, 250);
    } 
  if(birdFlightFrame == 7){
    image(bf8, x-125, y-125, 250, 250);
    } 
  if(birdFlightFrame == 8){
    image(bf9, x-125, y-125, 250, 250);
    } 
  if(birdFlightFrame == 9){
    image(bf10, x-125, y-125, 250, 250);
    } 
  }
  
  if(birdDirect == 1){
    
    if(birdFlightFrame == 0){
      image(bfr1, x+125, y-125, -250, 250);
    }
    if(birdFlightFrame == 1){
      image(bfr2, x+125, y-125, -250, 250);
    }
    if(birdFlightFrame == 2){
      image(bfr3, x+125, y-125, -250, 250);
    } 
    if(birdFlightFrame == 3){
      image(bfr4, x+125, y-125, -250, 250);
    } 
    if(birdFlightFrame == 4){
      image(bfr5, x+125, y-125, -250, 250);
    } 
    if(birdFlightFrame == 5){
      image(bfr6, x+125, y-125, -250, 250);
    } 
    if(birdFlightFrame == 6){
      image(bfr7, x+125, y-125, -250, 250);
    } 
    if(birdFlightFrame == 7){
      image(bfr8, x+125, y-125, -250, 250);
    } 
    if(birdFlightFrame == 8){
      image(bfr9, x+125, y-125, -250, 250);
    } 
    if(birdFlightFrame == 9){
      image(bfr10, x+125, y-125, -250, 250);
    } 
  }
}

function standingBirdFrame(){
  
  frameRate(15);
  
  if(birdDirect == 0){
   
    image(bw0, x-125, y-125, 250, 250);
  }
  
  if(birdDirect == 1){
    
   image(bwr0, x+125, y-125, -250, 250);
  }
}

function walkingBirdFrame(){
  
  frameRate(15);
  
  if(birdDirect == 0){
   
  if(birdFlightFrame == 0){
    image(bw1, x-125, y-125, 250, 250);
    }
  if(birdFlightFrame == 1){
    image(bw2, x-125, y-125, 250, 250);
    } 
 if(birdFlightFrame == 2){
    image(bw3, x-125, y-125, 250, 250);
    } 
  if(birdFlightFrame == 3){
    image(bw4, x-125, y-125, 250, 250);
    } 
  if(birdFlightFrame == 4){
    image(bw5, x-125, y-125, 250, 250);
    } 
  if(birdFlightFrame == 5){
    image(bw6, x-125, y-125, 250, 250);
    } 
  if(birdFlightFrame == 6){
    image(bw7, x-125, y-125, 250, 250);
    } 
  if(birdFlightFrame == 7){
    image(bw8, x-125, y-125, 250, 250);
    } 
  if(birdFlightFrame == 8){
    image(bw9, x-125, y-125, 250, 250);
    } 
  if(birdFlightFrame == 9){
    image(bw10, x-125, y-125, 250, 250);
    } 
  }
  
  if(birdDirect == 1){
    
    if(birdFlightFrame == 0){
      image(bwr1, x+125, y-125, -250, 250);
    }
    if(birdFlightFrame == 1){
      image(bwr2, x+125, y-125, -250, 250);
    }
    if(birdFlightFrame == 2){
      image(bwr3, x+125, y-125, -250, 250);
    } 
    if(birdFlightFrame == 3){
      image(bwr4, x+125, y-125, -250, 250);
    } 
    if(birdFlightFrame == 4){
      image(bwr5, x+125, y-125, -250, 250);
    } 
    if(birdFlightFrame == 5){
      image(bwr6, x+125, y-125, -250, 250);
    } 
    if(birdFlightFrame == 6){
      image(bwr7, x+125, y-125, -250, 250);
    } 
    if(birdFlightFrame == 7){
      image(bwr8, x+125, y-125, -250, 250);
    } 
    if(birdFlightFrame == 8){
      image(bwr9, x+125, y-125, -250, 250);
    } 
    if(birdFlightFrame == 9){
      image(bwr10, x+125, y-125, -250, 250);
    } 
  }
}

function sleepingBirdFrame(){
  
  frameRate(5);
  
  if(birdDirect == 0){
   
  if(birdFlightFrame == 0){
    image(bs1, x-125, y-100, 250, 250);
    }
  if(birdFlightFrame == 1){
    image(bs2, x-125, y-100, 250, 250);
    } 
 if(birdFlightFrame == 2){
    image(bs3, x-125, y-100, 250, 250);
    } 
  if(birdFlightFrame == 3){
    image(bs4, x-125, y-100, 250, 250);
    } 
  if(birdFlightFrame == 4){
    image(bs5, x-125, y-100, 250, 250);
    } 
  if(birdFlightFrame == 5){
    image(bs6, x-125, y-100, 250, 250);
    } 
  if(birdFlightFrame == 6){
    image(bs7, x-125, y-100, 250, 250);
    } 
  if(birdFlightFrame == 7){
    image(bs8, x-125, y-100, 250, 250);
    } 
  if(birdFlightFrame == 8){
    image(bs9, x-125, y-100, 250, 250);
    } 
  if(birdFlightFrame == 9){
    image(bs10, x-125, y-100, 250, 250);
    } 
  }
  
  if(birdDirect == 1){
    
    if(birdFlightFrame == 0){
      image(bsr1, x+125, y-100, -250, 250);
    }
    if(birdFlightFrame == 1){
      image(bsr2, x+125, y-100, -250, 250);
    }
    if(birdFlightFrame == 2){
      image(bsr3, x+125, y-100, -250, 250);
    } 
    if(birdFlightFrame == 3){
      image(bsr4, x+125, y-100, -250, 250);
    } 
    if(birdFlightFrame == 4){
      image(bsr5, x+125, y-100, -250, 250);
    } 
    if(birdFlightFrame == 5){
      image(bsr6, x+125, y-100, -250, 250);
    } 
    if(birdFlightFrame == 6){
      image(bsr7, x+125, y-100, -250, 250);
    } 
    if(birdFlightFrame == 7){
      image(bsr8, x+125, y-100, -250, 250);
    } 
    if(birdFlightFrame == 8){
      image(bsr9, x+125, y-100, -250, 250);
    } 
    if(birdFlightFrame == 9){
      image(bsr10, x+125, y-100, -250, 250);
    } 
  }
}

function ropeState(){
  
  if(foodCount == 0 && rs == 5 || foodCount == 1 || foodCount == 2 ){
    image(r5, 0, 0, windowWidth, windowHeight);
  }
  
  if(rs == 1){
    image(r1, 0, 0, windowWidth, windowHeight);
  }
  
  if(rs == 1 && mouseX > (2.5*windowWidth)/3 && mouseX < (11*windowWidth)/12 && mouseY > windowHeight/6 && mouseY < windowHeight/3){
    image(rg, 0, 0, windowWidth, windowHeight);
  }
  
  if(rs == 8){
    image(r8, 0, 0, windowWidth, windowHeight);
    rs = 1;
  }
  
  if(rs == 7){
    image(r7, 0, 0, windowWidth, windowHeight);
    rs = 8;
  }
  
   if(foodCount == 3 && rs == 6){
    image(r6, 0, 0, windowWidth, windowHeight);
    rs = 7;
  }
  
  if(rs == 4){
    image(r4, 0, 0, windowWidth, windowHeight);
    rs = 5;
  }
  
  if(rs == 3){
    image(r3, 0, 0, windowWidth, windowHeight);
    rs = 4;
  }
  
  if(rs == 2){
    image(r2, 0, 0, windowWidth, windowHeight);
    rs = 3;
  }
}

function mouseClicked() {
  if (mouseX > (2.5*windowWidth)/3 && mouseX < (11*windowWidth)/12 && mouseY > windowHeight/6 && mouseY < windowHeight/3) {
    if(foodCount == 3){
      rs = 2;
      fs = 2;
      button = 1;
      foodCount = 0;
    }
  }
  
  if(mouseX > (2.2*windowWidth)/3 && mouseX < (8.6*windowWidth)/9 && mouseY > (5.5 * windowHeight)/9 && mouseY < (8.5*windowHeight)/9){
    if(foodCount == 2){
      foodCount = 3;
      rs = 6;
    }
     if(foodCount == 1){
      foodCount = 2;
    }
    if(foodCount == 0){
      foodCount = 1;
    }
  }
}

function feederState() {
  
  if (foodCount == 0 && fs == 9) {
    image(f9a, 0, 0, windowWidth, windowHeight);
  }
  
  if (foodCount == 0 && fs == 9 && mouseX > (2.2*windowWidth)/3 && mouseX < (8.6*windowWidth)/9 && mouseY > (5.5 * windowHeight)/9 && mouseY < (8.5*windowHeight)/9) {
    image(f9ag, 0, 0, windowWidth, windowHeight);
  }
  
  if (foodCount == 1 && fs == 9) {
    image(f9b, 0, 0, windowWidth, windowHeight);
  }
  
  if (foodCount == 1 && fs == 9 && mouseX > (2.2*windowWidth)/3 && mouseX < (8.6*windowWidth)/9 && mouseY > (5.5 * windowHeight)/9 && mouseY < (8.5*windowHeight)/9) {
    image(f9bg, 0, 0, windowWidth, windowHeight);
  }
  
  if (foodCount == 2 && fs == 9) {
    image(f9c, 0, 0, windowWidth, windowHeight);
  }
  
  if (foodCount == 2 && fs == 9 && mouseX > (2.2*windowWidth)/3 && mouseX < (8.6*windowWidth)/9 && mouseY > (5.5 * windowHeight)/9 && mouseY < (8.5*windowHeight)/9) {
    image(f9cg, 0, 0, windowWidth, windowHeight);
  }
  
  if (foodCount == 3) {
    image(f1, 0, 0, windowWidth, windowHeight);
  }
  
  if(fs == 8){
    image(f8, 0, 0, windowWidth, windowHeight);
    fs = 9;
  }
  
  if(fs == 7){
    image(f7, 0, 0, windowWidth, windowHeight);
    fs = 8;
  }
  
  if(fs == 6){
    image(f6, 0, 0, windowWidth, windowHeight);
    fs = 7;
  }
  
  if(fs == 5){
    image(f5, 0, 0, windowWidth, windowHeight);
    fs = 6;
  }
  
  if(fs == 4 && wt == 20){
    image(f4, 0, 0, windowWidth, windowHeight);
    fs = 5;
    wt = 0;
  }
  
  if(fs == 3){
    image(f3, 0, 0, windowWidth, windowHeight);
    fs = 4;
    wt = 1;
  }
  
  if(fs == 2){
    image(f2, 0, 0, windowWidth, windowHeight);
    fs = 3;
  }
  
  if(wt > 0 && wt < 20){
    wt++;
  }

}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}