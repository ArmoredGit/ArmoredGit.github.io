int q = 4;
int p = 5;
float a = 0.25;
float s = 50;
float rotX = 0;
float rotY = 0;
void setup() {
  size(800, 800, P3D);
  textAlign(CENTER);
  textSize(30);
}

void draw() {
  pushMatrix();
  background(0);
  translate(width/4, height/4, 0);
  rotateX(rotX);
  rotateY(rotY);
  stroke(255);
  strokeWeight(10);
  noFill();
  int c = 0;
  beginShape();
  for(float i = 0; i < TWO_PI * p + 0.1; i += 0.1){
    float r = 2 + cos(q*i/p);
    float t = i;
    float z = a * sin(q*((p-1)*i/p));
    colorMode(HSB);
    if (c >= 255){  
      c=0;  
    }else{  
      c++;
      stroke(c, 255, 255);
    }
    vertex(s * r * cos(t), s * r * sin(t), s * z);
  }
  endShape();
  popMatrix();
  
  
  pushMatrix();
  translate(width/4, 3 * height/4, 0);
  rotateX(rotX);
  rotateY(rotY);
  stroke(255);
  strokeWeight(10);
  noFill();
  c = 0;
  beginShape();
  for(float i = 0; i < TWO_PI * p + 0.1; i += 0.1){
    float r = 2.5 - a* sin(q*(p-1)*i/p);
    float t = i;
    float z = 2.5 * cos(q*i/p);
    colorMode(HSB);
    if (c >= 255){  
      c=0;  
    }else{  
      c++;
      stroke(c, 255, 255);
    }
    vertex(s * r * cos(t), s * r * sin(t), s * z);
  }
  endShape();
  popMatrix();
  
  
  pushMatrix();
  translate(3 * width/4, height/4, 0);
  rotateX(0);
  rotateY(0);
  textSize(30);
  text("Turk's Head Knot", 0, 0, 0);
  popMatrix();
  
  pushMatrix();
  translate(3 * width/4, 3 * height/4, 0);
  rotateX(0);
  rotateY(0);
  textSize(20);
  text("Key controls\nM + bights\nN - bights\nK + leads\nJ - leads", 0, 0, 0);
  popMatrix();
  colorMode(RGB);
}

void mouseDragged() {
  rotY += (mouseX - pmouseX) * 0.01;
  rotX -= (mouseY - pmouseY) * 0.01;
}

void keyPressed(){
  switch(key){
    case 'm':
      q++;
      break;
    case 'n':
      q--;
      break;
    case 'k':
      p++;
      break;
    case 'j':
      p--;
      break;
  }
  print(q);
}
