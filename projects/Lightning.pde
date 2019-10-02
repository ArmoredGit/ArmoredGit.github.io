float startX;
float endX;
float startY;
float endY;

void setup()
{
  size(300,300);
  frameRate(5);
  background(1);
  startX = 0;
  endX = 150;
  startY = 150;
  endY = 150;
  stroke(random(0,255),random(0,255),random(0,255));
}
void draw()
{
  background(0);
  startLight(startX,startY,endX,endY);
}
void mousePressed()
{
  startX = mouseX;
  startY = mouseY;
  stroke(random(0,255),random(0,255),random(0,255));
}

void startLight(float iX, float iY, float fX, float fY){
  endX = mouseX;
  endY = mouseY;
  float strech = fX - iX;
  light(iX,iY,fX,fY,10,strech/9);
}

void light(float iX, float iY, float fX, float fY,float deg, float dist){
  float newiX = iX+((random(1)+0.5)*dist);
  float newiY = iY+((random(1)+0.5)*deg);
  line(iX,iY,newiX,newiY);
  
  if(deg > 0.1){
    light(newiX,newiY,fX,fY,deg/5,dist*0.8);
    light(-1*newiX,newiY,fX,fY,deg/5,dist*0.8);
  }
}
