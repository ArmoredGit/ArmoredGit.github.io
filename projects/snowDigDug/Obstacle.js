class Obstacle {
  //Obstacles include the two enemy types and rocks
  //all Obstacles havwe a move and show
  //move includes wandering, running away, and chasing the player
  //types are rock, drg, & puf
  //Still need to add rockKills++; when rock kills an enemy
  constructor(type, x, y) {
    this.type = type;
    if (type == null) {
      this.type = "rock";
    }
    this.x = x;
    this.y = y;
    this.special = false;
    this.tic = 0;
    this.dir = 2;
    this.id = random();
    this.dead = false;
    this.wander = true;
    this.burrough = false;
    this.inflate = 0;
    this.distUp = 0;
    this.distRight = 0;
    this.distDown = 0;
    this.distLeft = 0;
    this.dist = 0;
    this.kills = 0;
  }

  move() {
    if (this.type == "drg" || this.type == "puf") {
      if(this.inflate > 0){
        this.inflate--;
        if(this.inflate > 100){
          this.dead = true;
          if(abs((player1.y-this.y*1.0)) > abs((player1.x-this.x))){
            if(levels.level > 12){
              scoreBoard.add((this.type == "drg")?500:500);
            } else if(levels.level > 8){
              scoreBoard.add((this.type == "drg")?400:400);
            } else if(levels.level > 4){
              scoreBoard.add((this.type == "drg")?300:300);
            } else { 
              scoreBoard.add((this.type == "drg")?200:200);
            }
          } else {
            if(levels.level > 12){
              scoreBoard.add((this.type == "drg")?1000:500);
            } else if(levels.level > 8){
              scoreBoard.add((this.type == "drg")?800:400);
            } else if(levels.level > 4){
              scoreBoard.add((this.type == "drg")?600:300);
            } else { 
              scoreBoard.add((this.type == "drg")?400:200);
            }
          }
        }
      } else {
        //edge limits 
        if(this.x > 13.12) {
          this.dir = 4;
        } else if(this.x < -0.12) {
          this.dir = 2;
        } else if(this.y < -0.12) {
          this.dir = 3;
        } else if(this.y > 14.12) {
          this.dir = 1;
        }
        
        if(this.wander){
          //changing direction
          if(round(this.y * 100) % 100 == 0 && round(this.x * 100) % 100 == 0){
            this.dir--;
            while(this.dir == 0){
              this.dir = 4;
            }
            while(true){
              if(this.dir == 1 && snowBlockArray[round(this.x)][round(this.y)].up == true){
                this.dir++;
              } else if(this.dir == 3 && snowBlockArray[round(this.x)][round(this.y)].down == true){
                this.dir++;
              } else if(this.dir == 2 && snowBlockArray[round(this.x)][round(this.y)].right == true){
                this.dir++;
              } else if(this.dir == 4 && snowBlockArray[round(this.x)][round(this.y)].left == true){
                this.dir++;
              } else {
                break;
              }
              while(this.dir > 4){
                this.dir -= 4;
              }
            }
          }
          while(this.dir > 4){
            this.dir -= 4;
          }
        } else {
          if(this.burrough){
            
          } else {
            if(round(this.y * 100) % 100 == 0 && round(this.x * 100) % 100 == 0){
              maze = [];
              for(let i = 0; i < 14;i++){
                maze[i] = [];
                for(let j = 0; j < 15;j++){
                  maze[i][j] = false;
                }
              }
              for(let i = 0; i < 14;i++){
                for(let j = 0; j < 15;j++){
                  maze[i][j] = !snowBlockArray[i][j].fill;
                }
              }
              maze[round(this.x)][round(this.y)] = false;
              
              this.distUp = 0;
              this.distRight = 0;
              this.distDown = 0;
              this.distLeft = 0;
              this.dist = 0;
              
              if(snowBlockArray[round(this.x)][round(this.y)].up == false && this.y > 0 && this.dir != 3){
                if(this.mazeDir(round(this.x),round(this.y - 1))){
                  this.distUp = this.dist;
                } else {
                  this.distUp = 1000;
                }
              } else {
                this.distUp = 1000;
              }
              
              maze = [];
              for(let i = 0; i < 14;i++){
                maze[i] = [];
                for(let j = 0; j < 15;j++){
                  maze[i][j] = false;
                }
              }
              for(let i = 0; i < 14;i++){
                for(let j = 0; j < 15;j++){
                  maze[i][j] = !snowBlockArray[i][j].fill;
                }
              }
              maze[round(this.x)][round(this.y)] = false;
              this.dist = 0;
              if(snowBlockArray[round(this.x)][round(this.y)].right == false && this.x < 13 && this.dir != 4) {
                if(this.mazeDir(round(this.x + 1),round(this.y))){
                  this.distRight = this.dist;
                } else {
                  this.distRight = 1000;
                }
              } else {
                this.distRight = 1000;
              }
              
              maze = [];
              for(let i = 0; i < 14;i++){
                maze[i] = [];
                for(let j = 0; j < 15;j++){
                  maze[i][j] = false;
                }
              }
              for(let i = 0; i < 14;i++){
                for(let j = 0; j < 15;j++){
                  maze[i][j] = !snowBlockArray[i][j].fill;
                }
              }
              maze[round(this.x)][round(this.y)] = false;
              this.dist = 0;
              if(snowBlockArray[round(this.x)][round(this.y)].down == false && this.y < 14 && this.dir != 1) {
                if(this.mazeDir(round(this.x),round(this.y + 1))){
                  this.distDown = this.dist;
                } else {
                  this.distDown = 1000;
                }
              } else {
                this.distDown = 1000;
              }
              
              maze = [];
              for(let i = 0; i < 14;i++){
                maze[i] = [];
                for(let j = 0; j < 15;j++){
                  maze[i][j] = false;
                }
              }
              for(let i = 0; i < 14;i++){
                for(let j = 0; j < 15;j++){
                  maze[i][j] = !snowBlockArray[i][j].fill;
                }
              }
              maze[round(this.x)][round(this.y)] = false;
              this.dist = 0;
              if(snowBlockArray[round(this.x)][round(this.y)].left == false && this.x > 0 && this.dir != 2) {
                if(this.mazeDir(round(this.x - 1),round(this.y))){
                  this.distLeft = this.dist;
                } else {
                  this.distLeft = 1000;
                }
              } else {
                this.distLeft = 1000;
              }
              
              if(this.distLeft < this.distRight && this.distLeft < this.distUp && this.distLeft < this.distDown){
                this.dir = 4;
              } else if(this.distLeft > this.distRight && this.distRight < this.distUp && this.distRight < this.distDown){
                this.dir = 2;
              } else if(this.distUp < this.distRight && this.distLeft > this.distUp && this.distUp < this.distDown){
                this.dir = 1;
              } else if(this.distDown <= this.distRight && this.distDown <= this.distUp && this.distLeft >= this.distDown){
                this.dir = 3;
              }
              while(true){
                if(this.dir == 1 && snowBlockArray[round(this.x)][round(this.y)].up == true){
                  this.dir++;
                } else if(this.dir == 3 && snowBlockArray[round(this.x)][round(this.y)].down == true){
                  this.dir++;
                } else if(this.dir == 2 && snowBlockArray[round(this.x)][round(this.y)].right == true){
                  this.dir++;
                } else if(this.dir == 4 && snowBlockArray[round(this.x)][round(this.y)].left == true){
                  this.dir++;
                } else {
                  break;
                }
                while(this.dir > 4){
                  this.dir -= 4;
                }
              }
            }
          }
        }
        
        //finding if in player network
        let j = 0;
        for(let i = 0; i < exp.length; i++){
          if(exp[i].x == round(this.x) && exp[i].y == round(this.y)){
            j++;
          }
        }
        if(j != 0){
          this.wander = false;
          this.burrough = false;
        }
        
        //direction is 1 == up,2 == right,3 == down,4 == left
        if (this.dir == 1) {
          if (round((this.x * 100)) % 100 == 0) {
            this.y -= 0.05;
          } else {
            if ((this.x * 100) % 100 > 50) {
              this.x += 0.1;
            } else {
              this.x -= 0.1;
            }
          }
        } else if (this.dir == 2) {
          if (round((this.y * 100)) % 100 == 0) {
            this.x += 0.05;
          } else {
            if ((this.y * 100) % 100 > 50) {
              this.y += 0.1;
            } else {
              this.y -= 0.1;
            }
          }
        } else if (this.dir == 3) {
          if (round((this.x * 100)) % 100 == 0) {
            this.y += 0.05;
          } else {
            if ((this.x * 100) % 100 > 50) {
              this.x += 0.1;
            } else {
              this.x -= 0.1;
            }
          }
        } else if (this.dir == 4) {
          if (round((this.y * 100)) % 100 == 0) {
            this.x -= 0.05;
          } else {
            if ((this.y * 100) % 100 > 50) {
              this.y += 0.1;
            } else {
              this.y -= 0.1;
            }
          }
        }
        
        //rock limits
        for(let i = obs.length - 1; i >= 0; i--){
          if(this.dir == 1){
            if(dist(obs[i].x,obs[i].y,this.x,this.y - 1) < 0.1 && !obs[i].special && obs[i].type == "rock"){
              this.dir = 3;
            }
          } else if(this.dir == 2){
            if(dist(obs[i].x,obs[i].y,this.x + 1,this.y) < 0.1 && !obs[i].special && obs[i].type == "rock"){
              this.dir = 4;
            }
          } else if(this.dir == 3){
            if(dist(obs[i].x,obs[i].y,this.x,this.y + 1) < 0.1 && !obs[i].special && obs[i].type == "rock"){
              this.dir = 1;
            }
          } else if(this.dir == 4){
            if(dist(obs[i].x,obs[i].y,this.x - 1,this.y) < 0.1 && !obs[i].special && obs[i].type == "rock"){
              this.dir = 2;
            }
          }
        }
        
        this.tic++; // tic increase 
        if(this.tic > 130){
          this.tic = 0;
        }
      }
    } else if (this.type == "rock") { // rocks, yeah that
      if (this.special == false) {
        if (this.y < 13) {
          if (!snowBlockArray[round(this.x)][round(this.y + 1)].fill && dist(this.x, (this.y + 1), player1.x, player1.y) > 0.9) {
            this.special = true;
            this.tic = 0;
          }
        }
      } else if (this.special) {
        if (this.tic > 21) { //keep time odd or program breaks
          this.y+= 0.1;
          if (this.y < 14) {
            if (round(this.y * 100) % 100 == 50) {
              snowBlockArray[round(this.x)][floor(this.y)].down = false;
              snowBlockArray[round(this.x)][ceil(this.y)].up = false;
            }
            if (snowBlockArray[floor(this.x)][floor(this.y + 1)].fill) {
              this.y = floor(this.y);
              this.special = false;
              this.dead = true;
              rocksDropped++;
            }
          } else if (floor(this.y) == 14) {
            this.special = false;
            this.dead = true;
            this.y = 14;
          }
        } else {
          snowBlockArray[round(this.x)][round(this.y)].fill = false;
          this.tic++;
          if (round(this.tic)%2 == 0) {
            this.x+=0.02;
            this.y+=0.02;
          } else {
            this.x-=0.02;
            this.y-=0.02;
          }
        }
      }
    }
  }

  show() {
    if (this.type == "drg") {
      if (snowBlockArray[round(this.x)][round(this.y)].fill) {
        fill("green");
        circle((width / 18 * this.x) + (height / 36), (2 * height / 18) + (height / 18 * this.y) + (width / 36), (3 * width / 144));
      } else {
        fill("green");
        rect((width / 18 * this.x) + (height / 144), (2 * height / 18) + (height / 18 * this.y) + (width / 144), (6 * width / 144), (6 * height / 144));
      }
      if(this.tic > 100){
        fill("orange");
        if(this.dir == 1){
          rect((width / 18 * this.x) + (height / 144), (2 * height / 18) + (height / 18 * this.y) + (width / 144) - (6 * width / 144), (6 * width / 144), (6 * height / 144));
        } else if(this.dir == 2){
          rect((width / 18 * this.x) + (height / 144) + (6 * width / 144), (2 * height / 18) + (height / 18 * this.y) + (width / 144), (6 * width / 144), (6 * height / 144));
        } else if(this.dir == 3){
          rect((width / 18 * this.x) + (height / 144), (2 * height / 18) + (height / 18 * this.y) + (width / 144) + (6 * width / 144), (6 * width / 144), (6 * height / 144));
        } else if(this.dir == 4){
          rect((width / 18 * this.x) + (height / 144) - (6 * width / 144), (2 * height / 18) + (height / 18 * this.y) + (width / 144), (6 * width / 144), (6 * height / 144));
        }
      }
    } else if (this.type == "puf") {
      if (snowBlockArray[round(this.x)][round(this.y)].fill) {
        fill("red");
        circle((width / 18 * this.x) + (height / 36), (2 * height / 18) + (height / 18 * this.y) + (width / 36), (3 * width / 144));
      } else {
        fill("red");
        rect((width / 18 * this.x) + (height / 144), (2 * height / 18) + (height / 18 * this.y) + (width / 144), (6 * width / 144), (6 * height / 144));
      }
    } else if (this.type == "rock") {
      fill("grey");
      if (this.special) {
        fill(255);
      }
      rect((width / 18 * this.x) + (height / 144), (2 * height / 18) + (height / 18 * this.y) + (width / 144), (6 * width / 144), (6 * height / 144));
    }
  }

  kill() {//kills the player if they should be dead
    if (this.type == "drg") {
      if(dist(player1.x,player1.y,this.x,this.y) < 0.9){
        player1.reset();
      }
      if(this.tic > 100){
        if(this.dir == 1){
          if(dist(player1.x,player1.y,this.x,this.y - 1) < 0.9){
            player1.reset();
          }
        } else if(this.dir == 2){
          if(dist(player1.x,player1.y,this.x + 1,this.y) < 0.9){
            player1.reset();
          }
        } else if(this.dir == 3){
          if(dist(player1.x,player1.y,this.x,this.y + 1) < 0.9){
            player1.reset();
          }
        } else if(this.dir == 4){
          if(dist(player1.x,player1.y,this.x - 1,this.y) < 0.9){
            player1.reset();
          }
        }
      }
    } else if (this.type == "puf") {
      if(dist(player1.x,player1.y,this.x,this.y) < 0.9){
        player1.reset();
      }
    } else if (this.type == "rock") {
      if(dist(player1.x,player1.y,this.x,this.y) < 0.9 && this.special){
        player1.reset();
      }
      for(let i = obs.length - 1; i >= 0; i--){
        if(!obs[i].equals(this.id)){
          if(dist(obs[i].x,obs[i].y,this.x,this.y) < 0.9 && this.special){
            obs.splice(i,1);
            this.kills++;
            if(round(this.kills)==1){
              scoreBoard.add(1000);
            } else if(round(this.kills)==2){
              scoreBoard.add(1000);
            } else if(round(this.kills)>=3){
              scoreBoard.add(2000);
            }
          }
        }
      }
    }
  }
  
  equals(comp){
    return (this.id == comp);
  }
  
  mazeDir(x,y){
    if(round(x) > 13 || round(x) < 0 || round(y) < 0 || round(y) > 14){
      return false;
    }
    if(!maze[round(x)][round(y)]){
      return false;
    }
    if(round(x) == round(player1.x) && round(y) == round(player1.y)){
      return true;
    }
    maze[round(x)][round(y)] = false;
    this.dir = 0;
    let difq = abs((player1.y-this.y*1.0)) > abs((player1.x-this.x));
    if(player1.y < this.y && difq){                
      this.dir = 1;              
    } else if(player1.x > this.x && !difq) {             
      this.dir = 2;               
    } else if(player1.y > this.y && difq) {               
      this.dir = 3;              
    } else if(player1.x < this.x && !difq) {              
      this.dir = 4;                
    }                
    switch(round(this.dir)){
      case 1:
        if(!snowBlockArray[round(x)][round(y)].up && round(y) != 0){
          if(maze[round(x)][round(y - 1)]){
            if(this.mazeDir(round(x),round(y - 1))){
              this.dist++;
              print("!");
              return true;
            }
          }
        }
        break;
      case 2:
        if(!snowBlockArray[round(x)][round(y)].right && round(x) != 13){
          if(maze[round(x + 1)][round(y)]){
            if(this.mazeDir(round(x + 1),round(y))){
              this.dist++;
              print("!");
              return true;
            }
          }
        }
        break;
      case 3:
        if(!snowBlockArray[round(x)][round(y)].down && round(y) != 14){
          if(maze[round(x)][round(y + 1)]){
            if(this.mazeDir(round(x),round(y + 1))){
              this.dist++;
              print("!");
              return true;
            }
          }
        }
        break;
      case 4:
        if(!snowBlockArray[round(x)][round(y)].left && round(x) != 0){
          if(maze[round(x - 1)][round(y)]){
            if(this.mazeDir(round(x - 1),round(y))){
              this.dist++;
              print("!");
              return true;
            }
          }
        }
        break;
    }
    
    if(!snowBlockArray[round(x)][round(y)].up && round(y) != 0){
      if(maze[round(x)][round(y - 1)]){
        if(this.mazeDir(round(x),round(y - 1))){
          this.dist++;
          print("!");
          return true;
        }
      }
    }
    
    if(!snowBlockArray[round(x)][round(y)].right && round(x) != 13){
      if(maze[round(x + 1)][round(y)]){
        if(this.mazeDir(round(x + 1),round(y))){
          this.dist++;
          print("!");
          return true;
        }
      }
    }
    
    if(!snowBlockArray[round(x)][round(y)].down && round(y) != 14){
      if(maze[round(x)][round(y + 1)]){
        if(this.mazeDir(round(x),round(y + 1))){
          this.dist++;
          print("!");
          return true;
        }
      }
    }
    
    if(!snowBlockArray[round(x)][round(y)].left && round(x) != 0){
      if(maze[round(x - 1)][round(y)]){
        if(this.mazeDir(round(x - 1),round(y))){
          this.dist++;
          print("!");
          return true;
        }
      }
    }
    return false;
  }
}
