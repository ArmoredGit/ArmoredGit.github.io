class LevelSelect{
  constructor(level) {
    this.level = level;
  }
  
  setLevel(level){
    this.level = level;
  }
  
  resetLevel(){
    timer=0;
    snowflakeArray = [];
    snowBlockArray = [];
    obs = [];
    exp = [];
    rocksDropped = 0;
    started=false;
    maze = [];
    for(let i = 0; i < 14;i++){
      maze[i] = [];
      for(let j = 0; j < 15;j++){
        maze[i][j] = false;
      }
    }
    for(let i = 0; i < 200;i++){
      snowflakeArray[i]= new Snow();
    }
    for(let i = 200; i<300; i++){
      snowflakeArray[i]= new RedSnow();
    }
    for(let i = 300; i<400; i++){
      snowflakeArray[i]= new GreenSnow();
    }
    
    for(let i = 0; i < 14;i++){
      snowBlockArray[i] = [];
      for(let j = 0; j < 15;j++){
        snowBlockArray[i][j] = new SnowBlock(i,j);
      }
    }
    
    for(let i = 0; i < 7;i++){
      snowBlockArray[6][i].fill = false;
      snowBlockArray[6][i].up = false;
      snowBlockArray[6][i].down = false;
      exp.push({"x":6,"y":i,});
    }
    
    for(let i = 0; i < 14;i++){
      snowBlockArray[i][0].fill = false;
      snowBlockArray[i][0].up = false;
      snowBlockArray[i][0].left = false;
      snowBlockArray[i][0].right = false;
      exp.push({"x":i,"y":0,});
    }
  
    snowBlockArray[6][7].fill = false;
    snowBlockArray[6][7].up = false;
    snowBlockArray[6][7].left = false;
    snowBlockArray[6][7].right = false;
    snowBlockArray[7][7].fill = false;
    snowBlockArray[7][7].left = false;
    snowBlockArray[5][7].fill = false;
    snowBlockArray[5][7].right = false;
    exp.push({"x":5,"y":7,});
    exp.push({"x":6,"y":7,});
    exp.push({"x":7,"y":7,});
  
    player1.x = 6;
    player1.y = 7;
    moving=false;
    rocksDropped = 0;
     
    switch(round(this.level)){
      case 2:
        snowBlockArray[6][9].fill = false;
        snowBlockArray[6][9].right = false;
        snowBlockArray[7][9].left = false;
        snowBlockArray[7][9].fill = false;
        snowBlockArray[7][9].right = false;
        snowBlockArray[8][9].left = false;
        snowBlockArray[8][9].fill = false;
        
        snowBlockArray[1][6].fill = false;
        snowBlockArray[1][6].right = false;
        snowBlockArray[2][6].left = false;
        snowBlockArray[2][6].fill = false;
        snowBlockArray[2][6].right = false;
        snowBlockArray[3][6].left = false;
        snowBlockArray[3][6].fill = false;
        
        snowBlockArray[10][11].fill = false;
        snowBlockArray[10][11].right = false;
        snowBlockArray[11][11].left = false;
        snowBlockArray[11][11].fill = false;
        snowBlockArray[11][11].right = false;
        snowBlockArray[12][11].left = false;
        snowBlockArray[12][11].fill = false;
        
        snowBlockArray[10][3].fill = false;
        snowBlockArray[10][3].right = false;
        snowBlockArray[11][3].left = false;
        snowBlockArray[11][3].fill = false;
        snowBlockArray[11][3].right = false;
        snowBlockArray[12][3].left = false;
        snowBlockArray[12][3].fill = false;
        
        snowBlockArray[1][9].fill = false;
        snowBlockArray[1][9].down = false;
        snowBlockArray[1][10].up = false;
        snowBlockArray[1][10].fill = false;
        snowBlockArray[1][10].down = false;
        snowBlockArray[1][11].up = false;
        snowBlockArray[1][11].fill = false;
        
        obs.push(new Obstacle("rock",12,9));
        obs.push(new Obstacle("rock",8,3));
        obs.push(new Obstacle("rock",4,11));
        obs.push(new Obstacle("rock",2,2));
        obs.push(new Obstacle("puf",6,9));
        obs.push(new Obstacle("puf",1,6));
        obs.push(new Obstacle("puf",1,9));
        obs.push(new Obstacle("drg",10,3));
        obs.push(new Obstacle("drg",10,11));
        break;
            case 3:
        //level 3 code
        snowBlockArray[1][5].fill = false;
        snowBlockArray[1][5].right = false;
        snowBlockArray[2][5].left = false;
        snowBlockArray[2][5].fill = false;
        snowBlockArray[2][5].right = false;
        snowBlockArray[3][5].left = false;
        snowBlockArray[3][5].fill = false;
        
        snowBlockArray[5][9].fill = false;
        snowBlockArray[5][9].down = false;
        snowBlockArray[5][10].up = false;
        snowBlockArray[5][10].fill = false;
        snowBlockArray[5][10].down = false;
        snowBlockArray[5][11].up = false;
        snowBlockArray[5][11].fill = false
        
        snowBlockArray[8][12].fill = false;
        snowBlockArray[8][12].right = false;
        snowBlockArray[9][12].left = false;
        snowBlockArray[9][12].fill = false;
        snowBlockArray[9][12].right = false;
        snowBlockArray[10][12].left = false;
        snowBlockArray[10][12].fill = false;
        
        snowBlockArray[7][3].fill = false;
        snowBlockArray[7][3].down = false;
        snowBlockArray[7][4].up = false;
        snowBlockArray[7][4].fill = false;
        snowBlockArray[7][4].down = false;
        snowBlockArray[7][5].up = false;
        snowBlockArray[7][5].fill = false
        
        snowBlockArray[10][2].fill = false;
        snowBlockArray[10][2].right = false;
        snowBlockArray[11][2].left = false;
        snowBlockArray[11][2].fill = false;
        snowBlockArray[11][2].right = false;
        snowBlockArray[12][2].left = false;
        snowBlockArray[12][2].fill = false;
        
        obs.push(new Obstacle("puf",1,5));
        obs.push(new Obstacle("puf",7,5));
        obs.push(new Obstacle("puf",5,11));
        obs.push(new Obstacle("rock",2,2));
        obs.push(new Obstacle("rock",3,9));
        obs.push(new Obstacle("rock",11,6));
        obs.push(new Obstacle("rock",12,11));
        obs.push(new Obstacle("drg",12,2));
        obs.push(new Obstacle("drg",10,12));
      break;
      case 4:
        snowBlockArray[3][3].fill = false;
        snowBlockArray[3][3].right = false;
        snowBlockArray[4][3].left = false;
        snowBlockArray[4][3].fill = false;
        snowBlockArray[4][3].right = false;
        snowBlockArray[5][3].left = false;
        snowBlockArray[5][3].fill = false;
        
        snowBlockArray[7][12].fill = false;
        snowBlockArray[7][12].right = false;
        snowBlockArray[8][12].left = false;
        snowBlockArray[8][12].fill = false;
        snowBlockArray[8][12].right = false;
        snowBlockArray[9][12].left = false;
        snowBlockArray[9][12].fill = false;
        
        snowBlockArray[3][10].fill = false;
        snowBlockArray[3][10].right = false;
        snowBlockArray[4][10].left = false;
        snowBlockArray[4][10].fill = false;
        snowBlockArray[4][10].right = false;
        snowBlockArray[5][10].left = false;
        snowBlockArray[5][10].fill = false;
        
        snowBlockArray[7][3].fill = false;
        snowBlockArray[7][3].down = false;
        snowBlockArray[7][4].up = false;
        snowBlockArray[7][4].fill = false;
        snowBlockArray[7][4].down = false;
        snowBlockArray[7][5].up = false;
        snowBlockArray[7][5].fill = false;
        
        snowBlockArray[11][7].fill = false;
        snowBlockArray[11][7].down = false;
        snowBlockArray[11][8].up = false;
        snowBlockArray[11][8].fill = false;
        snowBlockArray[11][8].down = false;
        snowBlockArray[11][9].up = false;
        snowBlockArray[11][9].fill = false
        
        obs.push(new Obstacle("rock",2,4));
        obs.push(new Obstacle("rock",10,2));
        obs.push(new Obstacle("rock",11,5));
        obs.push(new Obstacle("rock",3,8));
        obs.push(new Obstacle("rock",13,11));
        obs.push(new Obstacle("puf",4,3));
        obs.push(new Obstacle("puf",7,3));
        obs.push(new Obstacle("puf",7,12));
        obs.push(new Obstacle("drg",5,10));
        obs.push(new Obstacle("drg",11,8));
      break;
      case 5:
        snowBlockArray[5][3].fill = false;
        snowBlockArray[5][3].down = false;
        snowBlockArray[5][4].up = false;
        snowBlockArray[5][4].fill = false;
        snowBlockArray[5][4].down = false;
        snowBlockArray[5][5].up = false;
        snowBlockArray[5][5].fill = false;
        
        snowBlockArray[1][3].fill = false;
        snowBlockArray[1][3].right = false;
        snowBlockArray[2][3].left = false;
        snowBlockArray[2][3].fill = false;
        snowBlockArray[2][3].right = false;
        snowBlockArray[3][3].left = false;
        snowBlockArray[3][3].fill = false;
        
        snowBlockArray[9][2].fill = false;
        snowBlockArray[9][2].down = false;
        snowBlockArray[9][3].up = false;
        snowBlockArray[9][3].fill = false;
        snowBlockArray[9][3].down = false;
        snowBlockArray[9][4].up = false;
        snowBlockArray[9][4].fill = false;
        
        snowBlockArray[10][6].fill = false;
        snowBlockArray[10][6].down = false;
        snowBlockArray[10][7].up = false;
        snowBlockArray[10][7].fill = false;
        snowBlockArray[10][7].down = false;
        snowBlockArray[10][8].up = false;
        snowBlockArray[10][8].fill = false;
        
        snowBlockArray[2][9].fill = false;
        snowBlockArray[2][9].right = false;
        snowBlockArray[3][9].left = false;
        snowBlockArray[3][9].fill = false;
        snowBlockArray[3][9].right = false;
        snowBlockArray[4][9].left = false;
        snowBlockArray[4][9].fill = false;
        
        snowBlockArray[10][10].fill = false;
        snowBlockArray[10][10].right = false;
        snowBlockArray[11][10].left = false;
        snowBlockArray[11][10].fill = false;
        snowBlockArray[11][10].right = false;
        snowBlockArray[12][10].left = false;
        snowBlockArray[12][10].fill = false;
        
        obs.push(new Obstacle("rock",8,2));
        obs.push(new Obstacle("rock",12,3));
        obs.push(new Obstacle("rock",2,6));
        obs.push(new Obstacle("rock",5,10));
        obs.push(new Obstacle("rock",10,11));
        obs.push(new Obstacle("puf",5,3));
        obs.push(new Obstacle("puf",3,3));
        obs.push(new Obstacle("puf",9,2));
        obs.push(new Obstacle("drg",10,6));
        obs.push(new Obstacle("drg",4,9));
        obs.push(new Obstacle("drg",10,10));
      break; // ----------------------------------------------------------------------------
      case 6:
        snowBlockArray[3][3].fill = false;
        snowBlockArray[3][3].right = false;
        snowBlockArray[4][3].left = false;
        snowBlockArray[4][3].fill = false;
        snowBlockArray[4][3].right = false;
        snowBlockArray[5][3].left = false;
        snowBlockArray[5][3].fill = false;
        
        snowBlockArray[9][8].fill = false;
        snowBlockArray[9][8].right = false;
        snowBlockArray[10][8].left = false;
        snowBlockArray[10][8].fill = false;
        snowBlockArray[10][8].right = false;
        snowBlockArray[11][8].left = false;
        snowBlockArray[11][8].fill = false;
        
        snowBlockArray[1][9].fill = false;
        snowBlockArray[1][9].right = false;
        snowBlockArray[2][9].left = false;
        snowBlockArray[2][9].fill = false;
        snowBlockArray[2][9].right = false;
        snowBlockArray[3][9].left = false;
        snowBlockArray[3][9].fill = false;
        
        snowBlockArray[5][11].fill = false;
        snowBlockArray[5][11].right = false;
        snowBlockArray[6][11].left = false;
        snowBlockArray[6][11].fill = false;
        snowBlockArray[6][11].right = false;
        snowBlockArray[7][11].left = false;
        snowBlockArray[7][11].fill = false;
        
        snowBlockArray[2][5].fill = false;
        snowBlockArray[2][5].down = false;
        snowBlockArray[2][6].up = false;
        snowBlockArray[2][6].fill = false;
        snowBlockArray[2][6].down = false;
        snowBlockArray[2][7].up = false;
        snowBlockArray[2][7].fill = false;
        
        obs.push(new Obstacle("rock",6,9));
        obs.push(new Obstacle("rock",2,11));
        obs.push(new Obstacle("rock",10,6));
        obs.push(new Obstacle("rock",7,2));
        obs.push(new Obstacle("puf",5,3));
        obs.push(new Obstacle("drg",9,8));
        obs.push(new Obstacle("drg",7,11));
        obs.push(new Obstacle("drg",3,9));
        obs.push(new Obstacle("drg",2,5));
      break;
      case 7:
        snowBlockArray[9][3].fill = false;
        snowBlockArray[9][3].right = false;
        snowBlockArray[10][3].left = false;
        snowBlockArray[10][3].fill = false;
        snowBlockArray[10][3].right = false;
        snowBlockArray[11][3].left = false;
        snowBlockArray[11][3].fill = false;
        
        snowBlockArray[2][9].fill = false;
        snowBlockArray[2][9].right = false;
        snowBlockArray[3][9].left = false;
        snowBlockArray[3][9].fill = false;
        snowBlockArray[3][9].right = false;
        snowBlockArray[4][9].left = false;
        snowBlockArray[4][9].fill = false;
        
        snowBlockArray[8][11].fill = false;
        snowBlockArray[8][11].right = false;
        snowBlockArray[9][11].left = false;
        snowBlockArray[9][11].fill = false;
        snowBlockArray[9][11].right = false;
        snowBlockArray[10][11].left = false;
        snowBlockArray[10][11].fill = false;
        
        snowBlockArray[5][2].fill = false;
        snowBlockArray[5][2].down = false;
        snowBlockArray[5][3].up = false;
        snowBlockArray[5][3].fill = false;
        snowBlockArray[5][3].down = false;
        snowBlockArray[5][4].up = false;
        snowBlockArray[5][4].fill = false;
        
        obs.push(new Obstacle("rock",11,10));
        obs.push(new Obstacle("rock",12,6));
        obs.push(new Obstacle("rock",8,2));
        obs.push(new Obstacle("rock",1,5));
        obs.push(new Obstacle("puf",9,3));
        obs.push(new Obstacle("puf",5,2));
        obs.push(new Obstacle("puf",5,3));
        obs.push(new Obstacle("puf",3,9));
        obs.push(new Obstacle("drg",9,11));
        obs.push(new Obstacle("drg",10,3));
        obs.push(new Obstacle("drg",4,9));
      break;
      case 8:
        snowBlockArray[9][4].fill = false;
        snowBlockArray[9][4].right = false;
        snowBlockArray[10][4].left = false;
        snowBlockArray[10][4].fill = false;
        snowBlockArray[10][4].right = false;
        snowBlockArray[11][4].left = false;
        snowBlockArray[11][4].fill = false;
        
        snowBlockArray[9][10].fill = false;
        snowBlockArray[9][10].right = false;
        snowBlockArray[10][10].left = false;
        snowBlockArray[10][10].fill = false;
        snowBlockArray[10][10].right = false;
        snowBlockArray[11][10].left = false;
        snowBlockArray[11][10].fill = false;
        
        snowBlockArray[4][12].fill = false;
        snowBlockArray[4][12].right = false;
        snowBlockArray[5][12].left = false;
        snowBlockArray[5][12].fill = false;
        snowBlockArray[5][12].right = false;
        snowBlockArray[6][12].left = false;
        snowBlockArray[6][12].fill = false;
        
        snowBlockArray[9][4].fill = false;
        snowBlockArray[9][4].right = false;
        snowBlockArray[10][4].left = false;
        snowBlockArray[10][4].fill = false;
        snowBlockArray[10][4].right = false;
        snowBlockArray[11][4].left = false;
        snowBlockArray[11][4].fill = false;
        
        snowBlockArray[1][3].fill = false;
        snowBlockArray[1][3].right = false;
        snowBlockArray[2][3].left = false;
        snowBlockArray[2][3].fill = false;
        snowBlockArray[2][3].right = false;
        snowBlockArray[3][3].left = false;
        snowBlockArray[3][3].fill = false;
        
        snowBlockArray[5][3].fill = false;
        snowBlockArray[5][3].down = false;
        snowBlockArray[5][4].up = false;
        snowBlockArray[5][4].fill = false;
        snowBlockArray[5][4].down = false;
        snowBlockArray[5][5].up = false;
        snowBlockArray[5][5].fill = false;
        
        snowBlockArray[2][8].fill = false;
        snowBlockArray[2][8].down = false;
        snowBlockArray[2][9].up = false;
        snowBlockArray[2][9].fill = false;
        snowBlockArray[2][9].down = false;
        snowBlockArray[2][10].up = false;
        snowBlockArray[2][10].fill = false;
        
        obs.push(new Obstacle("rock",5,9));
        obs.push(new Obstacle("rock",7,11));
        obs.push(new Obstacle("rock",3,5));
        obs.push(new Obstacle("rock",12,6));
        obs.push(new Obstacle("puf",5,3));
        obs.push(new Obstacle("puf",9,4));
        obs.push(new Obstacle("puf",6,12));
        obs.push(new Obstacle("drg",3,3));
        obs.push(new Obstacle("drg",2,9));
        obs.push(new Obstacle("drg",9,10));
      break;
      case 9:
        snowBlockArray[10][11].fill = false;
        snowBlockArray[10][11].right = false;
        snowBlockArray[11][11].left = false;
        snowBlockArray[11][11].fill = false;
        snowBlockArray[11][11].right = false;
        snowBlockArray[12][11].left = false;
        snowBlockArray[12][11].fill = false;
        
        snowBlockArray[1][11].fill = false;
        snowBlockArray[1][11].right = false;
        snowBlockArray[2][11].left = false;
        snowBlockArray[2][11].fill = false;
        snowBlockArray[2][11].right = false;
        snowBlockArray[3][11].left = false;
        snowBlockArray[3][11].fill = false;
        
        snowBlockArray[5][9].fill = false;
        snowBlockArray[5][9].right = false;
        snowBlockArray[6][9].left = false;
        snowBlockArray[6][9].fill = false;
        snowBlockArray[6][9].right = false;
        snowBlockArray[7][9].left = false;
        snowBlockArray[7][9].fill = false;
        
        snowBlockArray[8][5].fill = false;
        snowBlockArray[8][5].right = false;
        snowBlockArray[9][5].left = false;
        snowBlockArray[9][5].fill = false;
        snowBlockArray[9][5].right = false;
        snowBlockArray[10][5].left = false;
        snowBlockArray[10][5].fill = false;
        
        snowBlockArray[12][5].fill = false;
        snowBlockArray[12][5].down = false;
        snowBlockArray[12][6].up = false;
        snowBlockArray[12][6].fill = false;
        snowBlockArray[12][6].down = false;
        snowBlockArray[12][7].up = false;
        snowBlockArray[12][7].fill = false;
        
        snowBlockArray[4][3].fill = false;
        snowBlockArray[4][3].down = false;
        snowBlockArray[4][4].up = false;
        snowBlockArray[4][4].fill = false;
        snowBlockArray[4][4].down = false;
        snowBlockArray[4][5].up = false;
        snowBlockArray[4][5].fill = false;
        
        obs.push(new Obstacle("rock",9,7));
        obs.push(new Obstacle("rock",1,7));
        obs.push(new Obstacle("rock",5,11));
        obs.push(new Obstacle("rock",7,2));
        obs.push(new Obstacle("rock",11,3));
        obs.push(new Obstacle("puf",4,3));
        obs.push(new Obstacle("puf",8,5));
        obs.push(new Obstacle("puf",12,5));
        obs.push(new Obstacle("drg",7,9));
        obs.push(new Obstacle("drg",3,11));
        obs.push(new Obstacle("drg",10,11));
      break;
      case 10:
        snowBlockArray[7][4].fill = false;
        snowBlockArray[7][4].right = false;
        snowBlockArray[8][4].left = false;
        snowBlockArray[8][4].fill = false;
        snowBlockArray[8][4].right = false;
        snowBlockArray[9][4].left = false;
        snowBlockArray[9][4].fill = false;
        
        snowBlockArray[3][10].fill = false;
        snowBlockArray[3][10].right = false;
        snowBlockArray[4][10].left = false;
        snowBlockArray[4][10].fill = false;
        snowBlockArray[4][10].right = false;
        snowBlockArray[5][10].left = false;
        snowBlockArray[5][10].fill = false;
        
        snowBlockArray[9][11].fill = false;
        snowBlockArray[9][11].right = false;
        snowBlockArray[10][11].left = false;
        snowBlockArray[10][11].fill = false;
        snowBlockArray[10][11].right = false;
        snowBlockArray[11][11].left = false;
        snowBlockArray[11][11].fill = false;
        
        snowBlockArray[3][5].fill = false;
        snowBlockArray[3][5].down = false;
        snowBlockArray[3][6].up = false;
        snowBlockArray[3][6].fill = false;
        snowBlockArray[3][6].down = false;
        snowBlockArray[3][7].up = false;
        snowBlockArray[3][7].fill = false;
        
        snowBlockArray[9][6].fill = false;
        snowBlockArray[9][6].down = false;
        snowBlockArray[9][7].up = false;
        snowBlockArray[9][7].fill = false;
        snowBlockArray[9][7].down = false;
        snowBlockArray[9][8].up = false;
        snowBlockArray[9][8].fill = false;
        
        snowBlockArray[11][2].fill = false;
        snowBlockArray[11][2].down = false;
        snowBlockArray[11][3].up = false;
        snowBlockArray[11][3].fill = false;
        snowBlockArray[11][3].down = false;
        snowBlockArray[11][4].up = false;
        snowBlockArray[11][4].fill = false;
        
        obs.push(new Obstacle("rock",11,8));
        obs.push(new Obstacle("rock",3,3));
        obs.push(new Obstacle("rock",1,7));
        obs.push(new Obstacle("rock",7,11));
        obs.push(new Obstacle("puf",9,11));
        obs.push(new Obstacle("puf",11,3));
        obs.push(new Obstacle("drg",9,7));
        obs.push(new Obstacle("drg",7,4));
        obs.push(new Obstacle("drg",3,5));
        obs.push(new Obstacle("drg",5,10));
      break;
      case 11:
        snowBlockArray[3][4].fill = false;
        snowBlockArray[3][4].right = false;
        snowBlockArray[4][4].left = false;
        snowBlockArray[4][4].fill = false;
        snowBlockArray[4][4].right = false;
        snowBlockArray[5][4].left = false;
        snowBlockArray[5][4].fill = false;
        
        snowBlockArray[1][6].fill = false;
        snowBlockArray[1][6].right = false;
        snowBlockArray[2][6].left = false;
        snowBlockArray[2][6].fill = false;
        snowBlockArray[2][6].right = false;
        snowBlockArray[3][6].left = false;
        snowBlockArray[3][6].fill = false;
        
        snowBlockArray[2][9].fill = false;
        snowBlockArray[2][9].down = false;
        snowBlockArray[2][10].up = false;
        snowBlockArray[2][10].fill = false;
        snowBlockArray[2][10].down = false;
        snowBlockArray[2][11].up = false;
        snowBlockArray[2][11].fill = false;
        
        snowBlockArray[9][4].fill = false;
        snowBlockArray[9][4].down = false;
        snowBlockArray[9][5].up = false;
        snowBlockArray[9][5].fill = false;
        snowBlockArray[9][5].down = false;
        snowBlockArray[9][6].up = false;
        snowBlockArray[9][6].fill = false;
        
        snowBlockArray[12][6].fill = false;
        snowBlockArray[12][6].down = false;
        snowBlockArray[12][7].up = false;
        snowBlockArray[12][7].fill = false;
        snowBlockArray[12][7].down = false;
        snowBlockArray[12][8].up = false;
        snowBlockArray[12][8].fill = false;
        
        obs.push(new Obstacle("rock",2,3));
        obs.push(new Obstacle("rock",10,3));
        obs.push(new Obstacle("rock",11,10));
        obs.push(new Obstacle("rock",5,10));
        obs.push(new Obstacle("puf",3,6));
        obs.push(new Obstacle("drg",5,4));
        obs.push(new Obstacle("drg",9,5));
        obs.push(new Obstacle("drg",12,7));
        obs.push(new Obstacle("drg",2,9));
      break;
      case 12:
        snowBlockArray[2][4].fill = false;
        snowBlockArray[2][4].right = false;
        snowBlockArray[3][4].left = false;
        snowBlockArray[3][4].fill = false;
        snowBlockArray[3][4].right = false;
        snowBlockArray[4][4].left = false;
        snowBlockArray[4][4].fill = false;
        
        snowBlockArray[7][5].fill = false;
        snowBlockArray[7][5].right = false;
        snowBlockArray[8][5].left = false;
        snowBlockArray[8][5].fill = false;
        snowBlockArray[8][5].right = false;
        snowBlockArray[9][5].left = false;
        snowBlockArray[9][5].fill = false;
        
        snowBlockArray[9][10].fill = false;
        snowBlockArray[9][10].right = false;
        snowBlockArray[10][10].left = false;
        snowBlockArray[10][10].fill = false;
        snowBlockArray[10][10].right = false;
        snowBlockArray[11][10].left = false;
        snowBlockArray[11][10].fill = false;
        
        snowBlockArray[4][11].fill = false;
        snowBlockArray[4][11].right = false;
        snowBlockArray[5][11].left = false;
        snowBlockArray[5][11].fill = false;
        snowBlockArray[5][11].right = false;
        snowBlockArray[6][11].left = false;
        snowBlockArray[6][11].fill = false;
        
        snowBlockArray[12][4].fill = false;
        snowBlockArray[12][4].down = false;
        snowBlockArray[12][5].up = false;
        snowBlockArray[12][5].fill = false;
        snowBlockArray[12][5].down = false;
        snowBlockArray[12][6].up = false;
        snowBlockArray[12][6].fill = false;
        
        obs.push(new Obstacle("rock",8,3));
        obs.push(new Obstacle("rock",10,7));
        obs.push(new Obstacle("rock",1,8));
        obs.push(new Obstacle("rock",9,11));
        obs.push(new Obstacle("puf",8,5));
        obs.push(new Obstacle("puf",12,5));
        obs.push(new Obstacle("drg",3,4));
        obs.push(new Obstacle("drg",10,10));
        obs.push(new Obstacle("drg",5,11));
      break;
      case 13:
        snowBlockArray[3][5].fill = false;
        snowBlockArray[3][5].down = false;
        snowBlockArray[3][6].up = false;
        snowBlockArray[3][6].fill = false;
        snowBlockArray[3][6].down = false;
        snowBlockArray[3][7].up = false;
        snowBlockArray[3][7].fill = false;

        snowBlockArray[11][6].fill = false;
        snowBlockArray[11][6].down = false;
        snowBlockArray[11][7].up = false;
        snowBlockArray[11][7].fill = false;
        snowBlockArray[11][7].down = false;
        snowBlockArray[11][8].up = false;
        snowBlockArray[11][8].fill = false;
        
        snowBlockArray[5][10].fill = false;
        snowBlockArray[5][10].right = false;
        snowBlockArray[6][10].left = false;
        snowBlockArray[6][10].fill = false;
        snowBlockArray[6][10].right = false;
        snowBlockArray[7][10].left = false;
        snowBlockArray[7][10].fill = false;
        
        snowBlockArray[9][3].fill = false;
        snowBlockArray[9][3].right = false;
        snowBlockArray[10][3].left = false;
        snowBlockArray[10][3].fill = false;
        snowBlockArray[10][3].right = false;
        snowBlockArray[11][3].left = false;
        snowBlockArray[11][3].fill = false;
        
        snowBlockArray[10][12].fill = false;
        snowBlockArray[10][12].right = false;
        snowBlockArray[11][12].left = false;
        snowBlockArray[11][12].fill = false;
        snowBlockArray[11][12].right = false;
        snowBlockArray[12][12].left = false;
        snowBlockArray[12][12].fill = false;
        
        obs.push(new Obstacle("rock",1,3));
        obs.push(new Obstacle("rock",8,2));
        obs.push(new Obstacle("rock",2,10));
        obs.push(new Obstacle("rock",9,11));
        obs.push(new Obstacle("puf",3,6));
        obs.push(new Obstacle("puf",11,6));
        obs.push(new Obstacle("puf",10,3));
        obs.push(new Obstacle("drg",7,10));
        obs.push(new Obstacle("drg",10,12));
      break;
      case 14:
        snowBlockArray[3][3].fill = false;
        snowBlockArray[3][3].down = false;
        snowBlockArray[3][4].up = false;
        snowBlockArray[3][4].fill = false;
        snowBlockArray[3][4].down = false;
        snowBlockArray[3][5].up = false;
        snowBlockArray[3][5].fill = false;

        snowBlockArray[12][4].fill = false;
        snowBlockArray[12][4].down = false;
        snowBlockArray[12][5].up = false;
        snowBlockArray[12][5].fill = false;
        snowBlockArray[12][5].down = false;
        snowBlockArray[12][6].up = false;
        snowBlockArray[12][6].fill = false;
        
        snowBlockArray[9][8].fill = false;
        snowBlockArray[9][8].right = false;
        snowBlockArray[10][8].left = false;
        snowBlockArray[10][8].fill = false;
        snowBlockArray[10][8].right = false;
        snowBlockArray[11][8].left = false;
        snowBlockArray[11][8].fill = false;
        
        snowBlockArray[3][10].fill = false;
        snowBlockArray[3][10].right = false;
        snowBlockArray[4][10].left = false;
        snowBlockArray[4][10].fill = false;
        snowBlockArray[4][10].right = false;
        snowBlockArray[5][10].left = false;
        snowBlockArray[5][10].fill = false;
        
        snowBlockArray[7][3].fill = false;
        snowBlockArray[7][3].right = false;
        snowBlockArray[8][3].left = false;
        snowBlockArray[8][3].fill = false;
        snowBlockArray[8][3].right = false;
        snowBlockArray[9][3].left = false;
        snowBlockArray[9][3].fill = false;
        
        obs.push(new Obstacle("rock",1,3));
        obs.push(new Obstacle("rock",2,8));
        obs.push(new Obstacle("rock",8,11));
        obs.push(new Obstacle("rock",10,4));
        obs.push(new Obstacle("puf",12,4));
        obs.push(new Obstacle("puf",7,3));
        obs.push(new Obstacle("drg",3,3));
        obs.push(new Obstacle("drg",5,10));
        obs.push(new Obstacle("drg",9,8));
      break;
      case 15:
        snowBlockArray[5][9].fill = false;
        snowBlockArray[5][9].down = false;
        snowBlockArray[5][10].up = false;
        snowBlockArray[5][10].fill = false;
        snowBlockArray[5][10].down = false;
        snowBlockArray[5][11].up = false;
        snowBlockArray[5][11].fill = false;

        snowBlockArray[7][9].fill = false;
        snowBlockArray[7][9].down = false;
        snowBlockArray[7][10].up = false;
        snowBlockArray[7][10].fill = false;
        snowBlockArray[7][10].down = false;
        snowBlockArray[7][11].up = false;
        snowBlockArray[7][11].fill = false;

        snowBlockArray[5][3].fill = false;
        snowBlockArray[5][3].down = false;
        snowBlockArray[5][4].up = false;
        snowBlockArray[5][4].fill = false;
        snowBlockArray[5][4].down = false;
        snowBlockArray[5][5].up = false;
        snowBlockArray[5][5].fill = false;
        
        snowBlockArray[1][7].fill = false;
        snowBlockArray[1][7].right = false;
        snowBlockArray[2][7].left = false;
        snowBlockArray[2][7].fill = false;
        snowBlockArray[2][7].right = false;
        snowBlockArray[3][7].left = false;
        snowBlockArray[3][7].fill = false;
        
        snowBlockArray[9][6].fill = false;
        snowBlockArray[9][6].right = false;
        snowBlockArray[10][6].left = false;
        snowBlockArray[10][6].fill = false;
        snowBlockArray[10][6].right = false;
        snowBlockArray[11][6].left = false;
        snowBlockArray[11][6].fill = false;
        
        snowBlockArray[10][2].fill = false;
        snowBlockArray[10][2].right = false;
        snowBlockArray[11][2].left = false;
        snowBlockArray[11][2].fill = false;
        snowBlockArray[11][2].right = false;
        snowBlockArray[12][2].left = false;
        snowBlockArray[12][2].fill = false;

        obs.push(new Obstacle("rock",1,5));
        obs.push(new Obstacle("rock",3,11));
        obs.push(new Obstacle("rock",10,10));
        obs.push(new Obstacle("rock",8,3));
        obs.push(new Obstacle("puf",5,4));
        obs.push(new Obstacle("puf",10,2));
        obs.push(new Obstacle("puf",9,6));
        obs.push(new Obstacle("drg",3,7));
        obs.push(new Obstacle("drg",5,9));
        obs.push(new Obstacle("drg",7,9));
      break;
      case 16:
        snowBlockArray[9][3].fill = false;
        snowBlockArray[9][3].right = false;
        snowBlockArray[10][3].left = false;
        snowBlockArray[10][3].fill = false;
        snowBlockArray[10][3].right = false;
        snowBlockArray[11][3].left = false;
        snowBlockArray[11][3].fill = false;
        
        snowBlockArray[2][9].fill = false;
        snowBlockArray[2][9].right = false;
        snowBlockArray[3][9].left = false;
        snowBlockArray[3][9].fill = false;
        snowBlockArray[3][9].right = false;
        snowBlockArray[4][9].left = false;
        snowBlockArray[4][9].fill = false;
        
        snowBlockArray[8][11].fill = false;
        snowBlockArray[8][11].right = false;
        snowBlockArray[9][11].left = false;
        snowBlockArray[9][11].fill = false;
        snowBlockArray[9][11].right = false;
        snowBlockArray[10][11].left = false;
        snowBlockArray[10][11].fill = false;
        
        snowBlockArray[5][2].fill = false;
        snowBlockArray[5][2].down = false;
        snowBlockArray[5][3].up = false;
        snowBlockArray[5][3].fill = false;
        snowBlockArray[5][3].down = false;
        snowBlockArray[5][4].up = false;
        snowBlockArray[5][4].fill = false;
        
        obs.push(new Obstacle("rock",11,10));
        obs.push(new Obstacle("rock",12,6));
        obs.push(new Obstacle("rock",8,2));
        obs.push(new Obstacle("rock",1,5));
        obs.push(new Obstacle("puf",9,3));
        obs.push(new Obstacle("puf",5,2));
        obs.push(new Obstacle("puf",5,3));
        obs.push(new Obstacle("puf",3,9));
        obs.push(new Obstacle("puf",6,7));
        obs.push(new Obstacle("drg",9,11));
        obs.push(new Obstacle("drg",10,3));
        obs.push(new Obstacle("drg",4,9));
      break;
      default:
        //level 1 code
        snowBlockArray[1][2].fill = false;
        snowBlockArray[1][2].down = false;
        snowBlockArray[1][3].up = false;
        snowBlockArray[1][3].fill = false;
        snowBlockArray[1][3].down = false;
        snowBlockArray[1][4].up = false;
        snowBlockArray[1][4].fill = false;
        snowBlockArray[1][4].down = false;
        snowBlockArray[1][5].up = false;
        snowBlockArray[1][5].fill = false;
        snowBlockArray[1][5].down = false;
        snowBlockArray[1][6].up = false;
        snowBlockArray[1][6].fill = false;
      
        snowBlockArray[9][2].fill = false;
        snowBlockArray[9][2].right = false;
        snowBlockArray[10][2].left = false;
        snowBlockArray[10][2].fill = false;
        snowBlockArray[10][2].right = false;
        snowBlockArray[11][2].left = false;
        snowBlockArray[11][2].fill = false;
        snowBlockArray[11][2].right = false;
        snowBlockArray[12][2].left = false;
        snowBlockArray[12][2].fill = false;
      
        snowBlockArray[2][10].fill = false;
        snowBlockArray[2][10].right = false;
        snowBlockArray[3][10].left = false;
        snowBlockArray[3][10].fill = false;
        snowBlockArray[3][10].right = false;
        snowBlockArray[4][10].left = false;
        snowBlockArray[4][10].fill = false;
        snowBlockArray[4][10].right = false;
        snowBlockArray[5][10].left = false;
        snowBlockArray[5][10].fill = false;
            
               
        snowBlockArray[9][9].fill = false;
        snowBlockArray[9][9].down = false;
        snowBlockArray[9][10].up = false;
        snowBlockArray[9][10].fill = false;
        snowBlockArray[9][10].down = false;
        snowBlockArray[9][11].up = false;
        snowBlockArray[9][11].fill = false;
        snowBlockArray[9][11].down = false;
        snowBlockArray[9][12].up = false;
        snowBlockArray[9][12].fill = false;
        snowBlockArray[9][12].down = false;
        snowBlockArray[9][13].up = false;
        snowBlockArray[9][13].fill = false;
        
        obs.push(new Obstacle("rock",4,3));
        obs.push(new Obstacle("rock",10,9));
        obs.push(new Obstacle("rock",3,11));
        obs.push(new Obstacle("puf",1,3));
        obs.push(new Obstacle("puf",10,2));
        obs.push(new Obstacle("puf",9,11));
        obs.push(new Obstacle("drg",4,10));
        //end level 1 code
        break;
    }
    for(let i = 0; i < exp.length; i++){
      maze[exp[i].x][exp[i].y] = true;
    }
  }
}
