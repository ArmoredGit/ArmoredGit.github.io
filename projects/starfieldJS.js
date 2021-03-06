var jeff;
var gloabalNewA;
var gloabalNewV;
var gloabalNewT;
var gloabalNewR;
var gloabalNewG;
var gloabalNewB;
var gloabalTic;
var gloabalRun;

function setup() {
  //your code here
  createCanvas(windowWidth, windowHeight);
  noStroke();
  fill(255);
  gloabalNewA = -0.01;
  gloabalNewV = random(2, 5);
  gloabalNewT = random(0, 360);
  gloabalNewR = random(0, 255);
  gloabalNewG = random(0, 255);
  gloabalNewB = random(0, 255);
  gloabalTic = 0;
  gloabalRun = 0;
  jeff = [];
  for (let i = 0; i < 10; i++) {
    jeff.push(new OddballParticle());
  }
  for (let i = 0; i < 30; i++) {
    jeff.push(new NormalParticle());
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  //your code here
  gloabalTic++;
  background(0);
  for (let i = 0; i < jeff.length; i++) {
    jeff[i].move();
  }
  for (let i = 0; i < jeff.length; i++) {
    jeff[i].show();
  }
  if (gloabalTic < 100) {
    for (let i = 0; i < 30; i++) {
      jeff.push(new NormalParticle());
    }
  } else {
    gloabalNewA = -0.01;
    gloabalNewV = random(2, 5);
    gloabalNewT = random(0, 360);
    gloabalNewR = random(0, 255);
    gloabalNewG = random(0, 255);
    gloabalNewB = random(0, 255);
    if (gloabalTic > 300) {
      gloabalTic = 0;
      gloabalRun++;
      if (gloabalRun > 4) {
        gloabalRun = 0;
      }
    }
  }
  for (let i = 0; i < jeff.length; i++) {
    if (dist(jeff[i].getx(), jeff[i].gety(), width / 2, height / 2) > width || jeff[i].getAge() > 500) {
      jeff.splice(i, 1);
    }
  }
}

class NormalParticle {
  //your code here
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
    this.speed = 2;
    this.tic = 0;
    this.a = gloabalNewA;
    this.v = gloabalNewV;
    this.r = gloabalNewR + random(-20, 20);
    this.g = gloabalNewG + random(-20, 20);
    this.b = gloabalNewB + random(-20, 20);
    if (gloabalRun == 0) {
      this.angle = ((random([0, 1, ]) == 0) ? random(180, 240) : random(0, 60)) + gloabalNewT;
    } else if (gloabalRun == 1) {
      this.angle = random(0, 60) + gloabalNewT;
      this.speed = 6;
    } else if (gloabalRun == 2) {
      this.angle = random(0, 360) + gloabalNewT;
    } else if (gloabalRun == 3) {
      this.angle = random(0, 60) + gloabalNewT;
    } else if (gloabalRun == 4) {
      this.angle = gloabalNewT;
      this.x = random(0, width);
      this.y = random(0, height);
      this.tic = 350;
    }
  }

  move() {
    this.tic++;
    this.x += this.speed * cos(radians(this.angle));
    this.y += this.speed * sin(radians(this.angle));
    this.angle -= ((this.a * this.tic) + this.v);
  }

  show() {
    fill(this.r, this.g, this.b);
    ellipse(this.x, this.y, 10, 10);
  }

  getx() {
    return this.x;
  }

  gety() {
    return this.y;
  }

  getAge() {
    return this.tic;
  }
}

class OddballParticle extends NormalParticle //uses an varerface
{
  constructor() {
    super();
  }

  move() {
    super.r = gloabalNewR + random(-20, 20);
    super.g = gloabalNewG + random(-20, 20);
    super.b = gloabalNewB + random(-20, 20);
  }

  show() {
    ellipse((width / 2) + random(-4, 4), (height / 2) + random(-4, 4), 10, 10);
  }

  getx() {
    return (width / 2);
  }

  gety() {
    return (height / 2);
  }

  getAge() {
    return 0;
  }
}
