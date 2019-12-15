class SnowBlock {
  constructor(x,y) {
    this.x = x;
    this.y = y;
    this.fill = true;
    this.up = true;
    this.down = true;
    this.left = true;
    this.right = true;
  }
  
  show(){
    if(this.y > 11){
      if(round(levels.level) < 5){
        fill(85, 237, 237);
      } else if(round(levels.level) < 9){
        fill(51, 189, 189);
      } else if(round(levels.level) < 13){
        fill(22, 95, 138);
      } else if(round(levels.level) < 16){
        fill(85, 237, 237);
      }
    } else if(this.y > 7){
      if(round(levels.level) < 5){
        fill(171, 255, 255);
      } else if(round(levels.level) < 9){
        fill(85, 237, 237);
      } else if(round(levels.level) < 13){
        fill(51, 189, 189);
      } else if(round(levels.level) < 16){
        fill(171, 255, 255);
      }
    } else if(this.y > 3){
      if(round(levels.level) < 5){
        fill(214, 255, 255);
      } else if(round(levels.level) < 9){
        fill(171, 255, 255);
      } else if(round(levels.level) < 13){
        fill(85, 237, 237);
      } else if(round(levels.level) < 16){
        fill(214, 255, 255);
      }
    } else{
      if(round(levels.level) < 5){
        fill(255, 255, 255);
      } else if(round(levels.level) < 9){
        fill(214, 255, 255);
      } else if(round(levels.level) < 13){
        fill(171, 255, 255);
      } else if(round(levels.level) < 16){
        fill(255, 255, 255);
      }
    }
    
    if(this.up){
      rect(width / 18 * this.x, (height / 18 * this.y) + (2 * height / 18), width / 18, height / 144);
    }
    
    if(this.down){
      rect(width / 18 * this.x, (height / 18 * this.y) + (2 * height / 18) + (7 * height / 144), width / 18, height / 144);
    }
    
    if(this.left){
      rect(width / 18 * this.x, (height / 18 * this.y) + (2 * height / 18), width / 144, height / 18);
    }
    
    if(this.right){
      rect((width / 18 * this.x) + (7 * width / 144), (height / 18 * this.y) + (2 * height / 18), width / 144, height / 18);
    }
    
    if(this.fill){
      rect(width / 18 * this.x, (height / 18 * this.y) + (2 * height / 18), width / 18, height / 18);
    }
  }
}
