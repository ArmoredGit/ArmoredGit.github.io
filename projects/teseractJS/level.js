public class levelSlicer{
  //private var _size,_planeCount,_rotation;
  //private var _x;
  //private var _y;
  //private var _z;
  //private var _w;
  //private var[][][][] teseract;
  //level is the base class for master class for manager and menu
  //level holds, modifies, and outputs views of squares, cubes, and tesseracts
  
  //the constucter saves all variables needed and prepares the tesseract array for the level
  constructor( size,  plane,  planes){
    _size = size;
    _planeCount = planes;
    _rotation = plane;
    teseract = [];
    view = "X/Y";
    _x = 0;
    _y = 0;
    _z = 0;
    _w = 0;
  }
  
  //as it says this restarts the level and wipes the tesseract array 
  public void restart(var size, var plane, var planes){
    _size = size;
    _planeCount = planes;
    _rotation = plane;
    teseract = new var[size][size][size][size];
    view = "X/Y";
    _x = 0;
    _y = 0;
    _z = 0;
    _w = 0;
  }
  
  //marking scheme for teserct w z y x
  //x is the rotational acess and doesn't change upon spin
  //planes are 1 = xy , 2 = xz , 3 = xw
  
  //used to set the tesseract array to the current level 
  public void setLevel(var[][][][] arr){
    teseract = arr;
  }
  
  //sets the players cordanates in absolute cordinates IE X,Y,Z,W
  public void setCords(var x, var y, var z, var w){
    _x = x;
    _y = y;
    _z = z;
    _w = w;
  }
  
  //gets the players cordanates in absolute cordinates IE X,Y,Z,W
  public var[] getCords(){
    var[] arr = {_x,_y,_z,_w};
    return arr;
  }
  
  //sets the players cordanates in relitive cordinates IE X,Y or X,W in the plane they currently in
  public void setSubCords(var x, var y){
    if(_rotation == 1){
      _y = y;
      _x = x;
    }else if(_rotation == 2){
      _z = y;
      _x = x;
    }else if(_rotation == 3){
      _w = y;
      _x = x;
    }
  }
  
  //returns a square slice from the players current view 
  public var[][] getSlice(){
    // get the 2D slice of the tesseract
    var[][] arr = new var[_size][_size];
    for(var i = 0; i < _size; i++){
      for(var j = 0; j < _size; j++){
        if(_rotation == 1)
          arr[i][j] = teseract[_w][_z][j][i];
        else if(_rotation == 2)
          arr[i][j] = teseract[_w][j][_y][i];
        else if(_rotation == 3)
          arr[i][j] = teseract[j][_z][_y][i];
      }
    }
    return arr;
  }
  
  //rotates to the next view 
  public void rotatePlane(var r){
    _rotation += r;
    if(_rotation < 1)
      _rotation = _planeCount;
    if(_rotation > _planeCount)
      _rotation = 1;
    //swaps to the next plane ex. xy to xz
  }
  
  //sets the 2D view
  public void setPlane(var r){
    _rotation = r;
    //swaps to the next plane ex. xy to xz
  }
  
  //when the player rotates this fixes their non X position in 2D and edits the view
  public var fixY(){
    if(_rotation == 1){
      view = "X/Y";
      return _y;
    }else if(_rotation == 2){
      view = "X/Z";
      return _z;
    }else if(_rotation == 3){
      view = "X/W";
      return _w;
    }
    return _y;
  }
  
  //returns what is at a position X,Y in a slice that the character is in
  public var getSubSquare(var x, var y){
    var i = 0;
    if(_rotation == 1){
      i = teseract[_w][_z][y][x];
    }else if(_rotation == 2){
      i = teseract[_w][y][_y][x];
    }else if(_rotation == 3){
      i = teseract[y][_z][_y][x];
    }
    return i;
  }
  
  //edits what is at a position X,Y in a slice that the character is in
  public var setSubSquare(var x, var y, var set){
    //sets the povar in the tesseract by giving 2d cords of the slice
    var i = 0;
    if(set == 0 && getSubSquare(x,y) == 3)
      set = 3;
    if(_rotation == 1){
      i = teseract[_w][_z][y][x];
      teseract[_w][_z][y][x] = set;
    }else if(_rotation == 2){
      i = teseract[_w][y][_y][x];
      teseract[_w][y][_y][x] = set;
    }else if(_rotation == 3){
      i = teseract[y][_z][_y][x];
      teseract[y][_z][_y][x] = set;
    }
    return i;
  }
  
  //for pushing blocks in any direction along an xy plane
  public void pushCube(var x, var y, var augment){
    //pushes a block at xy in the direcrtion augment 
    if(_rotation == 1){
      teseract[_w][_z][y][x] -= 3;
    }else if(_rotation == 2){
      teseract[_w][y][_y][x] -= 3;
    }else if(_rotation == 3){
      teseract[y][_z][_y][x] -= 3;
    }
    switch(augment){
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
    if(_rotation == 1){
      teseract[_w][_z][y][x] += 3;
    }else if(_rotation == 2){
      teseract[_w][y][_y][x] += 3;
    }else if(_rotation == 3){
      teseract[y][_z][_y][x] += 3;
    }
  }
  
  public void setSquare(var x, var y, var z, var w, var set){
    //sets the povar in the tesseract via an absolute/4D povar
    teseract[w][z][y][x] = set;
  }
}
