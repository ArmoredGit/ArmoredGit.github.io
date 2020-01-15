var myMap;

function setup() {
  createCanvas(500,500);
  colorMode(HSB);
  myMap = new Map();
  myMap.map[20][10].contains = '@';
}


function draw() {
  background(0);
  fill(255,0,255);
  myMap.drawMap();
  myMap.tic();
}

class Map{
  constructor(){
    this.map = [];
    for(let i = 0; i < 50; i++){
      this.map[i] = [];
      for(let j = 0; j < 50; j++){
        this.map[i][j] = new Tile();
      }
    }
  }
  
  drawMap(){
    let Ind = width/50;
    for(let i = 0; i < 50; i++){
      for(let j = 0; j < 50; j++){
        fill(i*5,60,(200/dist(i,j,this.findPlayer().i,this.findPlayer().j)));
        text(this.map[i][j].toChar(),Ind*i,Ind*j);
      }
    }
  }
  
  findPlayer(){
    for(let i = 0; i < 50; i++){
      for(let j = 0; j < 50; j++){
        if(this.map[i][j].contains == '@'){
          return {i,j,};
        }
      }
    }
  }
  
  tic(){
    for(let i = 0; i < 50; i++){
      for(let j = 0; j < 50; j++){
        if(this.map[i][j].contains == '@'){
          
        }
      }
    }
  }
}

class Tile{
  constructor(){
    this.type = '.';
    this.contains = ' ';
  }
  
  toChar(){
    if(this.contains == ' '){
      return this.type;
    }
    fill(255,0,255);
    return this.contains;
  }
}
