float startX;
float endX;
float startY;
float endY;
float type = 1;
float count;

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
  count = 1;
}

void draw()
{
  if (type == 3) {
    fill(10, 10, 10, 25);
    rect(-1, -1, width + 1, width + 1);
    stroke(random(0, 250), random(0, 255), random(0, 250));
    while (endX<width) {
      endX+=random(height/30);
      endY+=random(height/15)-(height/30);
      if(endY > ((height/2)+(height/3))){
        endY -= 2;
      } else if(endY < (height/6)){
        endY += 2;
      } else if(endY < (height/2)){
        endY += 1;
      } else if(endY > ((height/2)+(height/6))){
        endY -= 1;
      }
      line(startX, startY, endX, endY);
      startX=endX;
      startY=endY;
      if(startY > height){
        endY-=20;
      }else if(startY < 0){
        endY+=20;
      }
    }
    startX = 0;
    endX = 0;
  } else if (type == 1) {
    fill(10, 10, 10, 25);
    rect(-1, -1, width + 1, width + 1);
    ellipse(width/2.0, height/2.0, width*1.0, width*1.0);
    stroke(random(0, 250), random(0, 255), random(0, 250));
    //startX = (height/2)-150;
    //startY = (height/2)-150;
    //endX = mouseX;
    //endY = mouseY;
    findInter();
    angleLight();
    //line(startX,startY,endX,endY);
    lineGenerater();
    //findInter();
    //line(startX,startY,endX,endY);
    count++;
    if(count > 500){
      keyPressed();
    }
  } else {
    background(0);
    startLight(startX, startY, endX, endY);
  }
}

void mousePressed()
{
  if (type == 1) {
    background(10);
    startX = 2;
    endX = 500;
    startY = (height/2);
    endY = (height/2);
    stroke(random(0, 255), random(0, 255), random(0, 255));
  } else {
    stroke(random(0, 255), random(0, 255), random(0, 255));
  }
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
  float newh = tan(atan(tanS)-(atan(j)-atan(tanS))+((1/180)*PI)-random((2/180)*PI));
  while(dist(fX,fY,((((fY-(width/10))-fY)/newh)+fX),fY-(width/10))<width/15)
    newh = tan(atan(tanS)-(atan(j)-atan(tanS))+((1/180)*PI)-random((2/180)*PI));
  //float one = dist(r,r,fX-(width/10),((newh*((fX-(width/10))-fX))-fX)+fY);
  //float two = dist(r,r,fX+(width/10),((newh*((fX+(width/10))-fX))-fX)+fY);
  float three = dist(r,r,((((fY-(width/10))-fY)/newh)+fX),fY-(width/10));
  float four = dist(r,r,((((fY+(width/10))-fY)/newh)+fX),fY+(width/10));
  //if(newh<1 && newh>-1){
  //  if(one < two){
  //    endX = fX-(width/10);
  //    endY = ((newh*((fX-(width/10))-fX))-fX)+fY;
  //    print(1);
  //  } else if(one > two){
  //    endX = fX+(width/10);
  //    endY = ((newh*((fX+(width/10))-fX))-fX)+fY;
  //    print(2);
  //  } 
  //}else if(newh>1 || newh<-1){
    if(three < four){
      endY = fY-(width/10);
      endX = ((((fY-(width/10))-fY)/newh)+fX);
    } else if(four < three){
      endY = fY+(width/10);
      endX = ((((fY+(width/10))-fY)/newh)+fX);
    }
  //}
  //if(force == 1){
    //endX = fX-(width/10);
    //endY = ((newh*((fX-(width/10))-fX))-fX)+fY;
  //} else if(force == 2){
    //endX = fX+(width/10);
    //endY = ((newh*((fX+(width/10))-fX))-fX)+fY;
  //} else if(force == 3){
    //endY = fY-(width/10);
    //endX = ((((fY-(width/10))-fY)/newh)+fX);
  //} else if(force == 4){
    //endY = fY+(width/10);
    //endX = ((((fY+(width/10))-fY)/newh)+fX);
  //}
  
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
    /*if(fY>(j*fX)+h+(height/10)){
      fY-=(height/15);
    } else if(fY>(j*fX)+h-(height/10)){
      fY+=(height/15);
    }*/
    line(iX,iY,fX,fY);
    iX = fX;
    iY = fY;
  }
  line(iX,iY,endX,endY);
}

void startLight(float iX, float iY, float fX, float fY) {
  endX = mouseX;
  endY = mouseY;
  float theta = atan(((fY-iY)/(fX-iX)));
  if (fX-iX < 0)
    theta+=PI;
  float strech = sqrt(((fX - iX)*(fX - iX))+((fX - iX)*(fX - iX)));
  light(iX, iY, fX, fY, 8, strech/10, theta, 0);
}

void light(float iX, float iY, float fX, float fY, float count, float dist, float angle, float direction) {
  angle += direction*random(PI/5);
  float newiX = iX+(dist*cos(angle));
  float newiY = iY+(dist*sin(angle));
  line(iX, iY, newiX, newiY);
  angle  = atan(((fY-iY)/(fX-iX)));
  if (fX-iX < 0)
    angle+=PI;

  if (count > 0.1 && (direction == 1 || direction == 0)) {
    light(newiX, newiY, fX, fY, (count/2)-2, dist*0.97, angle, 1);
    light(newiX, newiY, fX, fY, count-1, dist*0.97, angle, -1);
  } else if (count > 0.1 && direction == -1) {
    light(newiX, newiY, fX, fY, count-1, dist*0.97, angle, 1);
    light(newiX, newiY, fX, fY, (count/2)-2, dist*0.97, angle, -1);
  }
}
