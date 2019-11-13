var pop;
var feast;
var play;
var slowTic;
var disp;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight-20);
  ellipseMode(CENTER);
  play = true;
  pop = [];
  feast = [];
  let i;
  for (i = 0; i < 100; i++) {
    pop.push(new Creature(random(0, (width * 2 / 3)), random(0, height)));
  }
  
  for (i = 0; i < 20; i++) {
    feast.push(new Food(random(0, (width * 2 / 3)), random(0, height), 100));
  }
  slowTic = 0;
  disp = 0;
}

Array.prototype.insert = function ( index, item ) {
  this.splice( index, 0, item );
};

function draw() {
  background(0);
  fill(0, 150, 0);
  rect((width * 2 / 3), 0, width, height);
  fill(0);
  rect((width * 2 / 3) + 6, 0, width, height);
  slowTic++;
  if (slowTic > 180) {
    slowTic = 0;
    disp++;
  }
  if (disp >= pop.length) {
    disp = 0;
  }
  fill(pop[disp].red, pop[disp].green, pop[disp].blue);
  ellipse((width * 5 / 6), height/4, (width * 2 / 3)/5, (width * 2 / 3)/5);
  fill(255);
  text("\n \n energy " + pop[disp].energy + "\n\n sensitivity " + pop[disp].sensitivity + "\n\n sensitivityFood " + pop[disp].sensitivityFood + "\n\n speedFood " + pop[disp].speedFood + "\n\n energyFood " + pop[disp].energyFood + "\n\n sensitivityMate " + pop[disp].sensitivityMate + "\n\n speedMate " + pop[disp].speedMate + "\n\n energyMate " + pop[disp].energyMate + "\n\n speedWander " + pop[disp].speedWander + "\n\n  initiative " + pop[disp].initiative + "\n\n  generation " + pop[disp].generation + "\n\n  red " + pop[disp].red + "\n\n  green " + pop[disp].green + "\n\n  blue " + pop[disp].blue, (width * 2 / 3) + 10, height/2);
  if (play) {
    for ( i = 1; i < pop.length-1; i++) {
      let init = pop[i].initiative;
      let keep = pop[i];
      let j = i-1;
      while ( j >= 0 && init > pop[j].initiative) {
        pop[j+1] = pop[j];
        j--;
      }
      pop[j+1] = keep;
    }
    let j = 0;
    pop.forEach(x => x.move());
    pop.forEach(u => {
      for (j = feast.length - 1; j >= 0; j--) {
        if (dist(u.x, u.y, feast[j].x, feast[j].y) < 15) {
          u.energy += feast.splice(j,1)[0].val;
        }
      }
    });
    for ( i = pop.length - 1; i >= 0; i--) {
      for ( j = pop.length - 1; j >= 0; j--) {
        if (!pop[i].equals(pop[j]) && pop[i].mate && pop[j].mate && 10 > dist(pop[i].x, pop[i].y, pop[j].x, pop[j].y)) {
          pop[i].mate = false;
          pop[j].mate = false;
          pop[i].energy /= 2;
          pop[j].energy /= 2;
          pop.insert(0, new Creature(pop[i].x, pop[i].y));
          pop[0].energy = ((pop[i+1].energy + pop[j+1].energy) / 4)*random(0.95, 1.05);
          pop[0].sensitivity = ((pop[i+1].sensitivity + pop[j+1].sensitivity) / 2)*random(0.95, 1.05);
          pop[0].sensitivityFood = ((pop[i+1].sensitivityFood + pop[j+1].sensitivityFood) / 2)*random(0.95, 1.05);
          pop[0].speedFood = ((pop[i+1].speedFood + pop[j+1].speedFood) / 2)*random(0.95, 1.05);
          pop[0].energyFood = ((pop[i+1].energyFood + pop[j+1].energyFood) / 2)*random(0.95, 1.05);
          pop[0].sensitivityMate = ((pop[i+1].sensitivityMate + pop[j+1].sensitivityMate) / 2)*random(0.95, 1.05);
          pop[0].speedMate = ((pop[i+1].speedMate + pop[j+1].speedMate) / 2)*random(0.95, 1.05);
          pop[0].energyMate = ((pop[i+1].energyMate + pop[j+1].energyMate) / 2)*random(0.95, 1.05);
          pop[0].speedWander = ((pop[i+1].speedWander + pop[j+1].speedWander) / 2)*random(0.95, 1.05);
          pop[0].initiative = ((pop[i+1].initiative + pop[j+1].initiative) / 2)*random(0.95, 1.05);
          pop[0].generation = ((pop[i+1].generation > pop[j+1].generation)?pop[i+1].generation:pop[j+1].generation) + 1;
          pop[0].red = ((pop[i+1].red + pop[j+1].red) / 2)*random(0.95, 1.05);
          pop[0].green = ((pop[i+1].green + pop[j+1].green) / 2)*random(0.95, 1.05);
          pop[0].blue = ((pop[i+1].blue + pop[j+1].blue) / 2)*random(0.95, 1.05);
        }
      }
    }
    for (i = pop.length - 1; i >= 0; i--){
      if (pop[i].energy < 0){
        pop.splice(i,1);
      }
    }
    pop.forEach(x => x.show());
    feast.forEach(x => x.show());
    feast.push(new Food(random(0, (width * 2 / 3)), random(0, height), 100));
    if (pop.length == 1){
      play = false;
    }
  } else {
    play = true;
    setup();
  }
}

