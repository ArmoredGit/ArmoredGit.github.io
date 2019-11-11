ArrayList<Creature> pop;
ArrayList<Food> feast;
boolean play;
int slowTic;
int disp;

void setup() {
  size(1500, 1000);
  ellipseMode(CENTER);
  //noLoop();
  play = true;
  pop = new ArrayList<Creature>();
  feast = new ArrayList<Food>();
  for (int i = 0; i < 100; i++)
    pop.add(new Creature(random(0, (width * 2 / 3)), random(0, height)));
  for (int i = 0; i < 20; i++)
    feast.add(new Food(random(0, (width * 2 / 3)), random(0, height), 100));
  slowTic = 0;
  disp = 0;
}

void draw() {
  background(0);
  fill(0,150,0);
  rect((width * 2 / 3),0,width,height);
  fill(0);
  rect((width * 2 / 3) + 6,0,width,height);
  slowTic++;
  if(slowTic > 180){
    slowTic = 0;
    disp++;
  }
  if(disp >= pop.size())
    disp = 0;
  fill(pop.get(disp).red,pop.get(disp).green,pop.get(disp).blue);
  ellipse((width * 5 / 6),height/4,(width * 2 / 3)/5,height/5);
  fill(255);
  text("\n \n energy " + pop.get(disp).energy + "\n\n sensitivity " + pop.get(disp).sensitivity + "\n\n sensitivityFood " + pop.get(disp).sensitivityFood + "\n\n speedFood " + pop.get(disp).speedFood + "\n\n energyFood " + pop.get(disp).energyFood + "\n\n sensitivityMate " + pop.get(disp).sensitivityMate + "\n\n speedMate " + pop.get(disp).speedMate + "\n\n energyMate " + pop.get(disp).energyMate + "\n\n speedWander " + pop.get(disp).speedWander + "\n\n  initiative " + pop.get(disp).initiative + "\n\n  generation " + pop.get(disp).generation + "\n\n  red " + pop.get(disp).red + "\n\n  green " + pop.get(disp).green + "\n\n  blue " + pop.get(disp).blue,(width * 2 / 3) + 10 ,height/2);
  if (play) {
    for(int i = 1; i < pop.size()-1; i++){
      float init = pop.get(i).initiative;
      Creature keep = pop.get(i);
      int j = i-1;
      while( j >= 0 && init > pop.get(j).initiative){
        pop.set(j+1,pop.get(j));
        j--;
      }
      pop.set(j+1,keep);
    }
    for (Creature i : pop)
      i.move();
    for (Creature i : pop) {
      for (int j = feast.size() - 1; j >= 0; j--) {
        if (dist(i.x, i.y, feast.get(j).x, feast.get(j).y) < 15) {
          i.energy += feast.remove(j).val;
        }
      }
    }
    for (int i = pop.size() - 1; i >= 0; i--) {
      for (int j = pop.size() - 1; j >= 0; j--) {
        if (!pop.get(i).equals(pop.get(j)) && pop.get(i).mate && pop.get(j).mate && 10 > dist(pop.get(i).x, pop.get(i).y, pop.get(j).x, pop.get(j).y)) {
          pop.get(i).mate = false;
          pop.get(j).mate = false;
          pop.get(i).energy /= 2;
          pop.get(j).energy /= 2;
          pop.add(0, new Creature(pop.get(i).x, pop.get(i).y));
          pop.get(0).energy = ((pop.get(i+1).energy + pop.get(j+1).energy) / 4)*random(.95,1.05);
          pop.get(0).sensitivity = ((pop.get(i+1).sensitivity + pop.get(j+1).sensitivity) / 2)*random(.95,1.05);
          pop.get(0).sensitivityFood = ((pop.get(i+1).sensitivityFood + pop.get(j+1).sensitivityFood) / 2)*random(.95,1.05);
          pop.get(0).speedFood = ((pop.get(i+1).speedFood + pop.get(j+1).speedFood) / 2)*random(.95,1.05);
          pop.get(0).energyFood = ((pop.get(i+1).energyFood + pop.get(j+1).energyFood) / 2)*random(.95,1.05);
          pop.get(0).sensitivityMate = ((pop.get(i+1).sensitivityMate + pop.get(j+1).sensitivityMate) / 2)*random(.95,1.05);
          pop.get(0).speedMate = ((pop.get(i+1).speedMate + pop.get(j+1).speedMate) / 2)*random(.95,1.05);
          pop.get(0).energyMate = ((pop.get(i+1).energyMate + pop.get(j+1).energyMate) / 2)*random(.95,1.05);
          pop.get(0).speedWander = ((pop.get(i+1).speedWander + pop.get(j+1).speedWander) / 2)*random(.95,1.05);
          pop.get(0).initiative = ((pop.get(i+1).initiative + pop.get(j+1).initiative) / 2)*random(.95,1.05);
          pop.get(0).generation = ((pop.get(i+1).generation > pop.get(j+1).generation)?pop.get(i+1).generation:pop.get(j+1).generation) + 1;
          pop.get(0).red = ((pop.get(i+1).red + pop.get(j+1).red) / 2)*random(.95,1.05);
          pop.get(0).green = ((pop.get(i+1).green + pop.get(j+1).green) / 2)*random(.95,1.05);
          pop.get(0).blue = ((pop.get(i+1).blue + pop.get(j+1).blue) / 2)*random(.95,1.05);
        }
      }
    }
    for (int i = pop.size() - 1; i >= 0; i--)
      if (pop.get(i).energy < 0)
        pop.remove(i);
    for (Creature i : pop)
      i.show();
    for (Food i : feast)
      i.show();
    feast.add(new Food(random(0, (width * 2 / 3)), random(0, height), 100));
    if(pop.size() == 1)
      play = false;
  } else {
    play = true;
    setup();
  }
}

