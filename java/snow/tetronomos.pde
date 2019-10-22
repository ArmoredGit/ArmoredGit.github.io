public class Tetronomo {
  private int X1, X2, X3, y1, y2, y3;
  private int piece, rotation,nextPiece;
  Tetronomo() { 
    newPiece();
    getPiece(piece);
  }

  public void newPiece() {
    piece = nextPiece;
    nextPiece = (int)(random(1, 8));
    if(devMode)
      nextPiece = 1;
    rotation = 0;
    getPiece(piece);
  }
  
  public void preview(){
    int hold = rotation;
    rotation = 0;
    getPiece(nextPiece);
    rect(width / 2 + 50, 550, 30, 30);
    rect(width / 2 + 50 + (X1 * 30), 550 + (y1 * 30), 30, 30);
    rect(width / 2 + 50 + (X2 * 30), 550 + (y2 * 30), 30, 30);
    rect(width / 2 + 50 + (X3 * 30), 550 + (y3 * 30), 30, 30);
    getPiece(piece);
    rotation = hold;
  }

  public void rotto(int gameSpeed) {
    rotation += gameSpeed;
    if (rotation == 4)
      rotation = 0;
    if (rotation == -1)
      rotation = 3;
    getPiece(piece);
  }

  public int getPiece() {
    return piece;
  }
  
  public void getPiece(int m){
    if(rotation == 0){
      switch(m){
        case 1 : 
          X1 = 1;X2 = 2;X3 = 3;y1 = 0;y2 = 0;y3 = 0;break;
        case 2 : 
          X1 = 0;X2 = 1;X3 = 2;y1 = -1;y2 = 0;y3 = 0;break;
        case 3 : 
          X1 = 1;X2 = 2;X3 = 2;y1 = 0;y2 = 0;y3 = -1;break;
        case 4 : 
          X1 = 1;X2 = 0;X3 = 1;y1 = 0;y2 = -1;y3 = -1;break;
        case 5 : 
          X1 = 1;X2 = 1;X3 = 2;y1 = 0;y2 = -1;y3 = -1;break;
        case 6 : 
          X1 = 1;X2 = 1;X3 = 2;y1 = 0;y2 = -1;y3 = 0;break;
        case 7 : 
          X1 = 1;X2 = 1;X3 = 2;y1 = 0;y2 = 1;y3 = 1;break;
      }
    } else if(rotation == 1){
      switch(m){
        case 1 : 
          X1 = 0;X2 = 0;X3 = 0;y1 = -1;y2 = -2;y3 = -3;break;
        case 2 : 
          X1 = 1;X2 = 1;X3 = 1;y1 = 0;y2 = -1;y3 = -2;break;
        case 3 : 
          X1 = 1;X2 = 1;X3 = 1;y1 = 0;y2 = 1;y3 = 2;break;
        case 4 : 
          X1 = 1;X2 = 0;X3 = 1;y1 = 0;y2 = -1;y3 = -1;break;
        case 5 : 
          X1 = 0;X2 = 1;X3 = 1;y1 = -1;y2 = 0;y3 = 1;break;
        case 6 : 
          X1 = 1;X2 = 1;X3 = 1;y1 = -1;y2 = 0;y3 = 1;break;
        case 7 : 
          X1 = 0;X2 = 1;X3 = 1;y1 = -1;y2 = -1;y3 = -2;break;
      }
    } else if(rotation == 2 ){
      switch(m){
        case 1 : 
          X1 = 1;X2 = 2;X3 = 3;y1 = 0;y2 = 0;y3 = 0;break;
        case 2 : 
          X1 = 1;X2 = 2;X3 = 2;y1 = 0;y2 = 0;y3 = 1;break;
        case 3 : 
          X1 = 0;X2 = 1;X3 = 2;y1 = -1;y2 = -1;y3 = -1;break;
        case 4 : 
          X1 = 1;X2 = 0;X3 = 1;y1 = 0;y2 = -1;y3 = -1;break;
        case 5 : 
          X1 = 1;X2 = 1;X3 = 2;y1 = 0;y2 = -1;y3 = -1;break;
        case 6 : 
          X1 = 1;X2 = 1;X3 = 2;y1 = 0;y2 = 1;y3 = 0;break;
        case 7 : 
          X1 = 1;X2 = 1;X3 = 2;y1 = 0;y2 = 1;y3 = 1;break;
      }
    } else {
      switch(m){
        case 1 : 
          X1 = 0;X2 = 0;X3 = 0;y1 = -1;y2 = -2;y3 = -3;break;
        case 2 : 
          X1 = 0;X2 = 0;X3 = 1;y1 = -1;y2 = -2;y3 = -2;break;
        case 3 : 
          X1 = 1;X2 = 0;X3 = 0;y1 = 0;y2 = -1;y3 = -2;break;
        case 4 : 
          X1 = 1;X2 = 0;X3 = 1;y1 = 0;y2 = -1;y3 = -1;break;
        case 5 : 
          X1 = 0;X2 = 1;X3 = 1;y1 = -1;y2 = 0;y3 = 1;break;
        case 6 : 
          X1 = 0;X2 = 0;X3 = 1;y1 = -1;y2 = -2;y3 = -1;break;
        case 7 : 
          X1 = 0;X2 = 1;X3 = 1;y1 = -1;y2 = -1;y3 = -2;break;
      }
    }
  }
}
