var myMap;
var keyCount;

function setup() {
  createCanvas(500, 500);
  colorMode(HSB);
  myMap = new Map();
  keyCount = 0;
  for(let i = 0; i < 50; i++){
    myMap.map[round(random(0,50))][round(random(0,50))].type = ',';
  }
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      myMap.map[i+13][j+13].type = '≈';
      //myMap.map[i+13][j+13].contains = '≈';
    }
  }
  for(let i = 0; i < 6; i++){
    myMap.map[i][0].contains = ' ';
    myMap.map[myMap.map.length - 1 - i][0].contains = ' ';
    myMap.map[i][myMap.map.length - 1].contains = ' ';
    myMap.map[myMap.map.length - 1 - i][myMap.map.length - 1].contains = ' ';
    
    myMap.map[0][i].contains = ' ';
    myMap.map[0][myMap.map.length - 1 - i].contains = ' ';
    myMap.map[myMap.map.length - 1][i].contains = ' ';
    myMap.map[myMap.map.length - 1][myMap.map.length - 1 - i].contains = ' ';
  }
  
  for(let i = 0; i < 4; i++){
    myMap.map[i+1][1].contains = ' ';
    myMap.map[myMap.map.length - 2 - i][1].contains = ' ';
    myMap.map[i+1][myMap.map.length - 2].contains = ' ';
    myMap.map[myMap.map.length - 2 - i][myMap.map.length - 2].contains = ' ';
    
    myMap.map[1][i+1].contains = ' ';
    myMap.map[1][myMap.map.length - 2 - i].contains = ' ';
    myMap.map[myMap.map.length - 2][i+1].contains = ' ';
    myMap.map[myMap.map.length - 2][myMap.map.length - 2 - i].contains = ' ';
  }
  
  for(let i = 0; i < 2; i++){
    myMap.map[i+2][2].contains = ' ';
    myMap.map[myMap.map.length - 3 - i][2].contains = ' ';
    myMap.map[i+2][myMap.map.length - 3].contains = ' ';
    myMap.map[myMap.map.length - 3 - i][myMap.map.length - 3].contains = ' ';
    
    myMap.map[2][i+2].contains = ' ';
    myMap.map[2][myMap.map.length - 3 - i].contains = ' ';
    myMap.map[myMap.map.length - 3][i+2].contains = ' ';
    myMap.map[myMap.map.length - 3][myMap.map.length - 3 - i].contains = ' ';
  }
  
  for(let i = 0; i < 19; i++){
    myMap.map[10][11+i].contains = '║';
    myMap.map[30][11+i].contains = '║';
    myMap.map[11+i][10].contains = '═';
    myMap.map[11+i][30].contains = '═';
  }
  myMap.map[30][10].contains = '╗';
  myMap.map[30][30].contains = '╝';
  myMap.map[10][10].contains = '╔';
  myMap.map[10][30].contains = '╚';
  myMap.map[20][10].contains = '@';
  myMap.map[24][14].contains = 'O';
  frameRate(5);
}


function draw() {
  background(0);
  fill(255, 0, 255);
  myMap.drawMap();
  myMap.tic();
}

class Map {
  constructor() {
    this.map = [];
    for (let i = 0; i <= 50; i++) {
      this.map[i] = [];
      for (let j = 0; j <= 50; j++) {
        this.map[i][j] = new Tile();
      }
    }
  }

  drawMap() {
    let Ind = width/20;
    textSize(Ind);
    for (let i = 0; i <= 50; i++) {
      for (let j = 0; j <= 50; j++) {
        fill((Ind*(i+10-this.findPlayer().i)/width*255),40,(100/dist(i, j, this.findPlayer().i, this.findPlayer().j)));
        text(this.map[i][j].toChar(i, j), Ind*(i+10-this.findPlayer().i), Ind*(j+10-this.findPlayer().j));
      }
    }
  }

  findPlayer() {
    for (let i = 0; i <= 50; i++) {
      for (let j = 0; j <= 50; j++) {
        if (this.map[i][j].contains == '@') {
          return {
            i, j,
          };
        }
      }
    }
  }

  tic() {
    for (let i = 0; i <= 50; i++) {
      for (let j = 0; j <= 50; j++) {
        this.map[i][j].found = false;
      }
    }

    for (let i = 0; i <= 50; i++) {
      for (let j = 0; j <= 50; j++) {
        if (!this.map[i][j].found) {
          if (this.map[i][j].contains == '@') {
            if (key == 'w' && keyCount > 0.5 && j > 0) {
              if (this.map[i][j-1].contains == '²') {
                this.map[i][j].contains = '²';
                this.map[i][j-1].contains = '@';
                this.map[i][j].found = true;
                this.map[i][j-1].found = true;
              }
            } else if (key == 'a' && keyCount > 0.5 && i > 0) {
              if (this.map[i-1][j].contains == '²') {
                this.map[i][j].contains = '²';
                this.map[i-1][j].contains = '@';
                this.map[i][j].found = true;
                this.map[i-1][j].found = true;
              }
            } else if (key == 's' && keyCount > 0.5 && j < this.map[i].length-1) {
              if (this.map[i][j+1].contains == '²') {
                this.map[i][j].contains = '²';
                this.map[i][j+1].contains = '@';
                this.map[i][j].found = true;
                this.map[i][j+1].found = true;
              }
            } else if (key == 'd' && keyCount > 0.5 && i < this.map.length-1) {
              if (this.map[i+1][j].contains == '²') {
                this.map[i][j].contains = '²';
                this.map[i+1][j].contains = '@';
                this.map[i][j].found = true;
                this.map[i+1][j].found = true;
              }
            }
          }
        }
      }
    }
  }
}

class Tile {
  constructor() {
    this.type = '.';
    this.contains = '²';
    this.found = true;
  }

  toChar(x,y) {
    if (this.type == '≈') {
      fill(240, 200,(150/dist(x, y, myMap.findPlayer().i, myMap.findPlayer().j)));
    }
    if (this.contains == '²') {
      return this.type;
    } else if (this.contains == '@') {
      fill(150, 255, 255);
      return this.contains;
    } else if (this.contains == 'O') {
      fill(0, 2555, (100/dist(x, y, myMap.findPlayer().i, myMap.findPlayer().j))+20);
      return this.contains;
    }
    return this.contains;
  }
}

function keyPressed() {
  //if(key == 'w' || key == 'a' || key == 's' || key == 'd'){
  keyCount++;
  //}
}

function keyReleased() {
  keyCount--;
  if (round(keyCount)<0) {
    keyCount = 0;
  }
}
