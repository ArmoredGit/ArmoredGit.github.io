int numDice;
float diceWidth;
Die[] dice;
Ship me;

void setup()
{
  size(1000, 800);
  //noLoop();
  //frameRate(5);
  stroke(255);
  strokeWeight(4);
  noFill();
  rectMode(CENTER);
  ellipseMode(CENTER);
  diceWidth = 100;
  numDice = 6;
  dice = new Die[(int)numDice];
  me = new Ship();
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
  text("⚅⚅ ⚅ Dice Dodge ⚅ ⚅⚅", width/2, height/2); 
  text("⚂⚃⚅⚁⚂⚂⚁⚂⚃⚂⚅⚃", width/2, height/4); 
  text("⚂⚃⚄⚅⚁⚅⚂⚂⚁⚄⚃⚂", width/2, 3*height/4); 
  noFill();
  for(Die x : dice)
    x.show();
  me.show();
  //walls.forEach(x => print(x));
  //background(0);
  //for(Die x : dice)
  //  x.roll();
}

void mousePressed()
{
  redraw();
}

class Ship
{
  float shipX;
  float shipY;
  float rotation;
  Ship()
  {
    shipX = 100;
    shipY = 100;
    rotation = 0;
  }
  
  void show()
  {
    if(keyPressed){
      switch(key){
        case 'a':
          rotation -= 0.1;
          break;
        case 'd':
          rotation += 0.1;
          break;
        case 'w':
          shipX += 10*cos(rotation);
          shipY += 10*sin(rotation);
          break;
        default:
          break;
      }
    }
    pushMatrix();
    translate(shipX, shipY);
    rotate(rotation);
    triangle(50,0,-50,-25,-50,25);
    popMatrix();
  }
}

class Die //models one single dice cube
{
  float dieX;
  float dieY;
  int num;
  float angle;
  float vx;
  float vy;
  float wit;
  Die(int x, int y) //constructor
  {
    dieX = x;
    dieY = y;
    num = (int)random(1, 7);
    angle = 0.1;
    vx = random(0,10);
    vy = random(0,10);
    wit = diceWidth;
  }
  void roll()
  {
    num = (int)random(1, 7);
    show();
  }
  void show()
  {
    pushMatrix();
    translate(dieX, dieY);
    rotate(angle);
    angle+=.1;
      noFill();
      rect(0, 0, wit, wit, wit/5);
      switch(num) {
      case 6:
        ellipse(0, 0-wit/3, wit/5, wit/5);
        ellipse(0, 0+wit/3, wit/5, wit/5);
      case 4:
        ellipse(0-wit/3, 0-wit/3, wit/5, wit/5);
        ellipse(0+wit/3, 0+wit/3, wit/5, wit/5);
      case 2: 
        ellipse(0+wit/3, 0-wit/3, wit/5, wit/5);
        ellipse(0-wit/3, 0+wit/3, wit/5, wit/5);
        break;
      case 5:
        ellipse(0+wit/3, 0-wit/3, wit/5, wit/5);
        ellipse(0-wit/3, 0+wit/3, wit/5, wit/5);
      case 3: 
        ellipse(0-wit/3, 0-wit/3, wit/5, wit/5);
        ellipse(0+wit/3, 0+wit/3, wit/5, wit/5);
      default: 
        ellipse(0, 0, wit/5, wit/5);
        break;
      }
    popMatrix();
    dieX += vx;
    dieY += vy;
    if(dieX>width)
     dieX = 0;
    if(dieX<0)
      dieX = width;
    if(dieY>height)
     dieY = 0;
    if(dieY<0)
      dieY = height;
  }
}
