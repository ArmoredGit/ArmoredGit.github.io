var numDiceX;
var numDiceY;
var numDice;
var diceWidth;
var dice;
var dieCur;
var walls;

function setup()
{
  createCanvas(windowWidth, windowHeight);
  //noLoop();
  frameRate(5);
  rectMode(CENTER);
  ellipseMode(CENTER);
  noStroke();
  numDiceX = 40;
  numDiceY = 20;
  numDice = 800;
  diceWidth = ((numDiceX>numDiceY)?width/numDiceX:height/numDiceY)-4;
  dice = [];
  walls = [];
  for (var i = 0; i < numDiceX*numDiceY; i+=numDiceY) {
    for (var j = 0; (j < numDiceY && j+i< numDice); j++) {
      dice[floor(i+j)] = new Die(floor((width/(numDiceX*2))*((2*i/numDiceY)+1)), floor((height/(numDiceY*2))*((2*j)+1)));
    }
  }
  dice.forEach(x => x.roll());
  dieCur = floor(random(0, dice.length));
  dice[dieCur].exp = true;
  dice[dieCur].maze = true;
  dice[dieCur].wall = false;
  if (dieCur % numDiceY > 0) {
      walls.push(dieCur-1);
      dice[dieCur-1].exp = true;
  }
  if ((dieCur+1) % numDiceY != 0) {
      walls.push(dieCur+1);
      dice[dieCur+1].exp = true;
  }
  if (dieCur - numDiceY >= 0) {
      walls.push(dieCur-numDiceY);
      dice[dieCur-numDiceY].maze = true;
  }
  if (dieCur + numDiceY < numDice) {
      walls.push(dieCur+numDiceY);
      dice[dieCur+numDiceY].exp = true;
  }
  walls.forEach(x => print(x));
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  diceWidth = ((numDiceX>numDiceY)?width/numDiceX:height/numDiceY)-4;
}

function draw()
{
  background(0);
  fill(random(0,100),random(0,100),random(0,100));
  textSize(floor(height/4)); 
  textAlign(CENTER, CENTER);
  text("⚅⚅ ⚅ ☽ice Maze ⚅ ⚅⚅", width/2, height/2); 
  text("⚂⚃⚅⚁⚂⚂⚁⚂⚃⚂⚅⚃", width/2, height/4); 
  text("⚂⚃⚄⚅⚁⚅⚂⚂⚁⚄⚃⚂", width/2, 3*height/4); 
  dice.forEach(x => x.show());
  //dice[dieCur].num;
  dieCur = /*walls.splice(0,1)[0];*/(walls.splice((((dice[dieCur].num) - 1) % walls.length),1))[0];
  this.count = 0;
  if (dieCur % numDiceY > 0) {
    if (dice[dieCur-1].exp == true && dice[dieCur-1].wall == false) {
      this.count++;
    }
  }
  if ((dieCur+1) % numDiceY != 0) {
    if (dice[dieCur+1].exp == true && dice[dieCur+1].wall == false) {
      this.count++;
    }
  }
  if (dieCur - numDiceY >= 0) {
    if (dice[dieCur-numDiceY].exp == true && dice[dieCur-numDiceY].wall == false) {
      this.count++;
    }
  }
  if (dieCur + numDiceY < numDice) {
    if (dice[dieCur+numDiceY].exp == true && dice[dieCur+numDiceY].wall == false) {
      this.count++;
    }
  }
  if (count > 1) {
    dice[dieCur].maze = true;
    dice[dieCur].wall = true;
  } else {
    dice[dieCur].maze = true;
    dice[dieCur].wall = false;
    if (dieCur % numDiceY > 0) {
      if (dice[dieCur-1].exp == false) {
        walls.push(dieCur-1);
        dice[dieCur-1].exp = true;
      }
    }
    if ((dieCur+1) % numDiceY != 0) {
      if (dice[dieCur+1].exp == false) {
        walls.push(dieCur+1);
        dice[dieCur+1].exp = true;
      }
    }
    if (dieCur - numDiceY >= 0) {
      if (dice[dieCur-numDiceY].exp == false) {
        walls.push(dieCur-numDiceY);
        dice[dieCur-numDiceY].exp = true;
      }
    }
    if (dieCur + numDiceY < numDice) {
      if (dice[dieCur+numDiceY].exp == false) {
        walls.push(dieCur+numDiceY);
        dice[dieCur+numDiceY].exp = true;
      }
    }
  }
  //walls.forEach(x => print(x));
  if(walls.length == 0){
    setup();
  }
}

class Die 
{
  constructor(x, y) //constructor
  {
    this.dieX = x;
    this.dieY = y;
    this.num = random([1, 2, 3, 4, 5, 6, ]);
    this.exp = false;
    this.wall = true;
    this.maze = false;
  }

  roll()
  {
    this.num = random([1, 2, 3, 4, 5, 6, ]);
    this.show();
  }

  show()
  {
    if (this.maze == true) {
      if (this.wall) {
        fill(80);
        rect(this.dieX, this.dieY, diceWidth, diceWidth, diceWidth/5);
      } else {
        fill(250);
        rect(this.dieX, this.dieY, diceWidth, diceWidth, diceWidth/5);
      }
      fill(0);
      switch(this.num) {
      case 6:
        ellipse(this.dieX, this.dieY-diceWidth/3, diceWidth/5, diceWidth/5);
        ellipse(this.dieX, this.dieY+diceWidth/3, diceWidth/5, diceWidth/5);
      case 4:
        ellipse(this.dieX-diceWidth/3, this.dieY-diceWidth/3, diceWidth/5, diceWidth/5);
        ellipse(this.dieX+diceWidth/3, this.dieY+diceWidth/3, diceWidth/5, diceWidth/5);
      case 2: 
        ellipse(this.dieX+diceWidth/3, this.dieY-diceWidth/3, diceWidth/5, diceWidth/5);
        ellipse(this.dieX-diceWidth/3, this.dieY+diceWidth/3, diceWidth/5, diceWidth/5);
        break;
      case 5:
        ellipse(this.dieX+diceWidth/3, this.dieY-diceWidth/3, diceWidth/5, diceWidth/5);
        ellipse(this.dieX-diceWidth/3, this.dieY+diceWidth/3, diceWidth/5, diceWidth/5);
      case 3: 
        ellipse(this.dieX-diceWidth/3, this.dieY-diceWidth/3, diceWidth/5, diceWidth/5);
        ellipse(this.dieX+diceWidth/3, this.dieY+diceWidth/3, diceWidth/5, diceWidth/5);
      default: 
        ellipse(this.dieX, this.dieY, diceWidth/5, diceWidth/5);
        break;
      }
    }
  }
}
