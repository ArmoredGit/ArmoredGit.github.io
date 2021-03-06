class Snow{
  constructor() {
    this.x = random(width / 9 * 7);
    this.y = random(-50,-10);
    this.speed=random(width/500)+width/500;
    this.size=random(width/90);
  }
  
  show(){
    noStroke();
    fill(255,255,255);
    ellipse(this.x,this.y,this.size,this.size);
  }
  
  move(){
    this.y+=this.speed;
    if (this.y>(height / 18 *17-3)){
      this.y=-10;
      this.x=random(width / 9 * 7);
      this.size=random(width/90);
    }
    if(this.y > (2 * height / 18)){
      if (snowBlockArray[floor(this.x / (width / 18))][floor((this.y - (2 * height / 18)) / (height / 18))].up){
        this.y=-10;
        this.x=random(width / 9 * 7);
        this.size=random(width/90);
      }
    }
  }
}

class RedSnow{
  constructor() {
    this.x = random(width / 9 * 7);
    this.y = random(-50,-10);
    this.speed=random(width/500)+width/500;
    this.size=random(width/90);
  }
  
  show(){
    noStroke();
    fill(255,0,0);
    ellipse(this.x,this.y,this.size,this.size);
  }
  
  move(){
    this.y+=this.speed;
    if (this.y>(height / 18 *17-3)){
      this.y=-10;
      this.x=random(width / 9 * 7);
      this.size=random(width/90);
    }
    if(this.y > (3 * height / 18)){
      if (snowBlockArray[floor(this.x / (width / 18))][floor((this.y - (2 * height / 18)) / (height / 18))].up){
        this.y=-10;
        this.x=random(width / 9 * 7);
        this.size=random(width/90);
      }
    }
  }
}
class GreenSnow{
  constructor() {
    this.x = random(width / 9 * 7);
    this.y = random(-50,-10);
    this.speed=random(width/500)+width/500;
    this.size=random(width/90);
  }
  
  show(){
    noStroke();
    fill(0,255,0);
    ellipse(this.x,this.y,this.size,this.size);
  }
  
  move(){
    this.y+=this.speed;
    if (this.y>(height / 18 *17-3)){
      this.y=-10;
      this.x=random(width / 9 * 7);
      this.size=random(width/90);
    }
    if(this.y > (3 * height / 18)){
      if (snowBlockArray[floor(this.x / (width / 18))][floor((this.y - (2 * height / 18)) / (height / 18))].up){
        this.y=-10;
        this.x=random(width / 9 * 7);
        this.size=random(width/90);
      }
    }
  }
}
