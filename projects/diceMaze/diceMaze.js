var numDiceX;
var numDiceY;
var numDice;
var diceWidth;
var dice;

function setup()
{
  createCanvas(500,500);
  noLoop();
  rectMode(CENTER);
  ellipseMode(CENTER);
  noStroke();
  numDiceX = 5;
  numDiceY = 5;
  numDice = 25;
  diceWidth = ((numDiceX>numDiceY)?width/numDiceX:height/numDiceY)-4;
  dice = [];
  for(var i = 0; i < numDiceX*numDiceY; i+=numDiceY){
    for(var j = 0; (j < numDiceY && j+i< numDice); j++){
      dice[floor(i+j)] = new Die(floor((width/(numDiceX*2))*((2*i/numDiceY)+1)),floor((height/(numDiceY*2))*((2*j)+1)));
    }
  }
}

function draw()
{
  background(0);
  dice.forEach(x => x.roll());
}

function mousePressed()
{
  redraw();
}

class Die 
{
  constructor(x,y) //constructor
  {
    this.dieX = x;
    this.dieY = y;
    this.num = random([1,2,3,4,5,6,]);
    this.exp = false;
  }
  roll()
  {
    this.num = random([1,2,3,4,5,6,]);
    this.show();
  }
  show()
  {
    if(this.exp == true){
      fill(250);
      rect(this.dieX,this.dieY,diceWidth,diceWidth,diceWidth/5);
      fill(0);
      switch(this.num){
        case 6:
          ellipse(this.dieX,this.dieY-diceWidth/3,diceWidth/5,diceWidth/5);
          ellipse(this.dieX,this.dieY+diceWidth/3,diceWidth/5,diceWidth/5);
        case 4:
          ellipse(this.dieX-diceWidth/3,this.dieY-diceWidth/3,diceWidth/5,diceWidth/5);
          ellipse(this.dieX+diceWidth/3,this.dieY+diceWidth/3,diceWidth/5,diceWidth/5);
        case 2: 
          ellipse(this.dieX+diceWidth/3,this.dieY-diceWidth/3,diceWidth/5,diceWidth/5);
          ellipse(this.dieX-diceWidth/3,this.dieY+diceWidth/3,diceWidth/5,diceWidth/5);
          break;
        case 5:
          ellipse(this.dieX+diceWidth/3,this.dieY-diceWidth/3,diceWidth/5,diceWidth/5);
          ellipse(this.dieX-diceWidth/3,this.dieY+diceWidth/3,diceWidth/5,diceWidth/5);
        case 3: 
          ellipse(this.dieX-diceWidth/3,this.dieY-diceWidth/3,diceWidth/5,diceWidth/5);
          ellipse(this.dieX+diceWidth/3,this.dieY+diceWidth/3,diceWidth/5,diceWidth/5);
        default: 
          ellipse(this.dieX,this.dieY,diceWidth/5,diceWidth/5);
          break;
      }
    }
  }
}
