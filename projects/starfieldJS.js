      this.y = random(0,height);
    }
  }
  
   move(){
    this.tic ++;
    this.x += this.speed*cos(radians(this.angle));
    this.y += this.speed*sin(radians(this.angle));
    this.angle -= ((this.a * this.tic) + this.v);
  }
  
   show(){
    fill(this.r,this.g,this.b);
    ellipse(this.x,this.y,10,10);
  }
  
   getx(){
    return this.x;
  }
  
   gety(){
    return this.y;
  }
  
   getAge(){
    return this.tic;
  }
}

class OddballParticle extends NormalParticle//uses an varerface
{
  constructor(){
    super();
  }
  
   move(){
    super.r = gloabalNewR + random(-20,20);
    super.g = gloabalNewG + random(-20,20);
    super.b = gloabalNewB + random(-20,20); 
  }
  
   show(){
    ellipse((width/2)+random(-4,4),(height/2)+random(-4,4),10,10);
  }
  
   getx(){
    return (width/2);
  }
  
   gety(){
    return (height/2);
  }
  
   getAge(){
    return 0;
  }
}