void mousePressed() {
  if(play)
    play = false;
  else
    play = true;
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
    energy = 10000;
    sensitivity = random(0, .5);
    sensitivityFood = random(0, 5); 
    speedFood = random(5, 25);
    energyFood = random(5000, 10000);
    energyMate = random(15000, 20000);
    sensitivityMate = random(0, 5);
    speedMate = random(5, 25);
    speedWander = random(1, 35);
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
    if (mate) {
      sight = Mat.strongSigM(x, y, sensitivity, pop, this);
      if (sight[0] > sensitivityMate) {
        if (dist(x, y, sight[1], sight[2]) < speedMate) {
          x=sight[1];
          y=sight[2];
        } else {
          float thet = atan((y-sight[2])/(x-sight[1]));
          if (x > sight[1]) {
            x-=2*speedMate*cos(thet);
            y-=2*speedMate*sin(thet);
          }
          x+=speedMate*cos(thet);
          y+=speedMate*sin(thet);
          energy-=speedMate;
        }
      } else {
        float thet = random(0, TWO_PI);
        x+=speedWander*cos(thet);
        y+=speedWander*sin(thet);
        energy-=speedWander;
      }
    } else {
      sight = Mat.strongSig(x, y, sensitivity, feast);
      if (sight[0] > sensitivityFood) {
        if (dist(x, y, sight[1], sight[2]) < speedFood) {
          x=sight[1];
          y=sight[2];
        } else {
          float thet = atan((y-sight[2])/(x-sight[1]));
          if (x > sight[1]) {
            x-=2*speedFood*cos(thet);
            y-=2*speedFood*sin(thet);
          }
          x+=speedFood*cos(thet);
          y+=speedFood*sin(thet);
          energy-=speedFood;
        }
      } else {
        float thet = random(0, TWO_PI);
        x+=speedWander*cos(thet);
        y+=speedWander*sin(thet);
        energy-=speedWander;
      }
    }
    float thet = random(0, TWO_PI);
    x+=2*cos(thet);
    y+=2*sin(thet);
    if (x>(width * 2 / 3))
      x = (width * 2 / 3);
    if (x<0)
      x = 0;
    if (y>height)
      y = height;
    if (y<0)
      y = 0;
  }

  void show() {
    fill(red, green, blue);
    ellipse(x, y, 10, 10);
    text(energy, x+10, y+10);
  }

  boolean equals(Creature fr) {
    return (fr.initiative == initiative);
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
    ellipse(x, y, 5, 5);
  }
}