function sigmoid( distance,  sensitivity,  value) {
  let l = 2*value;
  let k = sensitivity;
  let x = distance;
  let solve = (l/(1+pow(2.72, (k*x))));
  return solve;
}

function strongSig( x,  y,  sensitivity, lists) {
  let strong = [];
  strong[0] = 0;
  strong[1] = 0;
  strong[2] = 0;
  lists.forEach( u =>
  {
    let next = sigmoid(dist(x, y, u.x, u.y), sensitivity, u.val);
    if (strong[0] < next) {
      strong[0] = next;
      strong[1] = u.x;
      strong[2] = u.y;
    }
  });
  return strong;
}

function strongSigM( x,  y,  sensitivity, lists,  him) {
  let strong = [];
  this.strong[0] = 0;
  this.strong[1] = 0;
  this.strong[2] = 0;
  lists(i => {
    if (i.mate && !i.equals(him)) {
      let next = sigmoid(dist(x, y, i.x, i.y), sensitivity, i.energy);
      if (strong[0] < next) {
        this.strong[0] = this.next;
        this.strong[1] = this.i.x;
        this.strong[2] = this.i.y;
      }
    }
  });
  return this.strong;
}

class Creature {
  constructor( x, y) {
    this.x = x;
    this.y = y;
    this.energy = 10000;
    this.sensitivity = random(0, 0.5);
    this.sensitivityFood = random(0, 5); 
    this.speedFood = random(5, 25);
    this.energyFood = random(5000, 10000);
    this.energyMate = random(15000, 20000);
    this.sensitivityMate = random(0, 5);
    this.speedMate = random(5, 25);
    this.speedWander = random(1, 35);
    this.initiative = random(0, 100);
    this.generation = 1;
    this.red = random(0, 255);
    this.green = random(0, 255);
    this.blue = random(0, 255);
    this.mate = false;
  }

  move() {
    let sight = [];
    let thet = 0.0;
    if (this.energy > this.energyMate){
      this.mate = true;
    }
    if (this.energy < this.energyFood){
      this.mate = false;
    }
    if (this.mate) {
      this.sight = strongSigM(this.x, this.y, this.sensitivity, pop, this);
      if (this.sight[0] > this.sensitivityMate) {
        if (dist(this.x, this.y, this.sight[1], this.sight[2]) < this.speedMate) {
          this.x=this.sight[1];
          this.y=this.sight[2];
        } else {
          this.thet = atan((this.y-this.sight[2])/(this.x -this.sight[1]));
          if (this.x > this.sight[1]) {
            this.x-=2*this.speedMate*cos(this.thet);
            this.y-=2*this.speedMate*sin(this.thet);
          }
          this.x+=this.speedMate*cos(this.thet);
          this.y+=this.speedMate*sin(this.thet);
          this.energy-=this.speedMate;
        }
      } else {
        this.thet = random(0, TWO_PI);
        this.x+=this.speedWander*cos(this.thet);
        this.y+=this.speedWander*sin(this.thet);
        this.energy-=this.speedWander;
      }
    } else {
      this.sight = strongSig(this.x, this.y, this.sensitivity, feast);
      if (this.sight[0] > this.sensitivityFood) {
        if (dist(this.x, this.y, this.sight[1], this.sight[2]) < this.speedFood) {
          this.x=this.sight[1];
          this.y=this.sight[2];
          print(this.x);
        } else {
          this.thet = atan((this.y-this.sight[2])/(this.x-this.sight[1]));
          print(this.thet);
          if (this.x > this.sight[1]) {
            this.x-=2*this.speedFood*cos(this.thet);
            this.y-=2*this.speedFood*sin(this.thet);
          }
          this.x+=this.speedFood*cos(this.thet);
          this.y+=this.speedFood*sin(this.thet);
          this.energy-=this.speedFood;
          print(this.x);
          print(this.thet);
        }
      } else {
        this.thet = random(0, TWO_PI);
        this.x+=this.speedWander*cos(this.thet);
        this.y+=this.speedWander*sin(this.thet);
        this.energy-=this.speedWander;
        print(this.x);
        print(this.thet);
      }
    }
    this.thet = random(0, TWO_PI);
    this.x+=2*cos(this.thet);
    this.y+=2*sin(this.thet);
    print(this.x);
    print(this.thet);
    if (this.x>(width * 2 / 3)){
      this.x = (width * 2 / 3);
    }
    if (this.x<0){
      this.x = 0;
    }
    if (this.y>height){
      this.y = height;
    }
    if (this.y<0){
      this.y = 0;
    }
    print(this.x);
    print(this.thet);
  }

  show() {
    fill(this.red, this.green, this.blue);
    ellipse(this.x, this.y, 10, 10);
    text(this.energy, this.x+10, this.y+10);
  }

  equals( fr) {
    return (fr.initiative == this.initiative);
  }
}

class Food {
  constructor( x, y, val) {
    this.x = x;
    this.y = y;
    this.val = val;
  }

  show() {
    fill(255);
    ellipse(this.x, this.y, 5, 5);
  }
}
