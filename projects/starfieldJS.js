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
  createCanvas(window.innerWidth, window.innerHeight);
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
