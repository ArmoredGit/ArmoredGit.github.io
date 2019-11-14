ArrayList<Particle> jeff;
float gloabalNewA;
float gloabalNewV;
float gloabalNewT;
float gloabalNewR;
float gloabalNewG;
float gloabalNewB;
int gloabalTic;

void setup(){
  //your code here
  size(500,500);
  frameRate(35);
  noStroke();
  jeff = new ArrayList<Particle>();
  for(int i = 0; i < 10; i++){
    jeff.add(new NormalParticle());
  }
  gloabalNewA = -0.01;
  gloabalNewV = random(2,5);
  gloabalNewT = random(0,360);
  gloabalNewR = random(0,255);
  gloabalNewG = random(0,255);
  gloabalNewB = random(0,255);
  gloabalTic = 0;
}

void draw(){
  //your code here
  gloabalTic ++;
  background(0);
  for(int i = 0; i < jeff.size(); i++){
    jeff.get(i).move();
  }
  for(int i = 0; i < jeff.size(); i++){
    jeff.get(i).show();
  }
  if(gloabalTic < 100){
    for(int i = 0; i < 10; i++){
      jeff.add(new NormalParticle());
    }
  } else {
    gloabalNewA = -0.01;
    gloabalNewV = random(2,5);
    gloabalNewT = random(0,360);
    gloabalNewR = random(0,255);
    gloabalNewG = random(0,255);
    gloabalNewB = random(0,255);
    if(gloabalTic > 300){
      gloabalTic = 0;
    }
  }
  ellipse(width/2,height/2,10,10);
  for(int i = 0; i < jeff.size(); i++){
    if(dist(jeff.get(i).getx(),jeff.get(i).gety(),width/2,height/2) > width){
      jeff.remove(i);
    }
  }
}

class NormalParticle implements Particle{
//your code here
  float x;
  float y;
  float speed;
  float angle;
  int tic;
  float a;
  float v;
  float r;
  float g; 
  float b;
  NormalParticle(){
    x = width/2;
    y = height/2;
    speed = 2;
    angle = random(0,50) + gloabalNewT;
    tic = 0;
    a = gloabalNewA;
    v = gloabalNewV;
    r = gloabalNewR + random(-20,20);
    g = gloabalNewG + random(-20,20);
    b = gloabalNewB + random(-20,20);
  }
  
  void move(){
    tic ++;
    x += speed*cos(radians(angle));
    y += speed*sin(radians(angle));
    angle -= ((a * tic) + v);
  }
  
  void show(){
    fill(r,g,b);
    ellipse(x,y,10,10);
  }
  
  float getx(){
    return x;
  }
  
  float gety(){
    return y;
  }
}

interface Particle{
  //your code here
  void move();
  void show();
  float getx();
  float gety();
}

class OddballParticle //uses an interface
{

}

class JumboParticle //uses inheritance
{


}
