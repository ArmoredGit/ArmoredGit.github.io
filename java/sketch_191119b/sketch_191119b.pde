float q = 12;
float p = 7;
float a = 0.25;
float s = 50;
float rotX = 0, rotY = 0;
int mode = 1;

void setup() {
  size(400, 400, P3D);
}

void draw() {
  background(0);
  
  translate(width/2, height/2, 0);
  rotateX(rotX);
  rotateY(rotY);
  stroke(255);
  strokeWeight(10);
  noFill();
  int c = 0;
  beginShape();
  for(float i = 0; i < TWO_PI * p + 0.1; i += 0.1){
    float r = 0;
    float t = 0;
    float z = 0;
    if(mode == 0){
      r = 2 + cos(q*i/p);
      t = i;
      z = a * sin(q*((p-1)*i/p));
    } else {
      r = 2.5 - a* sin(q*(p-1)*i/p);
      t = i;
      z = 2.5 * cos(q*i/p);
    }
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
  colorMode(RGB);
}

void mouseDragged() {
  rotY += (mouseX - pmouseX) * 0.01;
  rotX -= (mouseY - pmouseY) * 0.01;
}
