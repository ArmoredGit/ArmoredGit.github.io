int numDice;
float diceWidth;
Die[] dice;

void setup()
{
  size(1000, 800);
  //noLoop();
  frameRate(5);
  stroke(255);
  strokeWeight(4);
  noFill();
  rectMode(CENTER);
  ellipseMode(CENTER);
  diceWidth = 100;
  numDice = 4;
  dice = new Die[(int)numDice];
  for(int i = 0; i < dice.length;i++){
    dice[i] = new Die(200*i,300);
  }
  for(Die x : dice)
    x.roll();
}
void draw()
{
  background(0);
  fill(random(0, 100), random(0, 100), random(0, 100));
  textSize(floor(height/4)); 
  textAlign(CENTER, CENTER);
  text("⚅⚅ ⚅ ☽ice Dodge ⚅ ⚅⚅", width/2, height/2); 
  text("⚂⚃⚅⚁⚂⚂⚁⚂⚃⚂⚅⚃", width/2, height/4); 
  text("⚂⚃⚄⚅⚁⚅⚂⚂⚁⚄⚃⚂", width/2, 3*height/4); 
  noFill();
  for(Die x : dice)
    x.show();
  //walls.forEach(x => print(x));
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
  float angle;
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
      noFill();
      rect(dieX, dieY, diceWidth, diceWidth, diceWidth/5);
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
