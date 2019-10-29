int numDiceX;
int numDiceY;
int numDice;
float diceWidth;
Die[] dice;
int dieCur;
ArrayList<Integer> walls;

void setup()
{
  size(1000, 800);
  //noLoop();
  frameRate(1);
  rectMode(CENTER);
  ellipseMode(CENTER);
  noStroke();
  numDiceX = 20;
  numDiceY = 16;
  numDice = 320;
  diceWidth = ((numDiceX>numDiceY)?width/numDiceX:height/numDiceY)-4;
  dice = new Die[(int)numDice];
  walls = new ArrayList<Integer>();
  for (int i = 0; i < numDiceX*numDiceY; i+=numDiceY) {
    for (int j = 0; (j < numDiceY && j+i< numDice); j++) {
      dice[(int)(i+j)] = new Die((int)((width/(numDiceX*2))*((2*i/numDiceY)+1)), (int)((height/(numDiceY*2))*((2*j)+1)));
    }
  }
  for(Die x : dice)
    x.roll();
  dieCur = floor(random(0, dice.length));
  dice[dieCur].exp = true;
  dice[dieCur].maze = true;
  dice[dieCur].wall = false;
  if (dieCur % numDiceY > 0) {
    walls.add(dieCur-1);
    dice[dieCur-1].exp = true;
  }
  if ((dieCur+1) % numDiceY != 0) {
    walls.add(dieCur+1);
    dice[dieCur+1].exp = true;
  }
  if (dieCur - numDiceY >= 0) {
    walls.add(dieCur-numDiceY);
    dice[dieCur-numDiceY].maze = true;
  }
  if (dieCur + numDiceY < numDice) {
    walls.add(dieCur+numDiceY);
    dice[dieCur+numDiceY].exp = true;
  }
}
void draw()
{
  background(0);
  fill(random(0, 100), random(0, 100), random(0, 100));
  textSize(floor(height/4)); 
  textAlign(CENTER, CENTER);
  text("⚅⚅ ⚅ ☽ice Maze ⚅ ⚅⚅", width/2, height/2); 
  text("⚂⚃⚅⚁⚂⚂⚁⚂⚃⚂⚅⚃", width/2, height/4); 
  text("⚂⚃⚄⚅⚁⚅⚂⚂⚁⚄⚃⚂", width/2, 3*height/4); 
  for(Die x : dice)
    x.show();
  //dice[dieCur].num;
  dieCur = /*walls.splice(0,1)[0];*/(walls.remove((((dice[dieCur].num) - 1) % walls.size())));
  int count = 0;
  if (dieCur % numDiceY > 0) {
    if (dice[dieCur-1].exp == true && dice[dieCur-1].wall == false) {
      count++;
    }
  }
  if ((dieCur+1) % numDiceY != 0) {
    if (dice[dieCur+1].exp == true && dice[dieCur+1].wall == false) {
      count++;
    }
  }
  if (dieCur - numDiceY >= 0) {
    if (dice[dieCur-numDiceY].exp == true && dice[dieCur-numDiceY].wall == false) {
      count++;
    }
  }
  if (dieCur + numDiceY < numDice) {
    if (dice[dieCur+numDiceY].exp == true && dice[dieCur+numDiceY].wall == false) {
      count++;
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
        walls.add(dieCur-1);
        dice[dieCur-1].exp = true;
      }
    }
    if ((dieCur+1) % numDiceY != 0) {
      if (dice[dieCur+1].exp == false) {
        walls.add(dieCur+1);
        dice[dieCur+1].exp = true;
      }
    }
    if (dieCur - numDiceY >= 0) {
      if (dice[dieCur-numDiceY].exp == false) {
        walls.add(dieCur-numDiceY);
        dice[dieCur-numDiceY].exp = true;
      }
    }
    if (dieCur + numDiceY < numDice) {
      if (dice[dieCur+numDiceY].exp == false) {
        walls.add(dieCur+numDiceY);
        dice[dieCur+numDiceY].exp = true;
      }
    }
  }
  //walls.forEach(x => print(x));
  if (walls.isEmpty()) {
    setup();
  }
  //background(0);
  //for(Die x : dice)
  //  x.roll();
}
void mousePressed()
{
  redraw();
}
class Die //models one single dice cube
{
  float dieX;
  float dieY;
  int num;
  boolean exp = false;
  boolean wall = true;
  boolean maze = false;
  Die(int x, int y) //constructor
  {
    dieX = x;
    dieY = y;
    num = (int)random(1, 7);
  }
  void roll()
  {
    num = (int)random(1, 7);
    show();
  }
  void show()
  {
    if (maze == true) {
      if (wall) {
        fill(80);
        rect(dieX, dieY, diceWidth, diceWidth, diceWidth/5);
      } else {
        fill(250);
        rect(dieX, dieY, diceWidth, diceWidth, diceWidth/5);
      }
      fill(0);
      switch(num) {
      case 6:
        ellipse(dieX, dieY-diceWidth/3, diceWidth/5, diceWidth/5);
        ellipse(dieX, dieY+diceWidth/3, diceWidth/5, diceWidth/5);
      case 4:
        ellipse(dieX-diceWidth/3, dieY-diceWidth/3, diceWidth/5, diceWidth/5);
        ellipse(dieX+diceWidth/3, dieY+diceWidth/3, diceWidth/5, diceWidth/5);
      case 2: 
        ellipse(dieX+diceWidth/3, dieY-diceWidth/3, diceWidth/5, diceWidth/5);
        ellipse(dieX-diceWidth/3, dieY+diceWidth/3, diceWidth/5, diceWidth/5);
        break;
      case 5:
        ellipse(dieX+diceWidth/3, dieY-diceWidth/3, diceWidth/5, diceWidth/5);
        ellipse(dieX-diceWidth/3, dieY+diceWidth/3, diceWidth/5, diceWidth/5);
      case 3: 
        ellipse(dieX-diceWidth/3, dieY-diceWidth/3, diceWidth/5, diceWidth/5);
        ellipse(dieX+diceWidth/3, dieY+diceWidth/3, diceWidth/5, diceWidth/5);
      default: 
        ellipse(dieX, dieY, diceWidth/5, diceWidth/5);
        break;
      }
      if (num%2 == 1)
        ellipse(dieX, dieY, diceWidth/5, diceWidth/5);
    }
  }
}
