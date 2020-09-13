class levelSlicer {
  //private var this._size,this._planeCount,this._rotation;
  //private var this._x;
  //private var this._y;
  //private var this._z;
  //private var this._w;
  //private var[][][][] this.teseract;
  //level is the base class for master class for manager and menu
  //level holds, modifies, and outputs views of squares, cubes, and tesseracts

  //the constucter saves all variables needed and prepares the tesseract array for the level
  constructor( size, plane, planes) {
    this._size = size;
    this._planeCount = planes;
    this._rotation = plane;
    this.teseract = [];
    view = "X/Y";
    this._x = 0;
    this._y = 0;
    this._z = 0;
    this._w = 0;
  }

  //as it says this restarts the level and wipes the tesseract array 
  restart( size, plane, planes) {
    this._size = size;
    this._planeCount = planes;
    this._rotation = plane;
    this.teseract = [];
    view = "X/Y";
    this._x = 0;
    this._y = 0;
    this._z = 0;
    this._w = 0;
  }

  //marking scheme for teserct w z y x
  //x is the rotational acess and doesn't change upon spin
  //planes are 1 = xy , 2 = xz , 3 = xw

  //used to set the tesseract array to the current level 
  setLevel(arr) {
    this.teseract = arr;
  }

  //sets the players cordanates in absolute cordinates IE X,Y,Z,W
  setCords( x, y, z, w) {
    this._x = x;
    this._y = y;
    this._z = z;
    this._w = w;
  }

  //gets the players cordanates in absolute cordinates IE X,Y,Z,W
  getCords() {
    let arr = [this._x, this._y, this._z, this._w, ];
    return arr;
  }

  //sets the players cordanates in relitive cordinates IE X,Y or X,W in the plane they currently in
  setSubCords( x, y) {
    if (this._rotation == 1) {
      this._y = y;
      this._x = x;
    } else if (this._rotation == 2) {
      this._z = y;
      this._x = x;
    } else if (this._rotation == 3) {
      this._w = y;
      this._x = x;
    }
  }

  //returns a square slice from the players current view 
  getSlice() {
    // get the 2D slice of the tesseract
    let arr = [];
    for (let i = 0; i < this._size; i++) {
      arr[i] = [];
      for (let j = 0; j < this._size; j++) {
        if (this._rotation == 1){
          arr[i][j] = this.teseract[this._w][this._z][j][i];
        }else if (this._rotation == 2){
          arr[i][j] = this.teseract[this._w][j][this._y][i];
        }else if (this._rotation == 3){
          arr[i][j] = this.teseract[j][this._z][this._y][i];
        }
      }
    }
    return arr;
  }

  //rotates to the next view 
  rotatePlane( r) {
    this._rotation += r;
    if (this._rotation < 1){
      this._rotation = this._planeCount;
    }
    if (this._rotation > this._planeCount){
      this._rotation = 1;
    }
    //swaps to the next plane ex. xy to xz
  }

  //sets the 2D view
  setPlane( r) {
    this._rotation = r;
    //swaps to the next plane ex. xy to xz
  }

  //when the player rotates this fixes their non X position in 2D and edits the view
  fixY() {
    if (this._rotation == 1) {
      view = "X/Y";
      return this._y;
    } else if (this._rotation == 2) {
      view = "X/Z";
      return this._z;
    } else if (this._rotation == 3) {
      view = "X/W";
      return this._w;
    }
    return this._y;
  }

  //returns what is at a position X,Y in a slice that the character is in
  getSubSquare( x, y) {
    let i = 0;
    if (this._rotation == 1) {
      i = this.teseract[this._w][this._z][y][x];
    } else if (this._rotation == 2) {
      i = this.teseract[this._w][y][this._y][x];
    } else if (this._rotation == 3) {
      i = this.teseract[y][this._z][this._y][x];
    }
    return i;
  }

  //edits what is at a position X,Y in a slice that the character is in
  setSubSquare( x, y, set) {
    //sets the povar in the tesseract by giving 2d cords of the slice
    let i = 0;
    if (set == 0 && this.getSubSquare(x, y) == 3){
      set = 3;
    }
    if (this._rotation == 1) {
      i = this.teseract[this._w][this._z][y][x];
      this.teseract[this._w][this._z][y][x] = set;
    } else if (this._rotation == 2) {
      i = this.teseract[this._w][y][this._y][x];
      this.teseract[this._w][y][this._y][x] = set;
    } else if (this._rotation == 3) {
      i = this.teseract[y][this._z][this._y][x];
      this.teseract[y][this._z][this._y][x] = set;
    }
    return i;
  }

  //for pushing blocks in any direction along an xy plane
  pushCube( x, y, augment) {
    //pushes a block at xy in the direcrtion augment 
    if (this._rotation == 1) {
      this.teseract[this._w][this._z][y][x] -= 3;
    } else if (this._rotation == 2) {
      this.teseract[this._w][y][this._y][x] -= 3;
    } else if (this._rotation == 3) {
      this.teseract[y][this._z][this._y][x] -= 3;
    }
    switch(augment) {
    case 1:
      x++;
      break;
    case 2:
      y++;
      break;
    case 3:
      x--;
      break;
    case 4:
      y--;
      break;
    }
    if (this._rotation == 1) {
      this.teseract[this._w][this._z][y][x] += 3;
    } else if (this._rotation == 2) {
      this.teseract[this._w][y][this._y][x] += 3;
    } else if (this._rotation == 3) {
      this.teseract[y][this._z][this._y][x] += 3;
    }
  }

  setSquare( x, y, z, w, set) {
    //sets the povar in the tesseract via an absolute/4D povar
    this.teseract[w][z][y][x] = set;
  }
}
