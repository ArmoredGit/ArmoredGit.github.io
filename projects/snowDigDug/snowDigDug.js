var snowflakeArray;
var snowBlockArray;
var player1;
var moving;
var attacking;
var started;
var obs;
var localScore;
var pumpKills;
var rockKills;
var scoreBoard;
var timer;
var levels;
var playing;
var exp;
var rocksDropped;
var maze;
var wsize;

//https://i1.wp.com/www.edcollins.com/digdug/digdug-grid.gif image of dig dug game
//DigDug functions: http://www.edcollins.com/digdug/#:~:targetText=You%20score%20more%20points%20if,it%2C%20squashing%20it%20to%20death.

function setup() {
  wsize = ((window.innerWidth > window.innerHeight)?(floor(window.innerHeight/18)*18):(floor(window.innerWidth/18)*18));
  createCanvas(wsize,wsize);
  background(31, 17, 120);
  localScore=0;
  levels = new LevelSelect(1);
  levels.resetLevel();
  playing = false;
}


function draw() {
  if(playing){
    background(31, 17, 120);
    noStroke();
    fill(0, 121, 163);
    rect(0, width / 18 *17, 800, 900-(width / 18 *17));
    timer++;
    textAlign(LEFT);
    let greeting = "Happy Holidays!";
    let x1 = 3*width/18;
    let y1 = height/18;
    noStroke();
    textSize(height / 18);
    if((timer)%50<=5){
      fill(255,0,0);
    } else {
      fill(0,255,0);
    }
    text(greeting, x1, y1);
    if((timer)%50<=5){
      fill(0,255,0);
    } else {
      fill(255,0,0);
    }
    text(greeting, x1+4, y1+4);
    
    
    for(let i = 0; i < 400;i++){
      snowflakeArray[i].show();
      snowflakeArray[i].move();
    }
    noStroke();
    fill(0);
    rect(14 * width / 18, 0, 4 * width / 18, height);
    for(let i = 0; i < 14;i++){
      for(let j = 0; j < 15;j++){
        snowBlockArray[i][j].show();
      }
    }
    player1.show();
    if(attacking){
      player1.attack();
      moving = false;
      print(77);
    }
    
    //calls to movement
    if((keyCode==UP_ARROW || (mousPressed && mouseY > (2 * height / 18) + (width / 144) + (width / 36) && mouseY < (2 * height / 18) + (width / 144) + (width / 36) + (22 * height / 144))) && moving){
      player1.move(1);
      started=true;
      attacking = false;
    } else if ((keyCode==DOWN_ARROW || (mousPressed && mouseY > (5 * height / 18) + (width / 144) + (width / 36) && mouseY < (5 * height / 18) + (width / 144) + (width / 36) + (22 * height / 144))) && moving){
      player1.move(3);
      started=true;
      attacking = false;
    } else if ((keyCode==LEFT_ARROW ||  (mousPressed && mouseY > (8 * height / 18) + (width / 144) + (width / 36) && mouseY < (8 * height / 18) + (width / 144) + (width / 36) + (22 * height / 144))) && moving){
      player1.move(4);
      started=true;
      attacking = false;
    } else if ((keyCode==RIGHT_ARROW ||  (mousPressed && mouseY > (11 * height / 18) + (width / 144) + (width / 36) && mouseY < (11 * height / 18) + (width / 144) + (width / 36) + (22 * height / 144))) && moving){
      player1.move(2);
      started=true;
      attacking = false;
    }
    
    //draw, move, and kill for monsters 
    scoreBoard.show();
    obs.forEach(x => x.show());
    obs.forEach(x => x.move());
    obs.forEach(x => x.kill());
    for(let i = obs.length-1; i >= 0; i--){
      if(obs[i].dead){
        obs.splice(i,1);
      }
    }
    
    //fruit -- this sort of works
    if(rocksDropped >= 2){
      stroke("black");
      if(round(levels.level) == 1){
        fill("red");
      } else if(round(levels.level) == 2){
        fill("white");
      } else if(round(levels.level) == 3){
        fill("red");
        stroke("brown");
      } else if(round(levels.level) == 4){
        fill("green");
        stroke("white");
      } else if(round(levels.level) == 5){
        fill("green");
        stroke("white");
      } else if(round(levels.level) == 6){
        fill("purple");
        stroke("blue");
      } else if(round(levels.level) == 7){
        fill("purple");
        stroke("blue");
      } else if(round(levels.level) == 8){
        fill("brown");
        stroke("green");
      } else if(round(levels.level) == 9){
        fill("brown");
        stroke("green");
      } else if(round(levels.level) == 10){
        fill("red");
      } else if(round(levels.level) == 11){
        fill("red");
      } else if(round(levels.level) == 12){
        fill("orange");
        stroke("yellow");
      } else if(round(levels.level) == 13){
        fill("orange");
        stroke("yellow");
      } else if(round(levels.level) == 14){
        fill("red");
        stroke("green");
      } else if(round(levels.level) == 15){
        fill("red");
        stroke("green");
      } else if(round(levels.level) == 16){
        fill("yellow");
        stroke("blue");
      } else if(round(levels.level) == 17){
        fill("yellow");
        stroke("blue");
      } else if(round(levels.level) >= 18){
        fill("yellow");
        stroke("white");
      } 
      rect((width / 18 * 6) + (height / 72), (2 * height / 18) + (height / 18 * 7) + (width / 72), (2 * width / 72), (2 * height / 72));
      noStroke();
      if(player1.x == 6 && player1.y == 7){
        rocksDropped = -10;
        if(round(levels.level) == 1){
          scoreBoard.add(400);
        } else if(round(levels.level) == 2){
          scoreBoard.add(600);
        } else if(round(levels.level) == 3){
          scoreBoard.add(800);
        } else if(round(levels.level) == 4){
          scoreBoard.add(1000);
        } else if(round(levels.level) == 5){
          scoreBoard.add(1000);
        } else if(round(levels.level) == 6){
          scoreBoard.add(2000);
        } else if(round(levels.level) == 7){
          scoreBoard.add(2000);
        } else if(round(levels.level) == 8){
          scoreBoard.add(3000);
        } else if(round(levels.level) == 9){
          scoreBoard.add(3000);
        } else if(round(levels.level) == 10){
          scoreBoard.add(4000);
        } else if(round(levels.level) == 11){
          scoreBoard.add(4000);
        } else if(round(levels.level) == 12){
          scoreBoard.add(5000);
        } else if(round(levels.level) == 13){
          scoreBoard.add(5000);
        } else if(round(levels.level) == 14){
          scoreBoard.add(6000);
        } else if(round(levels.level) == 15){
          scoreBoard.add(6000);
        } else if(round(levels.level) == 16){
          scoreBoard.add(7000);
        } else if(round(levels.level) == 17){
          scoreBoard.add(7000);
        } else if(round(levels.level) >= 18){
          scoreBoard.add(8000);
        } 
      } 
    }
    
    //buttons -- rect((width / 18 * x) + (height / 144), (2 * height / 18) + (height / 18 * y) + (width / 144), (22 * width / 144), (22 * height / 144));
    fill(255);
    stroke(255);
    rect((width / 18 * 14) + (height / 144) + (width / 36), (2 * height / 18) + (width / 144) + (width / 36), (22 * width / 144), (22 * height / 144));
    rect((width / 18 * 14) + (height / 144) + (width / 36), (5 * height / 18) + (width / 144) + (width / 36), (22 * width / 144), (22 * height / 144));
    rect((width / 18 * 14) + (height / 144) + (width / 36), (8 * height / 18) + (width / 144) + (width / 36), (22 * width / 144), (22 * height / 144));
    rect((width / 18 * 14) + (height / 144) + (width / 36), (11 * height / 18) + (width / 144) + (width / 36), (22 * width / 144), (22 * height / 144));
    rect((width / 18 * 14) + (height / 144) + (width / 36), (14 * height / 18) + (width / 144) + (width / 36), (22 * width / 144), (22 * height / 144));
    stroke(0);
    textSize(height / 18);
    text("--",(width / 18 * 14) + (height / 144) + (width / 36), (2 * height / 18) + (width / 144) + (width / 36), (22 * width / 144), (22 * height / 144));
    text("^",(width / 18 * 14) + (height / 144) + (width / 36), (5 * height / 18) + (width / 144) + (width / 36), (22 * width / 144), (22 * height / 144));
    text(">",(width / 18 * 14) + (height / 144) + (width / 36), (8 * height / 18) + (width / 144) + (width / 36), (22 * width / 144), (22 * height / 144));
    text("v",(width / 18 * 14) + (height / 144) + (width / 36), (11 * height / 18) + (width / 144) + (width / 36), (22 * width / 144), (22 * height / 144));
    text("<",(width / 18 * 14) + (height / 144) + (width / 36), (14 * height / 18) + (width / 144) + (width / 36), (22 * width / 144), (22 * height / 144));
    
    //lower info pannel
    textAlign(RIGHT);
    textSize(height / 36);
    text("level " + round(levels.level) + "\n/12",0, (17 * height / 18), (14 * height / 18), (height / 18));
    textAlign(CENTER);
    
    //ending the level
    let j = true;
    for(let i = obs.length-1; i >= 0; i--){
      if(obs[i].type != "rock"){
        j = false;
      }
    }
    if(j){
      levels.setLevel(levels.level + 1);
      levels.resetLevel();
    }
  } else {
    //animation / stall screen
    background(31, 17, 120);
    timer++;
    if((timer)%50<=25){
      fill(255,0,0);
    } else {
      fill(0,255,0);
    }
    if(timer < 500){
      textAlign(CENTER);
      textSize(height / 36);
      text("MERRY CHRISTMAS",0,2*height/9 + (height) - (timer * height / 500),width,height/3 + (height) - (timer * height / 500));
      textSize(height / 9);
      text("DIG DUG",0,3*height/9 + (height) - (timer * height / 500),width,4*height/9 + (height) - (timer * height / 500));
      textSize(height / 36);
      text("1UP      HIGH SCORE         ",0,height/18 + (height) - (timer * height / 500),width,height/9 + (height) - (timer * height / 500));
      textSize(height / 36);
      text("CHARACTER",0,4*height/9 + (height) - (timer * height / 500),width,5*height/9 + (height) - (timer * height / 500));
      textSize(height / 36);
      text("POOKA                   FYGAR",0,5*height/9 + (height) - (timer * height / 500),width,6*height/9 + (height) - (timer * height / 500));
      textSize(height / 36);
      fill("white");
      text("BASED ON A NAMCO GAME\nREPRODUCED BY M.LESKA & N.RUDD",0,6*height/9 + (height) - (timer * height / 500),width,7*height/9 + (height) - (timer * height / 500));
      textSize(height / 36);
      text("CREDIT  INF                                ROUND 1",0,17*height/18 + (height) - (timer * height / 500),width,8*height/9 + (height) - (timer * height / 500));
      text("\n[    press any key to begin    ]",0,2*height/9 + (height) - (timer * height / 500),width,height/3 + (height) - (timer * height / 500));
      text("\n00           000000             ",0,height/18 + (height) - (timer * height / 500),width,height/9 + (height) - (timer * height / 500));
      fill("red");
      rect((width / 18 * 6) + (height / 36), (height / 18 * 7) + (2 * height / 18) + (height) - (timer * height / 500), width / 18, height / 18);
      fill("green");
      rect((width / 18 * 10) + (height / 36), (height / 18 * 7) + (2 * height / 18) + (height) - (timer * height / 500), width / 18, height / 18);
      fill("orange");
      if((timer)%50<=25){
        rect((width / 18 * 11) + (height / 36), (height / 18 * 7) + (2 * height / 18) + (height) - (timer * height / 500), width / 18, height / 18);
      }
      fill("black");
      stroke("white");
      rect((width / 18 * 8) + (height / 36), (height / 18 * 7) + (2 * height / 18) + (height) - (timer * height / 500), width / 18, height / 18);
      noStroke();
    } else if(timer < 800){
      textAlign(CENTER);
      textSize(height / 36);
      text("MERRY CHRISTMAS",0,2*height/9,width,height/3);
      textSize(height / 9);
      text("DIG DUG",0,3*height/9,width,4*height/9);
      textSize(height / 36);
      text("1UP      HIGH SCORE         ",0,height/18,width,height/9);
      textSize(height / 36);
      text("CHARACTER",0,4*height/9,width,5*height/9);
      textSize(height / 36);
      text("POOKA                   FYGAR",0,5*height/9,width,6*height/9);
      textSize(height / 36);
      fill("white");
      text("BASED ON A NAMCO GAME\nREPRODUCED BY M.LESKA & N.RUDD",0,6*height/9,width,7*height/9);
      textSize(height / 36);
      text("CREDIT  INF                                ROUND " + levels.level,0,17*height/18,width,8*height/9);
      text("\n[    press any key to begin    ]",0,2*height/9,width,height/3);
      text("\n00           000000             ",0,height/18,width,height/9);
      fill("red");
      rect((width / 18 * 6) + (height / 36), (height / 18 * 7) + (2 * height / 18), width / 18, height / 18);
      fill("green");
      rect((width / 18 * 10) + (height / 36), (height / 18 * 7) + (2 * height / 18), width / 18, height / 18);
      fill("orange");
      if((timer)%50<=25){
        rect((width / 18 * 11) + (height / 36), (height / 18 * 7) + (2 * height / 18), width / 18, height / 18);
      }
      fill("black");
      stroke("white");
      rect((width / 18 * 8) + (height / 36), (height / 18 * 7) + (2 * height / 18), width / 18, height / 18);
      noStroke();
    } else if(timer < 1500){
      background(0);
      background(31, 17, 120);
      noStroke();
      fill(0, 121, 163);
      rect(0, width / 18 *17, 800, 900-(width / 18 *17));
      timer++;
      textAlign(LEFT);
      let greeting = "Happy Holidays!";
      let x1 = 165;
      let y1 = 85;
      noStroke();
      textSize(height / 18);
      if((timer)%50<=5){
        fill(255,0,0);
      } else {
        fill(0,255,0);
      }
      text(greeting, x1, y1);
      if((timer)%50<=5){
        fill(0,255,0);
      } else {
        fill(255,0,0);
      }
      text(greeting, x1+4, y1+4);
      for(let i = 0; i < 400;i++){
        snowflakeArray[i].show();
        snowflakeArray[i].move();
      }
      noStroke();
      fill(0);
      rect(14 * width / 18, 0, 4 * width / 18, height);
      for(let i = 0; i < 14;i++){
        for(let j = 0; j < 15;j++){
          snowBlockArray[i][j].show();
        }
      }
      player1.show();
      if(round(timer)%2 == 1 && timer < 950){
        player1.move(2);
      } else if(round(timer)%2 == 1 && timer < 1100){
        player1.move(3);
      } else if(round(timer)%2 == 1 && timer < 1250){
        player1.move(4);
      } else if(round(timer)%2 == 1 && timer < 1450){
        player1.move(1);
      } else if(round(timer)%2 == 1){
        player1.move(2);
      }
      scoreBoard.show();
      obs.forEach(x => x.show());
      obs.forEach(x => x.move());
      obs.forEach(x => x.kill());
      for(let i = obs.length-1; i >= 0; i--){
        if(obs[i].dead){
          obs.splice(i,1);
        }
      }
    } else {
      timer = 0;
      levels.resetLevel();
    }
  }
}

function mousePressed() {
  if(!playing){
    playing = true;
    levels.resetLevel();
  } else {
    print(367);
    if(mouseX<14 * width / 18 || mouseY > ((5 * height / 18) + (width / 144) + (width / 36))){
      attacking = true;
      print(370);
    } else {
      moving=true;
      attacking = false;
    }
  }
}

function mouseReleased() {
  attacking = false;
}

function keyPressed() {
  if(!playing){
    playing = true;
    levels.resetLevel();
  } else {
    moving=true;
    attacking = false;
  }
}

function keyReleased(){
  moving=false;
}
