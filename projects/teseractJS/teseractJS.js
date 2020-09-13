//Final project : Project-Tesseract 
//created by miles Leska


var button;
var pressButton;
var pressButtonWBlock;
var Block;
var player;
var evenFloor;
var evenWall;
var oddFloor;
var oddWall;
var levelButton1;
var levelButton2;
var levelButton3;
var levelButton4;
var levelButton5;
var levelButton6;
var levelButton7;
var levelButton8;
var levelButton9;
var Pop;
var Popbox;
var lava;
var lavaBurn;
var grid;
var gridBurn;
var logo1;
var keys;
var rotate;
var unrotate;
var rotoZoff;
var rotoZon;
var rotoYoff;
var rotoYon;
var playState;
var load;
var view;
var li;
var p;
var e;
var m;
var q;

//the setup method is short in order to quickly open the program 
function setup() {
  createCanvas(1008, 1008);
  background(0);
  player = loadImage("character.png");
  load = 0;
}

//draw method will both call drawing methods and handle the loading of the game
function draw() {
  if (load == 0) {
    //this case draws the loading screen before the majority of the program's loading is done
    loadingScreen();
    load = 1;
  } else if (load == 1) {
    //this calls to load the program
    loadAll();
    load = 2;
  } else {
    //this draws the game once loading is finished
    if (playState == 0) {
      //start menu drawing
      background(0);
      fill(255);
      image(logo1, width/4, width/4, width/2, width/2);
      text("[ Press key to Play ]", width / 2, 3 * width / 4);
    } else if (playState == 1) { 
      background(0);
      //draws the game
      p.drawGame();
      //triggers all buttons on/off
      p.triggerEvents();
      fill(255);
      let pos = p.getCords();
      //draws the key hvars top left
      image(keys, 0, 0, width/4, width/4);
      //adjust text based on level world!
      if (p.getLevel() < 10) {
        text("You are at X: " + pos[0] + ", Y: " + pos[1], width / 2, width / 11);
      } else if (p.getLevel() < 19) {
        text("X: " + pos[0] + ", Y: " + pos[1] + ", Z: " + pos[2] + ", view is " + view, width / 2, width / 11);
      } else if (p.getLevel() < 28) {
        text("X: " + pos[0] + ", Y: " + pos[1] + ", Z: " + pos[2] + ", W: " + pos[3] + ", view is " + view, width / 2, width / 11);
      } else if (p.getLevel() < 37) {
        text("X: " + pos[0] + ", Y: " + pos[1] + ", Z: " + pos[2] + ", W: " + pos[3] + ", view is " + view, width / 2, width / 11);
      }
    } else if (playState == 3) {
      //pop up menu at the end of each level
      fill(255);
      image(Pop, width / 4, width / 4, width / 2, width / 4);
      text("Press Q to continue or E for the menu", width / 4, width / 4, width / 2, width / 4);
    } else if (playState == 4) {
      //draws the menu world
      background(255);
      m.drawGame();
      m.triggerEvents();
      fill(0);
      text("world #" + m.worldNum(), width / 2, width / 11);
    } else if (playState == 5) {
      //this is the death screen that pos up when you die
      background(0);
      fill(255, 60, 25);
      text("Well, you died...", width / 2, width / 4);
      fill(255);
      text("[ Press key to Play ]", width / 2, width / 2);
    }
  }
}

//the actual loading screen to be shown when you open the game
function loadingScreen() {
  textAlign(CENTER);
  textSize(40);
  image(player, width/4, width/4, width/2, width/2);
  text("LOADING. . .", width/2, width/2);
}

//similar to setup this loads all game resources after the splash screen is displayed
function loadAll() {
  playState = 0;
  li = new library();
  p = new manager(0, 0, 1);
  e = new eventTiles();
  m = new Menu();
  view = "x/y";
  evenFloor = loadImage("evenFloor.png");
  button = loadImage("unPressedButton.png");
  evenWall = loadImage("evenWall.png");
  oddFloor = loadImage("oddFloor.png");
  oddWall = loadImage("oddWall.png");
  pressButton = loadImage("PressedButton.png");
  pressButtonWBlock = loadImage("PressedButtonWBlock.png");
  Block = loadImage("Block.png");
  levelButton1 = loadImage("level1.png");
  levelButton2 = loadImage("level2.png");
  levelButton3 = loadImage("level3.png");
  levelButton4 = loadImage("level4.png");
  levelButton5 = loadImage("level5.png");
  levelButton6 = loadImage("level6.png");
  levelButton7 = loadImage("level7.png");
  levelButton8 = loadImage("level8.png");
  levelButton9 = loadImage("level9.png");
  Pop = loadImage("PopupBoard.png");
  Popbox = loadImage("PopupButton.png");
  lava = loadImage("lava.png");
  lavaBurn = loadImage("lavaBurn.png");
  grid = loadImage("grid.png");
  gridBurn = loadImage("gridBurn.png");
  logo1 = loadImage("logo1.png");
  keys = loadImage("key.png");
  rotate = loadImage("PressedButtonRotate.png");
  unrotate = loadImage("unPressedButtonRotate.png");
  rotoZoff = loadImage("rotoZoff.png");
  rotoZon = loadImage("rotoZon.png");
  rotoYoff = loadImage("rotoYoff.png");
  rotoYon = loadImage("rotoYon.png");
}

//this manages input for all the classes
function keyPressed() {
  if (playState == 0) {
    //starts the game
    playState = 1;
  } else if (playState == 1) {
    //main game
    switch(keyCode) {
    case 87:
      p.move(4);
      break;
    case 65:
      p.move(3);
      break;
    case 83:
      p.move(2);
      break;
    case 68:
      p.move(1);
      break;
    case 81:
      if (p.getLevel() > 18) {
        p.rotatePlane(-1);
        p.fixYNow();
      }
      break;
    case 69:
      if (p.getLevel() > 18) {
        p.rotatePlane(1);
        p.fixYNow();
      }
      break;
    case 82:
      p.restart();
      break;
    case 76:
      p.nextLevel();
      break;
    }
  } else if (playState == 3) {
    //popup at the end of levels
    switch(keyCode) {
    case 81:
      p.nextLevel();
      playState = 1;
      break;
    case 69:
      m.warpWorld();
      playState = 4;
      break;
    }
  } else if (playState == 4) {
    //level menu navigation
    switch(keyCode) {
    case 87:
      m.move(4);
      break;
    case 65:
      m.move(3);
      break;
    case 83:
      m.move(2);
      break;
    case 68:
      m.move(1);
      break;
    }
  } else if (playState == 5) {
    //death restart 
    playState = 1;
  }
}
