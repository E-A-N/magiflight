var loadState = {};
//init state
loadState.init = function(){};

//preload state
loadState.preload = function(){
    var loadingLabel = game.add.text(80, 150, 'loading...', {font: '30px Courier', fill: '#fff'});

    //Load your images, spritesheets, bitmaps...
    game.load.atlasJSONHash("logo","client/assets/img/spriteSheet.png","client/assets/img/spriteSheet.json");
    game.load.atlasJSONHash("start","client/assets/img/spriteSheet.png","client/assets/img/spriteSheet.json");
    game.load.atlasJSONHash("oniSelect","client/assets/img/spriteSheet.png","client/assets/img/spriteSheet.json");
    game.load.atlasJSONHash("birdieSelect","client/assets/img/spriteSheet.png","client/assets/img/spriteSheet.json");
    game.load.atlasJSONHash("border","client/assets/img/spriteSheet.png","client/assets/img/spriteSheet.json");
    game.load.atlasJSONHash("ground0","client/assets/img/spriteSheet.png","client/assets/img/spriteSheet.json");
    game.load.atlasJSONHash("hero","client/assets/img/spriteSheet.png","client/assets/img/spriteSheet.json");
    game.load.atlasJSONHash("bat","client/assets/img/spriteSheet.png","client/assets/img/spriteSheet.json");
};

//create state
loadState.create = function (){
    game.stage.setBackgroundColor('#000');
    game.scale.fullScreenScaleMode = Phaser.ScaleManager.EXACT_FIT;
    loadState.data += '----> and load!';
    game.state.start('menu',true,false);
};
