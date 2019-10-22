float startX;
float endX;
float startY;
float endY;

void setup()
{
  size(500, 500);
  frameRate(10);
  background(10);
  startX = (height/2)+83;
  endX = height;
  startY = (height/2)+50;
  endY = (height/2)-100;
  stroke(random(0, 255), random(0, 255), random(0, 255));
}

void draw()
{
    fill(10, 10, 10, 25);
    rect(-1, -1, width + 1, width + 1);
    ellipse(width/2.0, height/2.0, width*1.0, width*1.0);
    stroke(random(0, 250), random(0, 255), random(0, 250));
    findInter();
    angleLight();
    lineGenerater();
}

void keyPressed() {
  //type *= -1;
  startX = 150;
  endX = 500;
  startY = 150;
  endY = 400;
}

void lineGenerater(){
  float j = (endY-startY)/(endX-startX);
  float r = width/2;
  float fX = endX;
  float fY = endY;
  float tanS = ((fX-r)/(sqrt((r*r)-((fX-r)*(fX-r)))));
  if(fY>r){
    tanS*=-1;
  }
  float newh = tan(atan(tanS)-(atan(j)-atan(tanS))+((10/180)*PI)-random((5/180)*PI));
  float three = dist(r,r,((((fY-(width/10))-fY)/newh)+fX),fY-(width/10));
  float four = dist(r,r,((((fY+(width/10))-fY)/newh)+fX),fY+(width/10));
  print(newh);
    if(three < four){
      endY = fY-(width/10);
      endX = ((((fY-(width/10))-fY)/newh)+fX);
      print(3);
    } else if(four < three){
      endY = fY+(width/10);
      endX = ((((fY+(width/10))-fY)/newh)+fX);
      print(4);
    }
  startY = fY;
  startX = fX;
}

void findInter(){
  float j = (endY-startY)/(endX-startX);
  float h = (-1*j*startX)+startY;
  float r = width/2;
  if(endX>startX){
    endX = (((-2*(j*h-r-j*r))+sqrt((2*(j*h-r-j*r))*(2*(j*h-r-j*r))-4*(j*j+1)*(h-r)*(h-r)))/(2*(j*j+1)));
    endY = j*(endX-startX)+startY;
  } else {
    endX = (((-2*(j*h-r-j*r))-sqrt((2*(j*h-r-j*r))*(2*(j*h-r-j*r))-4*(j*j+1)*(h-r)*(h-r)))/(2*(j*j+1)));
    endY = j*(endX-startX)+startY;
  }
}

void angleLight(){
  float iX = startX;
  float iY = startY;
  float fX = startX;
  float fY = startY;
  float j = (endY-startY)/(endX-startX);
  float h = (-1*j*startX)+startY;
  while(sqrt(((fX-endX)*(fX-endX)+1)+((fY-endY)*(fY-endY)+1))>(height/10) && fX<width && fX>-2){
    if(endX>fX && fX <= ((fY-h)/j)+(height/20)){
      fX += random(height/30);
    }  else if(endX<fX && fX >= ((fY-h)/j)-(height/20)){
      fX -= random(height/30);
    }
    if(fY>endY && fY >= ((fX*j)+h)-(height/20)){
      fY -= random(height/30);
    } else if(fY<endY && fY <= ((fX*j)+h)+(height/20)){
      fY += random(height/30);
    }
    line(iX,iY,fX,fY);
    iX = fX;
    iY = fY;
  }
  line(iX,iY,endX,endY);
}
