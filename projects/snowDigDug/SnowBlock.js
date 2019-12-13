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
      fill(85, 237, 237);
    } else if(this.y > 7){
      fill(171, 255, 255);
    } else if(this.y > 3){
      fill(214, 255, 255);
    } else{
      fill(255, 255, 255);
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
