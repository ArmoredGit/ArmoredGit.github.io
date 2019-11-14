Particle[] jeff;
void setup(){
  //your code here
  size(500,500);
  frameRate(5);
  jeff = new Particle[10];
  for(int i = 0; i < 10; i++)
    jeff[i] = new NormalParticle();
}

void draw(){
  //your code here
  background(0);
  for(int i = 0; i < 10; i++)
    jeff[i].move();
  for(int i = 0; i < 10; i++)
    jeff[i].show();
  ellipse(width/2,height/2,10,10);
}

class NormalParticle implements Particle{
//your code here
  float x;
  float y;
  float speed;
  float angle;
  NormalParticle(){
    x = width/2;
    y = height/2;
    speed = 20;
    angle = random(0,50);
  }
  
  void move(){
    x += speed*cos(radians(angle));
    y += speed*sin(radians(angle));
    angle -= 10;
  }
  
  void show(){
    ellipse(x,y,10,10);
  }
}

interface Particle{
  //your code here
  void move();
  void show();
}

class OddballParticle //uses an interface
{

}

class JumboParticle //uses inheritance
{


}
