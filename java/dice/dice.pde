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
  numDiceX = 4;
  numDiceY = 3;
  numDice = numDiceX*numDiceY;
  diceWidth = ((numDiceX>numDiceY)?width/numDiceX:height/numDiceY)-4;
  dice = new Die[(int)numDice];
  for(int i = 0; i < numDiceX*numDiceY; i+=numDiceY){
    for(int j = 0; j < numDiceY; j++){
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
    fill(255);
    rect(dieX,dieY,diceWidth,diceWidth,2);
    fill(0);
    switch(num){
      case 5:
        ellipse(dieX+diceWidth/3,dieY-diceWidth/3,10,10);
        ellipse(dieX-diceWidth/3,dieY+diceWidth/3,10,10);
      case 3: 
        ellipse(dieX-diceWidth/3,dieY-diceWidth/3,10,10);
        ellipse(dieX+diceWidth/3,dieY+diceWidth/3,10,10);
      case 1: 
        ellipse(dieX,dieY,10,10);
        break;
      case 6:
        ellipse(dieX,dieY-diceWidth/3,10,10);
        ellipse(dieX,dieY+diceWidth/3,10,10);
      case 4:
        ellipse(dieX+diceWidth/3,dieY-diceWidth/3,10,10);
        ellipse(dieX-diceWidth/3,dieY+diceWidth/3,10,10);
      case 2: 
        ellipse(dieX-diceWidth/3,dieY-diceWidth/3,10,10);
        ellipse(dieX+diceWidth/3,dieY+diceWidth/3,10,10);
        break;
      default: 
        ellipse(dieX,dieY,10,10);
        break;
        
    }
  }
}
