function setup() {
    createCanvas(500, 500);
    background("#000000");
}

var emergency = 0;
var eventText = ""
var input = [];
var enter = ">"
var did = 0;
var display = "";
var direction = 0;
var nothing = "";
var inv = [];
var D20 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
var events = [{
   "name": "A WORG IS HERE","what" : "WORG", "specific" : 10, "weak" : "sword"},{
   "name": "","what" : "what", "specific" : 15, "weak" : "sword"},{
   "name": "","what" : "what", "specific" : 20, "weak" : "sword"},{
   "name": "","what" : "what", "specific" : 25, "weak" : "sword"}];
var cmd = [{
   "name": "NORTH","action" : "move", "specific" : "north"},{
   "name": "EAST","action" : "move", "specific" : "east"},{
   "name": "N","action" : "move", "specific" : "north"},{
   "name": "E","action" : "move", "specific" : "east"},{
   "name": "S","action" : "move", "specific" : "south"},{
   "name": "W","action" : "move", "specific" : "west"},{
   "name": "SOUTH","action" : "move", "specific" : "south"},{
   "name": "WEST","action" : "move", "specific" : "west"},{
   "name": "LOOK","action" : "look", "specific" : ""},{
   "name": "HELP","action" : "help", "specific" : ""},{
   "name": "TAKE","action" : "take", "specific" : ""},{
   "name": "DROP","action" : "replace", "specific" : ""},{
   "name": "INVENTORY","action" : "all", "specific" : ""},{
   "name": "ATTACK","action" : "attack", "specific" : ""},{
   "name": "INSPECT","action" : "READ", "specific" : ""},{
   "name": "READ","action" : "READ", "specific" : ""}];
var item = [{
   "name": "BOOK","action" : "", "specific" : "Yeah, I have no idea what to write in this book"},{
   "name": "HAT","action" : "", "specific" : "It is a large fadora"},{
   "name": "JOBE","action" : "", "specific" : "... ~ JOBE ~ ..."},{
   "name": "SWORD","action" : "", "specific" : "good aginst WORGs"},{
   "name": "HAMMER","action" : "", "specific" : "It's hammer time"}];
var gameState = "'LOOK' To Begin";
var details = "Type 'HELP' for a list of commands";
var QR = "";
var rooms = [{
  "name":"start room",
  "description":"outside of the school",
  "north":1,
  "east":3,
  "south":"null",
  "west":"null",
  "spec":"",
  "event":"",
  "contains":[item[0],item[1]]},{
    
  "name":"end room",
  "description":"the pologs",
  "north":"null",
  "east":2,
  "south":0,
  "west":"null",
  "spec":"encounter",
  "event": 0,
  "contains":[item[1]]},{
    
  "name":"field north",
  "description":"outside",
  "north":"null",
  "east":"null",
  "south":3,
  "west":1,
  "spec":"",
  "event":"",
  "contains":[item[2]]},{
    
  "name":"inside home",
  "description":"home",
  "north":2,
  "east":"null",
  "south":"null",
  "west":0,
  "spec":"",
  "event":"",
  "contains":[item[3]]},{
    
  "name":"Gates of Hell",
  "description":"You are dead and you stand before the Gates of Hell",
  "north":"null",
  "east":"null",
  "south":"null",
  "west":"null",
  "spec":"",
  "event":"",
  "contains":[]}
];

var currentRoom = rooms[0];
var currentEvent = "";


function keyPressed() {
   if (keyCode == 8) {
     input = shorten(input);
   } else if (keyCode == 13) {
     search(0,0); 
   } else {
    input.push(key);
   }
   display = join(input, nothing);
}

