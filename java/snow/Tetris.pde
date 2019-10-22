import java.awt.Canvas;
import java.awt.Color;
import static java.lang.System.*;
import java.util.*;



public class Tetro {
  Board field = new Board();
  Tetronomo tet = new Tetronomo();
  private int[] corner = {0, 0};
  private boolean lose = false;
  private boolean win = false;
  public boolean play = false;
  private int lineRuns = 0;

  Tetro() {
  }

  public int getPiece() {
    return tet.getPiece();
  }

  public void rotateTetronomo(int r) {
    if (findCorner()[0] != -1) {
      corner = findCorner();
      merge(0);
      tet.rotto(r);
      //the longest if statement
      if (corner[1]+tet.X1 > 9 || corner[1]+tet.X2 > 9 || corner[1]+tet.X3 > 9 || corner[1]+tet.X1 < 0 || corner[1]+tet.X2 < 0 || corner[1]+tet.X3 < 0 || corner[0]+tet.y1 > 23 || corner[0]+tet.y2 > 23 || corner[0]+tet.y3 > 23 || corner[0]+tet.y1 < 0 || corner[0]+tet.y2 < 0 || corner[0]+tet.y3 < 0)
        tet.rotto(-1 * r);
      if (field.toSquare(corner[0], corner[1]) >= 8 || field.toSquare(corner[0]+tet.y1, corner[1]+tet.X1) >= 8 || field.toSquare(corner[0]+tet.y2, corner[1]+tet.X2) >= 8 || field.toSquare(corner[0]+tet.y3, corner[1]+tet.X3) >= 8)
        tet.rotto(-1 * r);
      field.setSquare(corner[0], corner[1], tet.getPiece());
      field.setSquare(corner[0]+tet.y1, corner[1]+tet.X1, tet.getPiece());
      field.setSquare(corner[0]+tet.y2, corner[1]+tet.X2, tet.getPiece());
      field.setSquare(corner[0]+tet.y3, corner[1]+tet.X3, tet.getPiece());
    }
  }

  public int[] findCorner() {
    int[] gameSpeed = {-1, -1};
    for (int i = 0; i <= 9; i++) {
      for (int k = 23; k >= 0; k--) {
        if (field.toSquare(k, i) <= 7 &&field.toSquare(k, i) >= 1) {
          gameSpeed[0] = k;
          gameSpeed[1] = i;
          return gameSpeed;
        }
      }
    }
    return gameSpeed;
  }

  public int getGame() {
    if (win)
      return 1;
    if (lose)
      return 3;
    if (play)
      return 2;
    return 0;
  } 

  public void reset() {
    animationDelay = 0;
    heigh.addScore(stats.getScore()[0]);
    lose = false;
    win = false;
    play = true;
    field.clearBoard();
    tet.newPiece();
    stats.reset();
  }

  public int checkLines() {
    for (int k = 23; k >= 0; k--) {
      if (field.toSquare(k, 0) >= 8) {
        for (int i = 0; i <= 9; i++) {
          if (field.toSquare(k, i) <= 7) {
            break;
          } else if (i == 9) {
            return k;
          }
        }
      }
    }
    return -1;
  }

  public boolean checkColide() {
    for (int i = 0; i <= 9; i++) {
      for (int k = 0; k <= 23; k++) {
        if (field.toSquare(k, i) <= 7 && field.toSquare(k, i) >= 1) {
          if (k==23) 
            return true; 
          if (field.toSquare(k+1, i) >= 8) {
            return true;
          }
        }
      }
    }
    return false;
  }

  public void move() {
    for (int i = 9; i >= 0; i--) {
      for (int k = 23; k >= 0; k--) {
        if (field.toSquare(k, i) <= 7 && field.toSquare(k, i) >= 1) {
          field.setSquare(k+1, i, tet.getPiece());
          field.setSquare(k, i, 0);
        }
      }
    }
  }

  public void move(int from) {
    for (int i = 9; i >= 0; i--) {
      for (int k = from; k >= 0; k--) {
        if (field.toSquare(k, i) >= 8) {
          field.setSquare(k+1, i, field.toSquare(k, i));
          field.setSquare(k, i, 0);
        }
      }
    }
  }

  public void slide(int h) {
    if (h ==1) {
      for (int i = 0; i <= 9; i++) {
        for (int k = 23; k >= 0; k--) {
          if (i == 0 && field.toSquare(k, i) <= 7 && field.toSquare(k, i) >= 1 ) {
            return;
          }
          if (field.toSquare(k, i) <= 7 && field.toSquare(k, i) >= 1) {
            field.setSquare(k, i-1, tet.getPiece());
            field.setSquare(k, i, 0);
          }
        }
      }
    } else {
      for (int i = 9; i >= 0; i--) {
        for (int k = 23; k >= 0; k--) {
          if (i == 9 && field.toSquare(k, i) <= 7 && field.toSquare(k, i) >= 1) {
            return;
          }
          if (field.toSquare(k, i) <= 7 && field.toSquare(k, i) >= 1) {
            field.setSquare(k, i+1, tet.getPiece());
            field.setSquare(k, i, 0);
          }
        }
      }
    }
  }

