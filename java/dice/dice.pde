float numDiceX;
float numDiceY;
float numDice;
float diceWidth;
Die[] dice;

void setup()
{
  size(500,500);
  noLoop();
  rectMode(CENTER);
  ellipseMode(CENTER);
  noStroke();
  numDiceX = 5;
  numDiceY = 5;
  numDice = 25;
  diceWidth = ((numDiceX>numDiceY)?width/numDiceX:height/numDiceY)-4;
  dice = new Die[(int)numDice];
  for(int i = 0; i < numDiceX*numDiceY; i+=numDiceY){
    for(int j = 0; (j < numDiceY && j+i< numDice); j++){
      dice[(int)(i+j)] = new Die((int)((width/(numDiceX*2))*((2*i/numDiceY)+1)),(int)((height/(numDiceY*2))*((2*j)+1)));
    }
  }
}
void draw()
{
  background(0);
  for(Die x : dice)
    x.roll();
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
  Die(int x, int y) //constructor
  {
    dieX = x;
    dieY = y;
    num = (int)random(1,7);
  }
  void roll()
  {
    num = (int)random(1,7);
    show();
  }
  void show()
  {
    fill(250);
    rect(dieX,dieY,diceWidth,diceWidth,diceWidth/5);
    fill(0);
    switch(num){
      case 6:
        ellipse(dieX,dieY-diceWidth/3,diceWidth/5,diceWidth/5);
        ellipse(dieX,dieY+diceWidth/3,diceWidth/5,diceWidth/5);
      case 4:
        ellipse(dieX-diceWidth/3,dieY-diceWidth/3,diceWidth/5,diceWidth/5);
        ellipse(dieX+diceWidth/3,dieY+diceWidth/3,diceWidth/5,diceWidth/5);
      case 2: 
        ellipse(dieX+diceWidth/3,dieY-diceWidth/3,diceWidth/5,diceWidth/5);
        ellipse(dieX-diceWidth/3,dieY+diceWidth/3,diceWidth/5,diceWidth/5);
        break;
      case 5:
        ellipse(dieX+diceWidth/3,dieY-diceWidth/3,diceWidth/5,diceWidth/5);
        ellipse(dieX-diceWidth/3,dieY+diceWidth/3,diceWidth/5,diceWidth/5);
      case 3: 
        ellipse(dieX-diceWidth/3,dieY-diceWidth/3,diceWidth/5,diceWidth/5);
        ellipse(dieX+diceWidth/3,dieY+diceWidth/3,diceWidth/5,diceWidth/5);
      default: 
        ellipse(dieX,dieY,diceWidth/5,diceWidth/5);
        break;
        
    }
  }
}
