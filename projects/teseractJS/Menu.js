class Menu extends levelSlicer {
  //this controls the menu world
  //define character position and veiw
  //private var _tx, _ty;
  //private var _size, _world;

  //constructor gets the map from the library
  constructor() {
    super(7, 1, 1);
    this._world = 1;
    this.setLevel(li.menuSelecter(1)[1]);
    this._tx = 0;
    this._ty = 0;
    this._size = li.menuSelecter(1)[0][0][0][0][0];
  }

  //for writeup/ dsplay reasons
  worldNum() {
    return this._world;
  }

  //brings character to the menue they were in
  warpWorld() {
    super.restart(7, 1, 1);
    this.setLevel(li.menuSelecter(this._world)[1]);
    this._tx = 0;
    this._ty = 0;
  }

  //brings character to the next menue
  nextWorld() {
    this._world++;
    super.restart(7, 1, 1);
    this.setLevel(li.menuSelecter(this._world)[1]);
    this._tx = 0;
    this._ty = 0;
  }

  //brings character to the previous menue
  prevWorld() {
    this._world--;
    super.restart(7, 1, 1);
    this.setLevel(li.menuSelecter(this._world)[1]);
    this._tx = 0;
    this._ty = 0;
  }

  //moves the character 
  move( direction) {
    //moves you across the screendoor unless in the tesseract you would be hitting something in tesseract
    //1 up, 2 left, 3 down, 4 right
    switch(direction) {
    case 1:
      this._tx++;
      if (this._tx > this._size - 1) {
        this._tx = this._size - 1;
      }
      if (super.getSlice()[this._tx][this._ty]%10 == 1) {
        this._tx--;
      }
      break;
    case 2:
      this._ty++;
      if (this._ty > this._size - 1) {
        this._ty = this._size - 1;
      }
      if (super.getSlice()[this._tx][this._ty]%10 == 1) {
        this._ty--;
      }
      break;
    case 3:
      this._tx--;
      if (this._tx < 0) {
        this._tx = 0;
      }
      if (super.getSlice()[this._tx][this._ty]%10 == 1) {
        this._tx++;
      }
      break;
    case 4:
      this._ty--;
      if (this._ty < 0) {
        this._ty = 0;
      }
      if (super.getSlice()[this._tx][this._ty]%10 == 1) {
        this._ty++;
      }
      break;
    }
    this.setSubCords(this._tx, this._ty);
  }

  //draws... well the menu actually 
  drawGame() {
    //draws the full game that you can see projected
    this._ty = this.fixY();
    let w = width * 7 / 8;
    let a = width * 1 / 8;
    let arr = super.getSlice();
    let l = arr.length;
    for (let i = 0; i < l; i++) {
      for (let j = 0; j < l; j++) {
        if ((i%2 == 1)?j%2 == 1:j%2 == 0) {
          fill(120, 160, 73);
          image(evenFloor, i * w / l, a + j * w / l, w / l, w / l);
          if (arr[i][j]%10 == 1) {
            fill(37, 48, 24);
            image(evenWall, i * w / l, a + j * w / l, w / l, w / l);
          }
        } else {
          fill(180, 220, 133);
          image(oddFloor, i * w / l, a + j * w / l, w / l, w / l);
          if (arr[i][j]%10 == 1) {
            fill(75, 89, 59);
            image(oddWall, i * w / l, a + j * w / l, w / l, w / l);
          }
        }
        if (arr[i][j]%10 == 4) {
          image(e.eventdraw(floor(arr[i][j]/10)), i * w / l, a + j * w / l, w / l, w / l);
        }
      }
    }
    if (super.getSlice()[this._tx][this._ty]%10 == 4) {
      image(e.pActiveEventdraw(floor(arr[this._tx][this._ty]/10)), this._tx * w / l, a + this._ty * w / l, w / l, w / l);
    }
    fill(250);
    image(player, this._tx * w / l, a + this._ty * w / l, w / l, w / l);
  }

  //calls all button events
  triggerEvents() {
    //serches for events and triggers them and undose them if req are no longer met
    let l = 7;
    let arr = super.getSlice();
    for (let i = 0; i < l; i++) {
      for (let j = 0; j < l; j++) {
        if ((arr[i][j]%10 == 4 && this._tx == i && this._ty == j) || (arr[i][j]%10 == 7)) {
          e.event(floor(arr[i][j]/10));
        }
      }
    }

    for (let i = 0; i < l; i++) {
      for (let j = 0; j < l; j++) {
        if ((arr[i][j]%10 != 4 || this._tx != i || this._ty != j) && (arr[i][j]%10 != 7)) {
          e.undoEvent(floor(arr[i][j]/10));
        }
      }
    }
  }
}
