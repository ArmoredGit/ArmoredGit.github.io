ArrayList<Creature> pop;
ArrayList<Food> feast;

void setup(){
  size(800,800);
  
}

void draw(){
  
  
}

class Creature{
  float x;
  float y;
  float energy;
  float sensitivityFood; 
  float speedFood;
  float sensitivityMate; 
  float speedMate;
  float energyMate;
  float speedWander;
  float initiative;
  int generation;
  float red;
  float green;
  float blue;
  
  Creature(float x, float y){
    this.x = x;
    this.y = y;
    energy = 1000;
    sensitivityFood = .1; 
    speedFood = 10;
    sensitivityMate = .1;
    speedMate = 10;
    energyMate = 10000;
    speedWander = 10;
    initiative = random(0,100);
    generation = 1;
    red = random(0,255);
    green = random(0,255);
    blue = random(0,255);
  }
  
  void move(){
    
  }
  
  void show(){
    
  }
}

class Food{
  float x;
  float y;
  float val;
  Food(float x, float y, float val){
    this.x = x;
    this.y = y;
    this.val = val;
  }
  
  void show(){
    
  }
}