function search(when,how) {
  QR = "";
  did = 0;
  for (i=when;i<=(input.length-1);i++){
    if (input[i] == " "){
      //search
      if (how == 0) {
        for (j=0;j<=(cmd.length-1);j++){
          if (QR == cmd[j].name) {
            does(cmd[j],i);
            did++;
          }
        }
      } else if (how == 1){
        for (k=0;k<=(item.length-1);k++){
          if (QR == item[k].name) {
            takeItem(item[k]);
            did++;
          }
        }
      } else if (how == 4){
        for (k=0;k<=(inv.length-1);k++){
          if (QR == inv[k].name) {
            gameState = inv[k].name;
            details = inv[k].specific;
            did++;
          }
        }
      } else if (how == 2){
        for (j=0;j<=(inv.length-1);j++){
          if (QR == inv[j].name) {
            return inv[j];
            did++;
          }
        }
      } else if (how == 3){
        for (j=0;j<=(events.length-1);j++){
          if (QR == events[j].what) {
            return events[j];
            did++;
          }
        }
      }
      QR = "";
    } else {
      QR = QR + input[i];
    }
  }
  if (how == 0) {
    for (j=0;j<=(cmd.length-1);j++){
      if (QR == cmd[j].name) {
        does(cmd[j],i);
        did++;
      }
    }
  } else if (how == 1){
    for (j=0;j<=(item.length-1);j++){
      if (QR == item[j].name) {
        takeItem(item[j]);
        did++;
      }
    }
  } else if (how == 4){
    for (j=0;j<=(inv.length-1);j++){
      if (QR == inv[j].name) {
        gameState = inv[j].name;
        details = inv[j].specific;
        did++;
      }
    }
  } else if (how == 2){
    for (j=0;j<=(inv.length-1);j++){
      if (QR == inv[j].name) {
        return inv[j];
        did++;
      }
    }
  } else if (how == 3){
    for (j=0;j<=(events.length-1);j++){
      if (QR == events[j].what) {
        return events[j];
        did++;
      }
    }
  }
  if (did < 1){
     gameState = "I don't understand " + display;
     details = "";
     input = [];
     display = "";
     return "null";
  }
}

function fight(ev) {
  if(ev.spec != "win"){
    eventText = ev.name;
    emergency = 5;
    currentEvent = ev;
    enter = " !";
  }
}

function win(){
  currentRoom.event = "";
  eventText = "";
  emergency = 0;
  look();
  enter = ">";
}

function takeItem(what) {
  if(direction == 0) {
    for (h=0;h<=(currentRoom.contains.length-1);h++){
      if(what.name == currentRoom.contains[h].name){
        inv.push(what);
        gameState = ("a " + what.name + " has been added to your inventory");
        if(currentRoom.contains.length !== 1){
          currentRoom.contains.splice(h,1);
        } else {
          currentRoom.contains =[];
        }
        details = "";
        return;
      }
    }
  } else if(direction == 1) {
    for (p=0;p<=(inv.length-1);p++){
      if(what.name == inv[p].name){
        currentRoom.contains.push(what);
        gameState = ("a " + what.name + " has been dropped");
        inv.splice(p,1);
        details = "";
        return;
      }
    }
  }
  gameState = "i don't see a " + what.name;
}


