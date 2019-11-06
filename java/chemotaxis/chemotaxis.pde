ArrayList<Creature> pop;
ArrayList<Food> feast;

void setup() {
  size(800, 800);
  ellipseMode(CENTER);
  noLoop();
  pop = new ArrayList<Creature>();
  feast = new ArrayList<Food>();
  pop.add(new Creature(400,400));
  feast.add(new Food(200,200,100));
}

void draw() {
  background(0);
  pop.get(0).move();
  pop.get(0).show();
  feast.get(0).show();
}

void mousePressed(){
  redraw();
}

static class Mat {
  static float sigmoid(float distance, float sensitivity, float value) {
    float l = 2*value;
    float k = sensitivity;
    float x = distance;
    float solve = (l/(1+pow(2.72, (k*x))));
    return solve;
  }

  static float[] strongSig(float x, float y, float sensitivity, ArrayList<Food> lists) {
    float[] strong = new float[3];
    strong[0] = 0;
    strong[1] = 0;
    strong[2] = 0;
    for (Food i : lists)
    {
      float next = sigmoid(dist(x, y, i.x, i.y), sensitivity, i.val);
      if (strong[0] < next) {
        strong[0] = next;
        strong[1] = i.x;
        strong[2] = i.y;
      }
    }
    return strong;
  }

  static float[] strongSigM(float x, float y, float sensitivity, ArrayList<Creature> lists, Creature him) {
    float[] strong = new float[3];
    strong[0] = 0;
    strong[1] = 0;
    strong[2] = 0;
    for (Creature i : lists)
    {
      if (i.mate && !i.equals(him)) {
        float next = sigmoid(dist(x, y, i.x, i.y), sensitivity, i.energy);
        if (strong[0] < next) {
          strong[0] = next;
          strong[1] = i.x;
          strong[2] = i.y;
        }
      }
    }
    return strong;
  }
}

class Creature {
  float x;
  float y;
  float energy;
  float sensitivity;
  float sensitivityFood; 
  float speedFood;
  float energyFood;
  float sensitivityMate; 
  float speedMate;
  float energyMate;
  float speedWander;
  float initiative;
  int generation;
  float red;
  float green;
  float blue;
  boolean mate;

  Creature(float x, float y) {
    this.x = x;
    this.y = y;
    energy = 1000;
    sensitivity = 0.0001;
    sensitivityFood = .1; 
    speedFood = 10;
    energyFood = 1000;
    energyMate = 10000;
    sensitivityMate = .1;
    speedMate = 10;
    energyMate = 10000;
    speedWander = 10;
    initiative = random(0, 100);
    generation = 1;
    red = random(0, 255);
    green = random(0, 255);
    blue = random(0, 255);
    mate = false;
  }

  void move() {
    float[] sight = new float[3];
    if (energy > energyMate)
      mate = true;
    if (energy < energyFood)
      mate = false;
    if(mate) {
      sight = Mat.strongSigM(x,y,sensitivity,pop,this);
      if(sight[0] > sensitivityMate){
        if(dist(x,y,sight[1],sight[2]) < speedMate){
          x=sight[1];
          y=sight[2];
        } else {
          float thet = atan((y-sight[2])/(x-sight[1]));
          if(x > sight[1]){
            x-=2*speedMate*cos(thet);
            y-=2*speedMate*sin(thet);
          }
          x+=speedMate*cos(thet);
          y+=speedMate*sin(thet);
          energy-=speedMate;
        }
      } else {
        float thet = random(0,TWO_PI);
          x+=speedWander*cos(thet);
          y+=speedWander*sin(thet);
          energy-=speedWander;
      }
    } else {
      sight = Mat.strongSig(x,y,sensitivity,feast);
      if(sight[0] > sensitivityFood){
        if(dist(x,y,sight[1],sight[2]) < speedFood){
          x=sight[1];
          y=sight[2];
        } else {
          float thet = atan((y-sight[2])/(x-sight[1]));
          if(x > sight[1]){
            x-=2*speedFood*cos(thet);
            y-=2*speedFood*sin(thet);
          }
          x+=speedFood*cos(thet);
          y+=speedFood*sin(thet);
          energy-=speedFood;
        }
      } else {
        float thet = random(0,TWO_PI);
          x+=speedWander*cos(thet);
          y+=speedWander*sin(thet);
          energy-=speedWander;
      }
    }
  }

  void show() {
    fill(red,green,blue);
    ellipse(x,y,10,10);
    text(x,y,x+10,y+10);
  }
}

class Food {
  float x;
  float y;
  float val;
  Food(float x, float y, float val) {
    this.x = x;
    this.y = y;
    this.val = val;
  }

  void show() {
    fill(255);
    ellipse(x,y,5,5);
  }
}
