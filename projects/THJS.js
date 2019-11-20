var q;
var p;
var a;
var s;
var rotX;
var rotY;
function setup() {
  createCanvas(800, 800, WEBGL);
  textAlign(CENTER);
  textSize(30);
  q = 4;
  p = 5;
  a = 0.25;
  s = 50;
  rotX = 0;
  rotY = 0;
}

function draw() {
  background(0);
  push();
  translate(-width/4, -height/4, 0);
  rotateX(rotX);
  rotateY(rotY);
  stroke(255);
  strokeWeight(10);
  noFill();
  let c = 0;
  beginShape();
  for(let i = 0; i < TWO_PI * p + 0.1; i += 0.1){
    let r = 2 + cos(q*i/p);
    let t = i;
    let z = a * sin(q*((p-1)*i/p));
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
  pop();
  
  
  push();
  translate(-width/4, height/4, 0);
  rotateX(rotX);
  rotateY(rotY);
  stroke(255);
  strokeWeight(10);
  noFill();
  c = 0;
  beginShape();
  for(let i = 0; i < TWO_PI * p + 0.1; i += 0.1){
    let r = 2.5 - a* sin(q*(p-1)*i/p);
    let t = i;
    let z = 2.5 * cos(q*i/p);
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
  pop();
  
  
  push();
  translate(width/4, -height/4, 0);
  textSize(30);
  text("Turk's Head Knot", 0, 0, 0);
  pop();
  
  push();
  translate(width/4, height/4, 0);
  textSize(20);
  text("Key controls\nM + bights\nN - bights\nK + leads\nJ - leads", 0, 0, 0);
  pop();
  colorMode(RGB);
}

function mouseDragged() {
  rotY += (mouseX - pmouseX) * 0.01;
  rotX -= (mouseY - pmouseY) * 0.01;
}

function keyPressed(){
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
}
