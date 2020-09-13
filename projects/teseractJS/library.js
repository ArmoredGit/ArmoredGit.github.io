class library{
  //this class contains all the levels played in the game and some not played in the game and some not
  
  //nothing needed for constuctor, but I did not want to make a static class
  constructor(){
    
  }
  
  //format for returrned levels is [[[[[_size,_plane,_planeCount,,,],,],],],tesseract} ~ eventualy may add an arrray of sprite references
  //this selects and returns a level from the levels used for mechanics and bug testing
  demoSelecter( level){
    let a = [[[[[7,1,1,],],],],this.demoMapSelecter(level),];
    switch(level){
      default:
        return a;
    }
  }
  
  //this selects and returns a level from the levels used for menu world
  menuSelecter( level){
    let w1 = [[[[[7,1,1,],],],],this.menuMapSelecter(level),];
    let w2 = [[[[[7,1,1,],],],],this.menuMapSelecter(level),];
    let w3 = [[[[[7,1,1,],],],],this.menuMapSelecter(level),];
    let w4 = [[[[[7,1,1,],],],],this.menuMapSelecter(level),];
    let w5 = [[[[[7,1,1,],],],],this.menuMapSelecter(level),];
    let w6 = [[[[[7,1,1,],],],],this.menuMapSelecter(level),];
    switch(level){
      case 1:
        return w1;
      case 2:
        return w2;
      case 3:
        return w3;
      case 4:
        return w4;
      case 5:
        return w5;
      case 6:
        return w6;
      default:
        return w1;
    }
  }
  
  //this selects and returns a level from the levels used for playing the main game
  levelSelecter(level){
    let s1 = [[[[[4,1,1,],],],],this.levelMapSelecter(level),];
    let s2 = [[[[[4,1,1,],],],],this.levelMapSelecter(level),];
    let s3 = [[[[[3,1,1,],],],],this.levelMapSelecter(level),];
    let s4 = [[[[[4,1,1,],],],],this.levelMapSelecter(level),];
    let s5 = [[[[[5,1,1,],],],],this.levelMapSelecter(level),];
    let s6 = [[[[[6,1,1,],],],],this.levelMapSelecter(level),];
    let s7 = [[[[[7,1,1,],],],],this.levelMapSelecter(level),];
    let s8 = [[[[[7,1,1,],],],],this.levelMapSelecter(level),];
    let s9 = [[[[[9,1,1,],],],],this.levelMapSelecter(level),];
    let t3 = [[[[[3,1,3,],],],],this.levelMapSelecter(level),];
    let t4 = [[[[[4,1,3,],],],],this.levelMapSelecter(level),];
    let c1 = [[[[[3,1,2,],],],],this.levelMapSelecter(level),];
    let c2 = [[[[[4,1,2,],],],],this.levelMapSelecter(level),];
    let c3 = [[[[[4,1,2,],],],],this.levelMapSelecter(level),];
    let c4 = [[[[[5,1,2,],],],],this.levelMapSelecter(level),];
    let c5 = [[[[[6,1,2,],],],],this.levelMapSelecter(level),];
    let c6 = [[[[[6,1,2,],],],],this.levelMapSelecter(level),];
    let c7 = [[[[[6,1,2,],],],],this.levelMapSelecter(level),];
    let c8 = [[[[[7,1,2,],],],],this.levelMapSelecter(level),];
    let c9 = [[[[[7,1,2,],],],],this.levelMapSelecter(level),];
    switch(level){
      case 1:
        return s1;
      case 2:
        return s2;
      case 3:
        return s3;
      case 4:
        return s4;
      case 5:
        return s5;
      case 6:
        return s6;
      case 7:
        return s7;
      case 8:
        return s8;
      case 9:
        return s9;
      case 10:
        return c1;
      case 11:
        return c2;
      case 12:
        return c3;
      case 13:
        return c4;
      case 14:
        return c5;
      case 15:
        return c6;
      case 16:
        return c7;
      case 17:
        return c8;
      case 18:
        return c9;
      case 19:
        return t3;
      default:
        return t4;
    }
  }
  
  ////this selects and returns a level from the levels maps used for mechanics and bug testing
  demoMapSelecter(level){
    let a = [[
      [[0,0,0,0,0,0,0,],[0,3,0,0,0,0,0,],[0,3,0,0,0,0,0,],[0,0,0,0,0,0,0,],[0,0,0,0,0,0,0,],[0,4,0,1,0,2,0,],[174,0,0,0,0,0,0,],],],];
    switch(level){
      default:
        return a;
    }
  }
  
  //this selects and returns a level map from the levels used for menu world
  menuMapSelecter(level){
    let w1 = [[
      [[0,0,0,0,0,0,0,],[0,54,0,64,0,74,0,],[0,0,0,0,0,0,0,],[0,84,0,94,0,104,0,],[0,0,0,0,0,0,0,],[0,114,0,124,0,134,0,],[0,0,0,0,0,0,424,],],],];
    let w2 = [[
      [[0,0,0,0,0,0,0,],[0,514,0,524,0,534,0,],[0,0,0,0,0,0,0,],[0,544,0,554,0,564,0,],[0,0,0,0,0,0,0,],[0,574,0,584,0,594,0,],[434,0,0,0,0,0,0,],],],];
    let w3 = [[
      [[0,0,0,0,0,0,0,],[0,54,0,64,0,74,0,],[0,0,0,0,0,0,0,],[0,84,0,94,0,104,0,],[0,0,0,0,0,0,0,],[0,114,0,124,0,134,0,],[434,0,0,0,0,0,424,],],],];
    let w4 = [[
      [[0,0,0,0,0,0,0,],[0,54,0,64,0,74,0,],[0,0,0,0,0,0,0,],[0,84,0,94,0,104,0,],[0,0,0,0,0,0,0,],[0,114,0,124,0,134,0,],[434,0,0,0,0,0,424,],],],];
    let w5 = [[
      [[0,0,0,0,0,0,0,],[0,54,0,64,0,74,0,],[0,0,0,0,0,0,0,],[0,84,0,94,0,104,0,],[0,0,0,0,0,0,0,],[0,114,0,124,0,134,0,],[434,0,0,0,0,0,424,],],],];
    let w6 = [[
      [[0,0,0,0,0,0,0,],[0,54,0,64,0,74,0,],[0,0,0,0,0,0,0,],[0,84,0,94,0,104,0,],[0,0,0,0,0,0,0,],[0,114,0,124,0,134,0,],[434,0,0,0,0,0,0,],],],];
    
    switch(level){
      case 1:
        return w1;
      case 2:
        return w2;
      case 3:
        return w3;
      case 4:
        return w4;
      case 5:
        return w5;
      case 6:
        return w6;
      default:
        return w1;
    }
  }
  
  //this selects and returns a level map from the levels used for playing the main game
  levelMapSelecter(level){
    let t4 = [[
      [[0,0,1,0,],  [0,0,1,0,],  [1,0,0,0,],  [0,1,0,1,],],
      [[1,1,0,0,],  [0,0,0,1,],  [0,1,1,1,],  [0,0,1,0,],],
      [[0,0,0,1,],  [0,1,1,0,],  [1,0,0,0,],  [0,1,0,1,],],
      [[1,0,0,1,],  [0,0,1,1,],  [0,1,1,0,],  [0,0,1,0,],],],
      [
      [[0,1,1,1,],  [1,0,0,1,],  [1,1,0,1,],  [0,0,1,0,],],
      [[0,1,0,0,],  [1,1,1,0,],  [1,2,1,1,],  [0,1,0,1,],],
      [[1,0,1,1,],  [1,1,0,0,],  [0,0,1,1,],  [1,1,0,1,],],
      [[0,0,1,0,],  [0,1,0,1,],  [1,1,0,1,],  [0,0,1,1,],],],
      [
      [[0,0,1,1,],  [0,1,1,0,],  [1,0,1,1,],  [0,1,1,0,],],
      [[1,1,0,1,],  [0,0,1,1,],  [1,1,0,0,],  [1,0,1,1,],],
      [[0,1,0,0,],  [1,0,1,0,],  [1,1,0,1,],  [1,1,1,0,],],
      [[0,0,0,1,],  [0,1,1,0,],  [0,0,1,1,],  [1,0,0,0,],],],
      [
      [[1,0,0,0,],  [0,1,1,1,],  [1,1,0,1,],  [0,1,0,0,],],
      [[0,0,1,0,],  [1,1,1,0,],  [0,1,0,0,],  [1,0,1,1,],],
      [[0,0,1,0,],  [1,1,0,1,],  [0,1,1,0,],  [1,0,0,1,],],
      [[1,1,1,0,],  [1,0,0,1,],  [0,0,1,0,],  [0,1,1,1,],],],];
    
    let t3 = [[
      [[0,0,0,],  [1,1,1,],  [0,0,0,],],
      [[0,1,0,],  [0,1,1,],  [0,0,1,],],
      [[1,0,0,],  [0,0,0,],  [0,0,1,],],],
      [
      [[1,1,1,],  [0,1,1,],  [0,0,1,],],
      [[0,1,1,],  [1,2,0,],  [0,1,0,],],
      [[0,0,0,],  [1,1,1,],  [0,1,0,],],],
      [
      [[0,0,0,],  [0,0,0,],  [1,1,0,],],
      [[1,0,0,],  [0,1,1,],  [0,0,1,],],
      [[0,0,1,],  [0,1,0,],  [1,0,0,],],],];
      
      let s1 = [[
      [[0,1,2,0,],[0,1,1,0,],[0,1,0,0,],[0,0,0,1,],],],];
      
      let s2 = [[
      [[0,1,3,0,],[0,1,0,1,],[0,1,0,0,],[0,24,1,2,],],],];
      
      let s3 = [[
      [[0,1,0,],[0,1,2,],[0,3,34,],],],];
      
      let s4 = [[
      [[0,3,44,0,],[1,0,1,1,],[0,0,1,2,],[3,0,0,0,],],],];
      
      let s5 = [[
      [[0,0,0,0,5,],[3,3,0,0,0,],[144,5,0,0,0,],[0,1,5,0,144,],[5,2,1,0,5,],],],];
      
      let s6 = [[
      [[0,0,0,1,0,2,],[6,1,0,1,0,1,],[154,1,0,1,0,0,],[1,0,0,0,1,1,],[5,0,0,0,0,0,],[5,5,5,164,5,5,],],],];
      
      let s7 = [[
      [[0,0,0,1,1,1,2,],[0,194,0,6,0,0,1,],[0,0,0,6,214,0,1,],[1,6,6,1,5,5,1,],[0,0,0,6,0,0,0,],[6,184,0,6,0,204,0,],[174,6,0,1,5,5,5,],],],];
      
      let s8 = [[
      [[6,294,0,6,1,0,224,],[294,0,0,6,5,5,1,],[6,6,6,6,5,1,234,],[6,274,6,6,5,244,5,],[284,6,0,6,5,1,254,],[6,264,0,6,5,5,5,],[174,6,6,6,1,0,2,],],],];
      
      let s9 = [[
      [[0,5,6,6,6,0,0,6,304,],[0,317,364,6,1,0,0,0,6,],[0,354,324,6,1,0,5,5,5,],[0,5,6,6,1,0,0,0,334,],[6,1,1,1,1,1,1,1,1,],[0,3,374,1,1,6,3,6,414,],[397,0,1,0,1,6,3,0,6,],[1,0,384,1,1,1,1,1,1,],[6,407,5,344,1,2,1,0,0,],],],];
      
      let c1 = [[
        [[444,0,454,],[1,1,1,],[444,0,2,],],
        [[0,0,0,],[7,7,7,],[0,1,1,],],
        [[444,0,454,],[0,0,0,],[454,0,444,],],],];
        
      let c2 = [[
        [[444,6,6,454,],[1,1,1,1,],[1,1,0,0,],[454,444,1,2,],],
        [[6,0,474,6,],[1,1,1,1,],[1,1,1,1,],[0,0,1,1,],],
        [[6,3,0,6,],[1,1,1,1,],[1,1,1,1,],[0,0,0,0,],],
        [[444,6,6,454,],[6,3,0,6,],[6,0,464,6,],[444,6,6,454,],],],];
      
      let c3 = [[
        [[0,6,444,454,],[3,6,444,454,],[0,6,444,454,],[0,6,444,454,],],
        [[0,3,6,6,],[0,3,6,6,],[0,3,6,6,],[0,3,6,6,],],
        [[6,0,0,0,],[6,0,0,0,],[0,0,0,0,],[1,1,0,0,],],
        [[494,6,0,0,],[504,6,0,0,],[484,0,0,0,],[2,1,0,0,],],],];
        
      let c4 = [[
        [[0,0,6,444,454,],[0,0,6,444,454,],[6,6,6,6,6,],[0,0,6,444,454,],[0,0,6,444,454,],],
        [[6,0,0,6,6,],[0,3,3,6,6,],[1,1,1,1,1,],[0,614,614,6,6,],[0,0,0,6,6,],],
        [[444,6,0,6,454,],[6,3,0,3,6,],[1,1,0,1,1,],[0,614,0,614,0,],[0,0,5,0,0,],],
        [[6,0,0,0,6,],[0,0,3,3,0,],[1,1,1,1,1,],[0,0,614,614,0,],[1,1,0,0,0,],],
        [[0,0,0,0,0,],[0,0,0,0,0,],[1,1,1,1,1,],[0,0,0,0,0,],[2,1,0,0,0,],],],];
        
      let c5 = [[
        [[0,6,6,6,444,454,],[444,6,6,6,6,454,],[444,6,6,6,6,454,],[444,6,6,6,6,454,],[444,6,6,6,6,454,],[6,6,6,6,6,6,],],
        [[444,6,6,6,6,454,],[6,3,0,0,6,6,],[6,6,6,0,6,6,],[6,6,6,6,6,6,],[6,6,6,6,6,6,],[6,6,6,6,6,6,],],
        [[444,6,0,604,6,454,],[6,6,6,6,6,6,],[6,6,6,0,0,6,],[6,6,6,6,0,6,],[6,6,6,6,6,6,],[6,6,6,6,6,6,],],
        [[444,6,0,6,6,454,],[6,6,6,0,6,6,],[6,0,0,6,6,6,],[6,6,0,6,0,6,],[6,6,0,0,0,6,],[6,6,6,6,6,6,],],
        [[444,6,0,6,6,454,],[6,0,0,6,6,6,],[6,0,6,6,6,6,],[6,6,6,6,6,6,],[6,6,6,6,6,1,],[6,6,6,6,1,1,],],
        [[444,6,6,6,6,454,],[6,6,6,6,6,6,],[6,6,6,6,6,6,],[6,6,6,6,6,6,],[6,6,6,6,1,1,],[6,6,6,6,1,2,],],],];
        
      let c6 = [[
        [[0,0,1,1,1,1,],[1,0,0,0,454,0,],[1,0,1,1,1,1,],[1,0,1,1,0,0,],[1,0,0,454,1,0,],[1,1,1,1,0,0,],],
        [[1,5,0,0,0,1,],[0,1,1,1,0,1,],[0,5,0,0,0,0,],[0,1,0,1,0,0,],[0,1,1,6,1,0,],[454,0,0,0,1,0,],],
        [[0,1,1,1,0,454,],[0,0,444,0,0,1,],[0,1,1,1,0,0,],[1,454,1,1,1,0,],[1,444,0,0,1,0,],[0,1,1,1,1,1,],],
        [[0,0,0,1,1,5,],[0,1,1,1,0,444,],[1,0,0,454,1,0,],[1,444,5,1,0,0,],[0,1,1,0,0,1,],[0,0,0,0,454,1,],],
        [[0,0,1,0,0,454,],[0,0,1,0,1,1,],[0,1,1,444,1,1,],[0,1,0,1,5,1,],[0,0,0,1,444,1,],[0,1,1,0,1,1,],],
        [[0,1,0,1,5,444,],[1,0,444,1,1,0,],[0,0,0,5,1,0,],[0,1,1,0,1,0,],[0,0,1,0,1,0,],[1,0,0,454,1,2,],],],];
        
      let c7 = [[
        [[6,814,6,824,6,5,],[6,6,6,6,6,834,],[6,6,0,0,0,6,],[804,6,0,6,6,844,],[6,6,0,6,6,6,],[174,6,0,6,444,454,],],
        [[1,0,1,1,1,1,],[1,1,1,1,1,1,],[1,1,1,1,1,1,],[1,1,1,1,1,1,],[1,1,1,1,1,1,],[1,1,1,1,6,6,],],
        [[1,777,1,5,787,6,],[767,5,3,1,1,5,],[1,747,5,0,0,1,],[3,1,6,737,0,787,],[754,5,1,0,6,6,],[6,797,5,6,444,454,],],
        [[6,0,0,0,0,0,],[0,674,684,694,704,0,],[0,664,5,5,714,0,],[0,654,5,5,724,0,],[0,647,634,627,6,6,],[0,0,0,6,444,454,],],
        [[0,1,1,1,1,1,],[1,1,1,1,1,1,],[1,1,1,1,1,1,],[1,1,1,1,1,1,],[1,1,1,1,1,1,],[1,1,1,1,6,6,],],
        [[2,0,5,0,0,1,],[5,5,5,5,5,0,],[5,5,5,5,5,0,],[0,1,0,5,0,0,],[1,5,5,5,5,5,],[0,0,1,0,444,454,],],],];
        
      let c8 = [[
        [[0,0,0,0,0,0,0,],[0,0,0,0,0,0,0,],[0,0,0,0,0,0,0,],[0,0,0,0,0,0,0,],[0,0,0,0,0,0,0,],[6,0,0,0,0,0,6,],[444,5,0,0,0,5,454,],],
        [[0,0,0,0,0,0,0,],[0,0,0,0,0,0,0,],[0,0,0,0,0,0,0,],[0,0,0,0,0,0,0,],[0,0,0,0,0,0,0,],[0,6,0,0,0,6,0,],[6,454,5,0,5,444,6,],],
        [[0,0,0,0,0,0,0,],[0,0,0,0,0,0,0,],[0,0,0,0,0,0,0,],[0,0,0,0,0,0,0,],[0,0,0,0,0,0,0,],[0,6,0,0,0,6,0,],[6,454,5,0,5,444,6,],],
        [[0,0,0,0,0,0,0,],[0,0,0,0,0,0,0,],[0,0,0,0,0,0,0,],[0,0,0,0,0,0,0,],[0,0,0,0,0,0,0,],[0,6,0,0,0,6,0,],[6,454,5,0,5,444,6,],],
        [[0,0,0,0,0,0,0,],[0,0,0,0,0,0,0,],[0,0,0,0,0,0,0,],[0,0,0,0,0,0,0,],[0,0,0,0,0,0,0,],[0,6,0,0,0,6,0,],[6,454,5,0,5,444,6,],],
        [[0,0,0,0,0,0,0,],[0,0,0,0,0,0,0,],[0,0,0,0,0,0,0,],[0,0,0,0,0,0,0,],[0,0,0,0,0,0,0,],[0,6,0,0,0,6,0,],[6,454,5,0,5,444,6,],],
        [[2,0,0,0,0,0,0,],[0,0,0,0,0,0,0,],[0,0,0,0,0,0,0,],[0,0,0,0,0,0,0,],[0,0,0,0,0,0,0,],[6,0,0,0,0,0,6,],[454,5,0,0,0,5,444,],],],];
        
      let c9 = [[
        [[0,0,0,1,0,0,0,],[0,0,0,1,0,0,0,],[0,0,454,1,0,0,0,],[0,0,0,0,0,0,0,],[0,0,0,1,0,0,0,],[0,0,0,1,0,0,0,],[0,0,0,1,0,0,0,],],
        [[0,0,0,1,0,0,0,],[0,0,0,1,0,0,0,],[0,0,0,1,0,0,0,],[0,0,0,0,0,0,0,],[0,0,0,1,0,0,0,],[0,0,0,1,0,0,0,],[0,0,0,1,0,0,0,],],
        [[0,0,0,1,0,0,0,],[0,0,0,1,0,0,0,],[0,0,2,1,0,0,0,],[1,1,1,1,1,1,1,],[0,0,0,1,0,0,0,],[0,0,0,1,0,0,0,],[0,0,0,1,0,0,0,],],
        [[1,1,1,1,1,1,1,],[1,1,1,1,1,1,1,],[1,1,1,1,1,1,1,],[1,1,1,1,1,1,1,],[1,1,1,1,1,1,1,],[1,1,1,1,1,1,1,],[1,1,1,1,1,1,1,],],
        [[0,0,0,1,0,0,0,],[0,0,0,1,0,0,0,],[0,0,0,1,0,0,0,],[1,1,1,1,1,1,1,],[0,0,0,1,0,0,0,],[0,0,0,1,0,0,0,],[0,0,0,1,0,0,0,],],
        [[0,0,0,1,0,0,0,],[0,0,0,1,0,0,0,],[0,0,0,1,0,0,0,],[1,1,1,1,1,1,1,],[0,0,0,1,0,0,0,],[0,0,0,1,0,0,0,],[0,0,0,1,0,0,0,],],
        [[0,0,0,1,0,0,0,],[0,0,0,1,0,0,0,],[0,0,0,1,0,0,0,],[1,1,1,1,1,1,1,],[0,0,0,1,0,0,0,],[0,0,0,1,0,0,0,],[0,0,0,1,0,0,0,],],],];
      
    switch(level){
      case 1:
        return s1;
      case 2:
        return s2;
      case 3:
        return s3;
      case 4:
        return s4;
      case 5:
        return s5;
      case 6:
        return s6;
      case 7:
        return s7;
      case 8:
        return s8;
      case 9:
        return s9;
      case 10:
        return c1;
      case 11:
        return c2;
      case 12:
        return c3;
      case 13:
        return c4;
      case 14:
        return c5;
      case 15:
        return c6;
      case 16:
        return c7;
      case 17:
        return c8;
      case 18:
        return c9;
      case 19:
        return t3;
      default:
        return t4;
    }
  }
  
}
