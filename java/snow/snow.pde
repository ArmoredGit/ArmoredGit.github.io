SnowFlake snowFlake;
PImage tree, controls;
SnowFlake[] mySnow = new SnowFlake[300];
gameState stats = new gameState();
ScoreBoard heigh = new ScoreBoard();
animate wait = new animate();
Tetro tetris = new Tetro();
float wind = 0; 
int[] treeX = {0, 0, 0},treeY = {0, 0, 0};
boolean keyDown = false, devMode = false;
int ADSdelay = 0,initialADSdelay = 0,animationDelay = 0,windTime = 0,gameSpeed = 0,tetrisDrop = 0;



void setup() {
  size(1000, 1000);
  snowFlake = new SnowFlake();
  stroke (255, 255, 255);
  for (int i=0; i<mySnow.length; i++) {
    mySnow[i]=new SnowFlake();
  }
  tree = loadImage("tree.png");
  controls = loadImage("Control.png");
  noStroke();
  for (int i=0; i<3; i++) {
    treeX[i] = (int)(Math.random()*(width*.8));
    treeY[i] = (int)(Math.random()*(height*.15))+(int)(height*0.7);
  }
}


void draw() {
  background(49, 194, 247);
  fill(255);
  rect(0, height*0.8 - 20, width, height);
  for (int i=0; i<3; i++) {
    image(tree, treeX[i], treeY[i], width*.15, height*.15);
  }
  if (tetris.getGame() == 2) {
    if (keyDown != false) {
      if (ADSdelay >= 3 && initialADSdelay >= 8) {
        keyPressed();
        ADSdelay = 0;
      } else {
        ADSdelay++;
        initialADSdelay++;
      }
    }
    if (gameSpeed>=(40/stats.getScore()[2])) {
      tetris.refresh();
      gameSpeed=0;
    }
    text("Next Piece", width/2+50, 600, width, height);
    tetris.preview();
    tetris.drawBoard();
    if(tetrisDrop != 0){
      textSize(100);
      fill(255, 0, 0);
      text("TETRIS", width/4-100, 450, width, height);
      tetrisDrop--;
    }
  } else {
    if(animationDelay < 500){
      tetris.drawBoard();
    }
    tetris.merge(tetris.getPiece()+7);
    if (tetris.getGame() == 1) {
      fill(0, 255, 0);
      text("YOU WIN", width/2+10, 450, width, height);
    } else if (tetris.getGame() == 3) {
      fill(255, 0, 0);
      text("YOU LOSE", width/2+10, 450, width, height);
    }
    textSize(30);
    fill(0, 255, 0);
    text("Press \"ENTER\" To Play", width/2+50, 600, width, height);
    if(animationDelay >= 500){
      if (gameSpeed>=30) {
        wait.nextFrame();
        gameSpeed=0;
      }
      wait.drawFrame();
    }
    animationDelay++;
  }
  fill(255);
  snowFlake.display();
  for (int i=0; i<mySnow.length; i++) {
    mySnow[i].display();
  }
  fill(0, 0, 0, 30);
  rect(width/2, 0, width, height);
  fill(255, 13, 13);
  textSize(50);
  image(controls, width/2+250, 400, 250, 250);
  text("Merry Christmas", width/2+50, 50, width, height);
  text("Score :"+stats.getScore()[0], width/2+50, 150, width, height);
  text("Level :"+stats.getScore()[2], width/2+50, 250, width, height);
  text("Lines :"+stats.getScore()[1], width/2+50, 350, width, height);
  text("~HIGHSCORES~", width/2+50, 650, width, height);
  text(""+heigh.getScore()[0], width/2+100, 700, width, height);
  text(""+heigh.getScore()[1], width/2+100, 750, width, height);
  text(""+heigh.getScore()[2], width/2+100, 800, width, height);
  text(""+heigh.getScore()[3], width/2+100, 850, width, height);
  text(""+heigh.getScore()[4], width/2+100, 900, width, height);
  gameSpeed++;
}


void keyPressed() {
  if (tetris.getGame() == 2) {
    switch(keyCode) {
    case LEFT : 
      tetris.slideT(1);
      keyDown = true;
      break;
    case RIGHT : 
      tetris.slideT(-1);
      keyDown = true;
      break;
    case 90 : 
      tetris.rotateTetronomo(1);
      break;
    case 88 : 
      tetris.rotateTetronomo(-1);
      break;
    case DOWN : 
      tetris.refresh();
      stats.addPoints(1);
      keyDown = true;
      break;
    case 32 : 
      tetris.drop();
      break;
    case 192 : 
      devMode = ((devMode)?false:true);
      break;
    }
  } else {
    if (keyCode == ENTER) {
      tetris.reset();
      tetris.spawn();
    }
  }
}

void keyReleased() {
  keyDown = false;
  ADSdelay = 0;
  initialADSdelay = 0;
}

public class SnowFlake {
  float x = (float)Math.random()*width;
  float y = (float)Math.random()*height;
  float r = (float)(Math.random()*7)+1;
  float speed = (float)(Math.random()*2)+1;
  float drift = (float)(Math.random())+1;
  float st = (float)(Math.random()*200)+1;

  public SnowFlake() {
  }

  public void display() {
    ellipse(x, y, r, r);
    y+=speed;
    x+=drift*sin(.01*(y-st));
    if (y > height) {
      y = 0;
      x = (float)Math.random()*width;
    }
    if (windTime >= 40) {
      windTime = 0; 
      wind = (float)(Math.random()*4)-2;
    } else {
      windTime++;
    }
    x = ((x>width)?0:x);
    x = ((x<0)?width:x);
  }
}