  public boolean checkSlide(int h) {
    if (h ==1) {
      for (int i = 0; i <= 9; i++) {
        for (int k = 23; k >= 0; k--) {
          if (i == 0 && field.toSquare(k, i) <= 7 && field.toSquare(k, i) >= 1) {
            return false;
          }
          if (field.toSquare(k, i) <= 7 && field.toSquare(k, i) >= 1) 
            if (field.toSquare(k, i-1) >= 8)
              return false;
        }
      }
    } else {
      for (int i = 9; i >= 0; i--) {
        for (int k = 23; k >= 0; k--) {
          if (i == 9 && field.toSquare(k, i) <= 7 && field.toSquare(k, i) >= 1) {
            return false;
          }
          if (field.toSquare(k, i) <= 7 && field.toSquare(k, i) >= 1) 
            if (field.toSquare(k, i+1) >= 8)
              return false;
        }
      }
    }
    return true;
  }

  public void slideT(int h) {
    if (checkSlide(h))
      slide(h);
  }
  
  public void preview() {
    tet.preview();
  }

  public void merge(int gameSpeed) {
    for (int i = 9; i >= 0; i--) {
      for (int k = 23; k >= 0; k--) {
        if (field.toSquare(k, i) <= 7 && field.toSquare(k, i) >= 1) {
          field.setSquare(k, i, gameSpeed);
        }
      }
    }
  }

  public void drawBoard() {
    for (int i = 0; i <= 9; i++) {
      for (int k = 0; k <= 23; k++) {
        int l = field.toSquare(k, i);
        int row = (k * 50)-200;
        int col = i * 50;

        switch(l) {
        case 1:
          fill(165, 222, 255);
          rect(col, row, 50, 50);
          break;
        case 2:
          fill(252, 40, 40);
          rect(col, row, 50, 50);
          break;
        case 3:
          fill(13, 226, 52);
          rect(col, row, 50, 50);
          break;
        case 4:
          fill(13, 226, 52);
          rect(col, row, 50, 50);
          break;
        case 5:
          fill(13, 226, 52);
          rect(col, row, 50, 50);
          break;
        case 6:
          fill(252, 40, 40);
          rect(col, row, 50, 50);
          break;
        case 7:
          fill(165, 222, 255);
          rect(col, row, 50, 50);
          break;
        case 8:
          fill(165, 222, 255);
          rect(col, row, 50, 50);
          break;
        case 9:
          fill(252, 40, 40);
          rect(col, row, 50, 50);
          break;
        case 10:
          fill(13, 226, 52);
          rect(col, row, 50, 50);
          break;
        case 11:
          fill(13, 226, 52);
          rect(col, row, 50, 50);
          break;
        case 12:
          fill(13, 226, 52);
          rect(col, row, 50, 50);
          break;
        case 13:
          fill(252, 40, 40);
          rect(col, row, 50, 50);
          break;
        case 14:
          fill(165, 222, 255);
          rect(col, row, 50, 50);
          break;
        case 0:
          break;
        }
      }
    }
  }

  public void drop() {
    while (checkColide() == false) {
      refresh();
      stats.addPoints(2);
    }
    refresh();
  }

  public int dropNum() {
    for (int i = 23; i >= 0; i--) {
      for (int k = 9; k >= 0; k--) {
        if (field.toSquare(i, k) <= 7 && field.toSquare(i, k) >= 1) {
          return i;
        }
      }
    }
    return 0;
  }

  public void spawn() {
    tet.newPiece();
    if (field.toSquare(5, 4) >= 8 || field.toSquare(5+tet.y1, 4+tet.X1) >= 8 || field.toSquare(5+tet.y2, 4+tet.X2) >= 8 || field.toSquare(5+tet.y3, 4+tet.X3) >= 8 ) {
      lose = true;
      keyDown = false;
    }
    field.setSquare(5, 4, tet.getPiece());
    field.setSquare(5+tet.y1, 4+tet.X1, tet.getPiece());
    field.setSquare(5+tet.y2, 4+tet.X2, tet.getPiece());
    field.setSquare(5+tet.y3, 4+tet.X3, tet.getPiece());
  }

  public void refresh(){
    if (checkColide()) {
      merge(tet.getPiece()+7);
      spawn();
    } else {
      move();
    }
    lineRuns = 0;
    for (int i = 0; i < 4; i++) {
      if (checkLines() != -1) {
        int k = checkLines();
        field.setSquare(k, 0);
        move(k -1);
        lineRuns += 1;
      }
    }
    
    switch(lineRuns) {
    case 1:
      stats.addPoints(100*stats.getScore()[2]);
      stats.addLines(1);
      break;
    case 2:
      stats.addPoints(300*stats.getScore()[2]);
      stats.addLines(3);
      break;
    case 3:
      stats.addPoints(500*stats.getScore()[2]);
      stats.addLines(5);
      break;
    case 4:
      stats.addPoints(800*stats.getScore()[2]);
      stats.addLines(8);
      tetrisDrop = 6;
      break;
    case 0:
      break;
    }
    
    if (stats.getScore()[2] >= 11)
      win = true;
    drawBoard();
    fill(255, 255, 255);
  }
}
