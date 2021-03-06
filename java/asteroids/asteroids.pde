int numDice;
float diceWidth;
ArrayList<Die> dice;
ArrayList<DerpDot> dots;
Ship me;
boolean type1;
boolean type2;
boolean type3;
boolean lose;
int colorTic;

void setup()
{
  size(1400, 800);
  stroke(255);
  strokeWeight(4);
  noFill();
  rectMode(CENTER);
  ellipseMode(CENTER);
  diceWidth = 100;
  numDice = 8;
  dice = new ArrayList<Die>();
  dots = new ArrayList<DerpDot>();
  me = new Ship();
  type1 = false;
  type2 = false;
  type3 = false;
  lose = false;
  for (int i = 0; i < numDice; i++) {
    dice.add(new Die(200*i, 300));
  }
  for (Die x : dice)
    x.roll();
  colorTic = 50;
}

void draw()
{
  if (lose) {
    fill(200, 0, 40);
    text("⚅⚅ ⚅ You Lost ⚅ ⚅⚅", width/2, height/2); 
    text("⚂⚃⚅⚁⚂⚂⚁⚂⚃⚂⚅⚃", width/2, height/4); 
    text("⚂⚃⚄⚅⚁⚅⚂⚂⚁⚄⚃⚂", width/2, 3*height/4);
  } else {
    background(0);
    for (int i = 0; i < dice.size(); i++) {
      if (dice.get(i).dead)
        dice.remove(i);
    }
    if(colorTic > 15){
     fill(random(0, 100), random(0, 100), random(0, 100));
     colorTic = 0;
    }
    colorTic++;
    textSize(floor(height/4)); 
    textAlign(CENTER, CENTER);
    text("⚅⚅ ⚅ Dice Dodge ⚅ ⚅⚅", width/2, height/2); 
    text("⚂⚃⚅⚁⚂⚂⚁⚂⚃⚂⚅⚃", width/2, height/4); 
    text("⚂⚃⚄⚅⚁⚅⚂⚂⚁⚄⚃⚂", width/2, 3*height/4); 
    noFill();
    for (Die x : dice)
      x.show();
    for (DerpDot x : dots)
      x.show();
    me.show();
    for (Die x : dice)
      if (dist(me.shipX, me.shipY, x.dieX, x.dieY) < 2*x.wit/3)
        lose = true;
    int i = 0;
    while ( i<dice.size()) {
    int j = 0;
      while (j<dots.size()) {
        if (dist(dots.get(j).dotX, dots.get(j).dotY, dice.get(i).dieX, dice.get(i).dieY) < 2*dice.get(i).wit/3) {
          dice.get(i).hit();
          dots.remove(j);
          j+=1000;
        }
        j++;
      }
      i++;
    }
    if (type1)
      me.rotation -= 0.1;
    if (type2)
      me.rotation += 0.1;
    if (type3)
      me.shipX += 10*cos(me.rotation);
    if (type3)
      me.shipY += 10*sin(me.rotation);
  }
}

void mousePressed()
{
  setup();
  redraw();
}

void keyPressed()
{
  switch(key) {
  case 'a':
    type1 = true;
    break;
  case 'd':
    type2 = true;
    break;
  case 'w':
    type3 = true;
    break;
  case ' ':
    if (dots.size()>7)
      dots.remove(0);
    dots.add(new DerpDot());
    break;
  default:
    break;
  }
}

void keyReleased() 
{
  switch(key) {
  case 'a':
    type1 = false;
    break;
  case 'd':
    type2 = false;
    break;
  case 'w':
    type3 = false;
    break;
  default:
    break;
  }
  print(key);
}

class DerpDot
{
  float dotX;
  float dotY;
  float rotation;
  DerpDot()
  {
    dotX = me.shipX;
    dotY = me.shipY;
    rotation = me.rotation;
  }

  void show()
  {
    dotX += 5*cos(rotation);
    dotY += 5*sin(rotation);
    ellipse(dotX, dotY, 5, 5);
    if (dotX>width)
      dotX = 0;
    if (dotX<0)
      dotX = width;
    if (dotY>height)
      dotY = 0;
    if (dotY<0)
      dotY = height;
  }
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
    pushMatrix();
    translate(shipX, shipY);
    rotate(rotation);
    triangle(50, 0, -50, -25, -50, 25);
    popMatrix();
    if (shipX>width)
      shipX = 0;
    if (shipX<0)
      shipX = width;
    if (shipY>height)
      shipY = 0;
    if (shipY<0)
      shipY = height;
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
  boolean dead;
  Die(float x, float y) //constructor
  {
    dieX = x;
    dieY = y;
    num = (int)random(1, 7);
    angle = 0.1;
    vx = random(1, 5);
    vy = random(1, 5);
    wit = diceWidth;
    dead = false;
  }
  void roll()
  {
    num = (int)random(1, 7);
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
    if (dieX>width || dieX<0)
      vx *= -1;
    if (dieY>height || dieY<0)
      vy *= -1;
  }

  void hit()
  {
    num--;
    float vt = atan(vx/vy);
    float v = sqrt(vx*vx+vy*vy);
    if(vy < 0)
      v *= -1;
    vx = v* sin(vt - (PI/3));
    vy = v* cos(vt - (PI/3));
    if (num < 1){
      dice.remove(this);
    } else { 
      dice.add(new Die(dieX,dieY));
      dice.get(dice.size()-1).vx = v* sin(vt + (PI/3));
      dice.get(dice.size()-1).vy = v* cos(vt + (PI/3));
      dice.get(dice.size()-1).num = 1;
    }
  }
}
