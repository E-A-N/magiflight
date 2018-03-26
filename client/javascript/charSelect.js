var charSelectState = {};

charSelectState.create = function(){
  var midGap = 40;
  oniSelect = game.add.sprite((game.width/2)-200-midGap,40,"oniSelect","placeholderSelectOni.png");
  oniSelect.inputEnabled = true;
  birdieSelect = game.add.sprite((game.width/2+midGap),40,"oniSelect","placeholderSelectBirdie.png");
  birdieSelect.inputEnabled = true;
  border = game.add.sprite(0,0,"border","placeholderBorder2.png");
  border.kill();

  oniSelect.events.onInputDown.add(charSelectState.nextStage);
  birdieSelect.events.onInputDown.add(charSelectState.nextStage);
};

charSelectState.update = function(){
  charSelectState.hoverEvents();
};


/**
* On the event that pointer hovers over a specific sprite
* The alpha will change back to 1, by default unselected
* will have a lower alpha (be darker)
*/
charSelectState.hoverEvents = function(){
  var borderX = (oniSelect.width-border.width)/2;
  if(oniSelect.input.pointerOver()){
    border.reset(oniSelect.x + borderX,15);
  }
  else if (birdieSelect.input.pointerOver()){
    border.reset(birdieSelect.x + borderX,15);
  }
  else{
    border.kill();
  }
};
/**
* When called, will change the game state to "testStage"
*/
charSelectState.nextStage = function(){
  //game.state.start("testStage");
  game.state.start("testStage");
};
