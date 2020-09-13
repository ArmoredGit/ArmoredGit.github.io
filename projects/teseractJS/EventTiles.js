class eventTiles {
  //this class references what happens regarding buttons

  //nothing needed for constuctor
  constructor() {
  }

  //What happens when a button is pressed ref by ID
  event( id) {
    switch(id) {
    case 1:
      p.setSubSquare(1, 1, 0);
      break;
    case 2:
      p.setSubSquare(1, 0, 0);
      break;
    case 3:
      p.setSubSquare(1, 0, 0);
      break;
    case 4:
      p.setSubSquare(1, 3, 1);
      break;
      //menu world
    case 5:
      p.setLevel(1);
      playState = 1;
      break;
    case 6:
      p.setLevel(2);
      playState = 1;
      break;
    case 7:
      p.setLevel(3);
      playState = 1;
      break;
    case 8:
      p.setLevel(4);
      playState = 1;
      break;
    case 9:
      p.setLevel(5);
      playState = 1;
      break;
    case 10:
      p.setLevel(6);
      playState = 1;
      break;
    case 11:
      p.setLevel(7);
      playState = 1;
      break;
    case 12:
      p.setLevel(8);
      playState = 1;
      break;
    case 13:
      p.setLevel(9);
      playState = 1;
      break;
    case 14:
      p.setSubSquare(2, 4, 0);
      break;
    case 15:
      p.setSubSquare(2, 2, 3);
      break;
    case 16:
      p.setSubSquare(5, 3, 0);
      break;
      //level 7
    case 17:
      p.setSubSquare(2, 4, 3);
      break;
    case 18:
      p.setSubSquare(1, 3, 0);
      p.setSubSquare(2, 3, 0);
      break;
    case 19:
      p.setSubSquare(3, 4, 0);
      p.setSubSquare(3, 5, 0);
      break;
    case 20:
      p.setSubSquare(3, 1, 0);
      p.setSubSquare(3, 2, 0);
      break;
    case 21:
      p.setSubSquare(6, 1, 0);
      break;
      //level 8
    case 22:
      p.setSubSquare(2, 3, 0);
      break;
    case 23:
      p.setSubSquare(0, 3, 0);
      break;
    case 24:
      p.setSubSquare(1, 2, 0);
      break;
    case 25:
      p.setSubSquare(4, 6, 0);
      break;
    case 26:
      p.setSubSquare(4, 0, 0);
      break;
    case 27:
      p.setSubSquare(6, 1, 0);
      break;
    case 28:
      p.setSubSquare(5, 2, 0);
      break;
    case 29:
      p.setSubSquare(5, 4, 0);
      break;
      //level 9
    case 30:
      p.setSubSquare(7, 1, 3);
      break;
    case 31:
      p.setSubSquare(4, 0, 6);
      break;
    case 32:
      p.setSubSquare(4, 3, 6);
      break;
    case 33:
      p.setSubSquare(8, 7, 0);
      break;
    case 34:
      p.setSubSquare(5, 4, 6);
      break;
    case 35:
      p.setSubSquare(6, 8, 0);
      break;
    case 36:
      p.setSubSquare(3, 5, 6);
      break;
    case 37:
      p.setSubSquare(1, 6, 5);
      p.setSubSquare(0, 7, 5);
      break;
    case 38:
      p.setSubSquare(3, 6, 3);
      break;
    case 40:
      p.setSubSquare(3, 7, 1);
      break;
    case 41:
      p.setSubSquare(2, 1, 367);
      break;
      //menu world
    case 42:
      m.nextWorld();
      break;
    case 43:
      m.prevWorld();
      break;
    case 44:
      p.setPlane(1);
      p.fixYNow();
      break;
    case 45:
      p.setPlane(2);
      p.fixYNow();
      break;
    case 46:
      p.setSquare(1, 2, 0, 0, 0);
      break;
    case 47:
      p.setSquare(2, 2, 0, 0, 0);
      break;
    case 48:
      p.setSquare(1, 0, 3, 0, 0);
      break;
    case 49:
      p.setSquare(1, 1, 3, 0, 0);
      break;
    case 50:
      p.setSquare(1, 3, 3, 0, 0);
      break;
    case 51:
      p.setLevel(10);
      playState = 1;
      break;
    case 52:
      p.setLevel(11);
      playState = 1;
      break;
    case 53:
      p.setLevel(12);
      playState = 1;
      break;
    case 54:
      p.setLevel(13);
      playState = 1;
      break;
    case 55:
      p.setLevel(14);
      playState = 1;
      break;
    case 56:
      p.setLevel(15);
      playState = 1;
      break;
    case 57:
      p.setLevel(16);
      playState = 1;
      break;
    case 58:
      p.setLevel(17);
      playState = 1;
      break;
    case 59:
      p.setLevel(18);
      playState = 1;
      break;
    case 60:
      p.setSquare(4, 5, 5, 0, 6);
      p.setSquare(5, 4, 5, 0, 6);
      p.setSquare(5, 5, 4, 0, 6);
      break;
    case 61:
      p.setSquare(1, 4, 4, 0, 0);
      break;
      //cube 7 
    case 62:
      p.setSquare(2, 4, 2, 0, 0);
      break;
    case 63:
      p.setSquare(3, 3, 5, 0, 0);
      break;
    case 64:
      p.setSquare(3, 1, 2, 0, 0);
      break;
    case 65:
      p.setSquare(1, 3, 2, 0, 0);
      break;
    case 66:
      p.setSquare(1, 2, 0, 0, 0);
      break;
    case 67:
      p.setSquare(5, 2, 2, 0, 0);
      break;
    case 68:
      p.setSquare(0, 2, 0, 0, 0);
      break;
    case 69:
      p.setSquare(2, 0, 2, 0, 0);
      break;
    case 70:
      p.setSquare(5, 1, 2, 0, 0);
      break;
    case 71:
      p.setSquare(0, 2, 2, 0, 0);
      break;
    case 72:
      p.setSquare(5, 0, 5, 0, 6);
      break;
    case 73:
      p.setSquare(2, 3, 2, 0, 6);
      break;
    case 75:
      p.setSquare(1, 1, 0, 0, 0);
      break;
    case 76:
      p.setSquare(3, 1, 0, 0, 6);
      break;
    case 77:
      p.setSquare(4, 1, 0, 0, 6);
      break;
    case 78:
      p.setSquare(4, 3, 0, 0, 6);
      break;
    case 79:
      p.setSquare(2, 5, 5, 0, 1);
      break;
    case 80:
      p.setSquare(0, 4, 5, 0, 6);
      break;
    case 81:
      p.setSquare(1, 1, 5, 0, 0);
      break;
    case 82:
      p.setSquare(1, 3, 5, 0, 6);
      break;
    case 83:
      p.setSquare(2, 1, 5, 0, 0);
      break;
    case 84:
      p.setSquare(3, 1, 5, 0, 0);
      break;
      
    default:
      break;
    }
  }

  //What happens when a button is not pressed ref by ID
  undoEvent(id) {
    switch(id) {
    case 3:
      p.setSubSquare(1, 0, 1);
      break;
    case 4:
      p.setSubSquare(1, 3, 0);
      break;
    case 14:
      p.setSubSquare(2, 4, 1);
      break;
    case 16:
      p.setSubSquare(5, 3, 1);
      break;
    case 18:
      p.setSubSquare(1, 3, 6);
      p.setSubSquare(2, 3, 6);
      break;
    case 19:
      p.setSubSquare(3, 4, 6);
      p.setSubSquare(3, 5, 6);
      break;
    case 20:
      p.setSubSquare(3, 1, 6);
      p.setSubSquare(3, 2, 6);
      break;
    case 21:
      p.setSubSquare(6, 1, 1);
      break;
    case 26:
      p.setSubSquare(4, 0, 1);
      break;
    case 27:
      p.setSubSquare(6, 1, 1);
      break;
    case 28:
      p.setSubSquare(5, 2, 1);
      break;
    case 29:
      p.setSubSquare(5, 4, 1);
      break;
      //level 9
    case 31:
      p.setSubSquare(4, 0, 1);
      break;
    case 32:
      p.setSubSquare(4, 3, 1);
      break;
    case 33:
      p.setSubSquare(8, 7, 1);
      break;
    case 34:
      p.setSubSquare(5, 4, 1);
      break;
    case 35:
      p.setSubSquare(6, 8, 1);
      break;
    case 36:
      p.setSubSquare(3, 5, 1);
      break;
    case 37:
      p.setSubSquare(1, 6, 0);
      p.setSubSquare(0, 7, 1);
      break;
    case 39:
      p.setSubSquare(0, 7, 6);
      break;
    case 40:
      p.setSubSquare(3, 7, 0);
      break;
    case 46:
      p.setSquare(1, 2, 0, 0, 1);
      break;
    case 47:
      p.setSquare(2, 2, 0, 0, 1);
      break;
    case 48:
      p.setSquare(1, 0, 3, 0, 6);
      break;
    case 49:
      p.setSquare(1, 1, 3, 0, 6);
      break;
    case 50:
      p.setSquare(1, 3, 3, 0, 1);
      break;
    case 60:
      p.setSquare(4, 5, 5, 0, 1);
      p.setSquare(5, 4, 5, 0, 1);
      p.setSquare(5, 5, 4, 0, 1);
      break;
    case 61:
      p.setSquare(1, 4, 4, 0, 1);
      break;
      //cube 7 
    case 62:
      p.setSquare(2, 4, 2, 0, 1);
      break;
    case 63:
      p.setSquare(3, 3, 5, 0, 5);
      break;
    case 64:
      p.setSquare(3, 1, 2, 0, 1);
      break;
    case 65:
      p.setSquare(1, 3, 2, 0, 1);
      break;
    case 66:
      p.setSquare(1, 2, 0, 0, 6);
      break;
    case 67:
      p.setSquare(5, 2, 2, 0, 1);
      break;
    case 68:
      p.setSquare(0, 2, 0, 0, 6);
      break;
    case 69:
      p.setSquare(2, 0, 2, 0, 1);
      break;
    case 70:
      p.setSquare(5, 1, 2, 0, 5);
      break;
    case 71:
      p.setSquare(0, 2, 2, 0, 1);
      break;
    case 72:
      p.setSquare(5, 0, 5, 0, 1);
      break;
    case 73:
      p.setSquare(2, 3, 2, 0, 5);
      break;
    case 74:
      p.setSquare(3, 3, 2, 0, 0);
      break;
    case 75:
      p.setSquare(1, 1, 0, 0, 6);
      break;
    case 76:
      p.setSquare(3, 1, 0, 0, 0);
      break;
    case 77:
      p.setSquare(4, 1, 0, 0, 0);
      break;
    case 78:
      p.setSquare(4, 3, 0, 0, 0);
      break;
    case 79:
      p.setSquare(2, 5, 5, 0, 0);
      p.setSquare(0, 0, 2, 0, 5);
      break;
    case 80:
      p.setSquare(0, 4, 5, 0, 1);
      break;
    case 81:
      p.setSquare(1, 1, 5, 0, 5);
      break;
    case 82:
      p.setSquare(1, 3, 5, 0, 1);
      break;
    case 83:
      p.setSquare(2, 1, 5, 0, 5);
      break;
    case 84:
      p.setSquare(3, 1, 5, 0, 5);
      break;
    default:
      break;
    }
  }

  //What a button looks like, while not pressed ref by ID
  eventdraw(id) {
    switch(id) {
    case 1:
      return button;
    case 5:
      return levelButton1;
    case 6:
      return levelButton2;
    case 7:
      return levelButton3;
    case 8:
      return levelButton4;
    case 9:
      return levelButton5;
    case 10:
      return levelButton6;
    case 11:
      return levelButton7;
    case 12:
      return levelButton8;
    case 13:
      return levelButton9;
    case 44:
      return rotoYoff;
    case 45:
      return rotoZoff;
    case 51:
      return levelButton1;
    case 52:
      return levelButton2;
    case 53:
      return levelButton3;
    case 54:
      return levelButton4;
    case 55:
      return levelButton5;
    case 56:
      return levelButton6;
    case 57:
      return levelButton7;
    case 58:
      return levelButton8;
    case 59:
      return levelButton9;
    default:
      return button;
    }
  }

  //What a button looks like, while pressed by a cube ref by ID
  activeEventdraw( id) {
    switch(id) {
    case 1:
      return pressButtonWBlock;
    default:
      return pressButtonWBlock;
    }
  }

  //What a button looks like, while pressed by a player ref by ID
  pActiveEventdraw( id) {
    switch(id) {
    case 5:
      return levelButton1;
    case 6:
      return levelButton2;
    case 7:
      return levelButton3;
    case 8:
      return levelButton4;
    case 9:
      return levelButton5;
    case 10:
      return levelButton6;
    case 11:
      return levelButton7;
    case 12:
      return levelButton8;
    case 13:
      return levelButton9;
    case 44:
      return rotoYon;
    case 45:
      return rotoZon;
    default:
      return pressButton;
    }
  }
}