function does(what,when) {
  if(emergency == 5){
    if(what.action == "move"){
      if(random([1,2,3]) == 1){
        move(what);
        eventText = "";
        emergency = 0;
        look();
        if (currentRoom.spec == "encounter"){
          fight(events[currentRoom.event])
        }
      }  else {
        currentRoom = rooms[4];
        eventText = "DEATH";
        emergency = 0;
        look();
        enter = "-"
      }
      currentEvent = "";
    } else if(what.action == "attack") {
      var roll = random(D20);
      var who = search(0, 3);
      if(who == "null"){
        gameState = "Attack what?";
      } else if(who.what !== currentEvent.what){
        gameState = "I don't see a " + who.what;
      } else if(who.what == currentEvent.what){
        var weapon = search(when, 2);
        if(weapon == "null"){
          gameState = "Attack " + who.what + " with what?";
          details = "I don't have one of those!";
        } else if(weapon.name != currentEvent.weak){
          if(roll == 20){
            win();
            details += " you defeated the " + who.what + " with a critical hit";
          } else if(roll > currentEvent.specific){
            win();
            details += " you defeated the " + who.what
          } else if(roll == currentEvent.specific){
            win();
            details += " you just barely defeated the " + who.what
          } else if(roll > (currentEvent.specific - 5)){
            gameState = "You missed, but you dodged " + who.what + "'s counter attack"
          } else if(roll <= (currentEvent.specific - 5)){
            currentRoom = rooms[4];
            eventText = "DEATH";
            emergency = 0;
            look();
            enter = "-";
          }
        } else if(weapon.name == currentEvent.weak){
          if(roll == 20){
            win();
            details += " you defeated the " + who.what + " with a critical hit";
          } else if(roll > (currentEvent.specific-5)){
            win();
            details += " you defeated the " + who.what
          } else if(roll = (currentEvent.specific-5)){
            win();
            details += " you just barely defeated the " + who.what
          } else if(roll > ((currentEvent.specific-5) - 5)){
            gameState = "You missed, but you dodged " + who.what + "'s counter attack"
          } else if(roll <= ((currentEvent.specific-5) - 5)){
            currentRoom = rooms[4];
            eventText = "DEATH";
            emergency = 0;
            look();
            enter = "-";
          }
        }
      }
    } else{
      gameState = "you can't " + what.action + "right now, your fighting"
    }
  } else {
    if(what.action == "move"){
      move(what);
      if (currentRoom.spec == "encounter"){
        fight(events[currentRoom.event])
      }
    } else if(what.action == "READ") {
      if (when == 0){
        gameState = "what should I look at?"
      } else {
        search(when,4);
      }
    } else if(what.action == "take") {
      direction = 0;
      if (when == 0){
        gameState = "take what?"
      } else {
        search(when,1);
      }
    } else if(what.action == "replace") {
      direction = 1;
      if (when == 0){
        gameState = "replace what?"
      } else {
        search(when,1);
      }
    } else if(what.action == "look") {
      look(what,when);
    } else if(what.action == "help") {
      gameState = "HELP";
      details = "North, East, \nSouth, West, \nTake, Drop, \nLook, Inventory, \nRead, Inspect, \nAttack, Help";
    } else if(what.action == "all") {
      var have = "";
      gameState = "your inventory";
      for (i=0;i<=(inv.length-1);i++){
        have += ("\n" + inv[i].name);
      }
      details = have;
    } 
  }
  input = [];
  display = "";
}

function look(what,when) {
  gameState = currentRoom.name;
  if(currentRoom.contains.length > 1){
    var lump = "";
    for (g=0;g<(currentRoom.contains.length-1);g++){
      lump += (" a " + currentRoom.contains[g].name + ",");
    }
    lump += ("and a " + currentRoom.contains[currentRoom.contains.length-1].name);
    details = (currentRoom.description + ". In this room there is " + lump);
  } else if(currentRoom.contains.length == 1){
    details = (currentRoom.description + ". In this room there is a " + currentRoom.contains[0].name);
  } else {
    details = currentRoom.description;
  }
}


function move(what) {
    if(what.specific == "north"){
      if(currentRoom.north != "null") { currentRoom = rooms[currentRoom.north];
        does(cmd[8],0); 
      } else {
        gameState = "there is no way north";
      }
    } else if(what.specific == "east"){
      if(currentRoom.east != "null") { currentRoom = rooms[currentRoom.east];
        does(cmd[8],0); 
      } else {
        gameState = "there is no way east";
      }
    } else if(what.specific == "south"){
      if(currentRoom.south != "null") { currentRoom = rooms[currentRoom.south];
        does(cmd[8],0); 
      } else {
        gameState = "there is no way south";
      }
    } else if(what.specific == "west"){
      if(currentRoom.west != "null") { currentRoom = rooms[currentRoom.west];
        does(cmd[8],0);
      } else {
        gameState = "there is no way west";
      }
    }
}

function draw() {
  background("#000000");
  fill("#222222");
  rect(0, 450, 500, 50);
  textSize(20);
  fill("#dddddd");
  text(enter, 10, 485);
  text(display, 25, 485);
  text(gameState, 50,50);
  fill("#999999");
  text(details, 50,80,450,300);
  fill("#ff9999");
  text(eventText, 50,150,450,300);
}