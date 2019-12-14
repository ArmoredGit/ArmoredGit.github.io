//still need to add pumpKills++; for if enemy is killed by player

class Player  {
  constructor(x,y) {
    this.x = x;
    this.y = y;
    this.dir = 1;
    this.lives = 3;
  }
  
  show(){
    fill(0);
    stroke(255);
    rect((width / 18 * this.x) + (height / 144), (2 * height / 18) + (height / 18 * this.y) + (width / 144), (6 * width / 144), (6 * height / 144));
    for(let i = 0; i < round(this.lives); i++){
      rect((width / 18 * i) + (height / 144), (17 * height / 18) + (width / 144), (6 * width / 144), (6 * height / 144));
    }
    stroke(0);
  }
  
  move(direction){
    //direction is 1 == up,2 == right,3 == down,4 == left
    
    //rock limits
    for(let i = obs.length - 1; i >= 0; i--){
      if(direction == 1){
        if(dist(obs[i].x,obs[i].y,this.x,this.y - 1) < 0.1 && !obs[i].special && obs[i].type == "rock"){
          direction = 3;
        }
      } else if(direction == 2){
        if(dist(obs[i].x,obs[i].y,this.x + 1,this.y) < 0.1 && !obs[i].special && obs[i].type == "rock"){
          direction = 4;
        }
      } else if(direction == 3){
        if(dist(obs[i].x,obs[i].y,this.x,this.y + 1) < 0.1 && !obs[i].special && obs[i].type == "rock"){
          direction = 1;
        }
      } else if(direction == 4){
        if(dist(obs[i].x,obs[i].y,this.x - 1,this.y) < 0.1 && !obs[i].special && obs[i].type == "rock"){
          direction = 2;
        }
      }
    }
    
    //actual movement
    if(direction == 1){
      if(round((this.x * 100)) % 100 == 0){
        this.y -= 0.1;
      } else {
        if((this.x * 100) % 100 > 50){
          this.x += 0.1;
        } else {
          this.x -= 0.1;
        }
      }
    } else if(direction == 2){
      if(round((this.y * 100)) % 100 == 0){
        this.x += 0.1;
      } else {
        if((this.y * 100) % 100 > 50){
          this.y += 0.1;
        } else {
          this.y -= 0.1;
        }
      }
    } else if(direction == 3){
      if(round((this.x * 100)) % 100 == 0){
        this.y += 0.1;
      } else {
        if((this.x * 100) % 100 > 50){
          this.x += 0.1;
        } else {
          this.x -= 0.1;
        }
      }
    } else if(direction == 4){
      if(round((this.y * 100)) % 100 == 0){
        this.x -= 0.1;
      } else {
        if((this.y * 100) % 100 > 50){
          this.y += 0.1;
        } else {
          this.y -= 0.1;
        }
      }
    }
    
    //edge limits 
    if(this.x > 13) {
      this.x = 13;
    } else if(this.x < 0) {
      this.x = 0;
    } else if(this.y < 0) {
      this.y = 0;
    } else if(this.y > 14) {
      this.y = 14;
    } 
    
    //romoving snow
    if(round((this.y * 100)) % 100 == 50){
      if(snowBlockArray[round(this.x)][floor(this.y)].fill){
        scoreBoard.add(10);
        exp.push({"x":round(this.x),"y":floor(this.y),});
      }
      if(snowBlockArray[round(this.x)][ceil(this.y)].fill){
        scoreBoard.add(10);
        exp.push({"x":round(this.x),"y":ceil(this.y),});
      }
      snowBlockArray[round(this.x)][floor(this.y)].fill = false;
      snowBlockArray[round(this.x)][floor(this.y)].down = false;
      snowBlockArray[round(this.x)][ceil(this.y)].fill = false;
      snowBlockArray[round(this.x)][ceil(this.y)].up = false;
    } else if(round((this.x * 100)) % 100 == 50){
      if(snowBlockArray[floor(this.x)][round(this.y)].fill){
        scoreBoard.add(10);
        exp.push({"x":floor(this.x),"y":round(this.y),});
      }
      if(snowBlockArray[ceil(this.x)][round(this.y)].fill){
        scoreBoard.add(10);
        exp.push({"x":ceil(this.x),"y":round(this.y),});
      }
      snowBlockArray[floor(this.x)][round(this.y)].fill = false;
      snowBlockArray[floor(this.x)][round(this.y)].right = false;
      snowBlockArray[ceil(this.x)][round(this.y)].fill = false;
      snowBlockArray[ceil(this.x)][round(this.y)].left = false;
    }
    
    //non explored, but visited
    let check = -1;
    for(let i = 0; i < exp.length; i++){
      if(round(this.x) == exp[i].x && round(this.x) == exp[i].x){
        check = 1;
      }
    }
    if(check == 1){
      exp.push({"x":round(this.x),"y":round(this.y),});
    }
    this.dir = direction;
  }
  
  reset(){ //for when player is killed
    this.x = 6;
    this.y = 7;
    this.lives--;
    if(this.lives <= 0) {
      GameEnd()
    }
  }
  
  attack(){ // air pump weapon
    let tx = round(this.x);//the temp pos of air pump weapon 
    let ty = round(this.y);//the temp pos of air pump weapon 
    let fo = -1;
    
    for(let i = 0; i < 4; i++){
      if(this.dir == 1){
        if(snowBlockArray[round(tx)][round(ty)].up){
          break;
        }
        ty--;
      } else if(this.dir == 2){
        if(snowBlockArray[round(tx)][round(ty)].right){
          break;
        }
        tx++;
      } else if(this.dir == 3){
        if(snowBlockArray[round(tx)][round(ty)].down){
          break;
        }
        ty++;
      } else if(this.dir == 4){
        if(snowBlockArray[round(tx)][round(ty)].left){
          break;
        }
        tx--;
      }
      if(tx > 13 || ty > 14 || ty < 0 || tx < 0){
        break;
      }
      if(snowBlockArray[round(tx)][round(ty)].fill){
        break;
      }
      for(let j = 0; j < obs.length; j++){
        if(round(tx) == round(obs[j].x) && round(ty) == round(obs[j].y) && obs[j].type != "rock" && !snowBlockArray[round(tx)][round(ty)].fill){
          fo = j;
          break;
        }
      }
      if(fo != -1){
        break;
      }
    }
    
    if(fo != -1){
      obs[fo].inflate += 3;
      stroke(255);
      strokeWeight(width / 288);
      line((width / 18 * this.x) + (width / 36),(height / 18 * this.y) + (2 * height / 18) + (width / 36),(width / 18 * obs[fo].x) + (width / 36),(height / 18 * obs[fo].y) + (2 * height / 18) + (width / 36));
      strokeWeight(1);
      stroke(0);
    }
  }
}
