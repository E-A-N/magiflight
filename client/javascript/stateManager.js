/*
For Fullscreen put this code:

var w = window.innerWidth * window.devicePixelRatio,
    h = window.innerHeight * window.devicePixelRatio;
*/

var game = new Phaser.Game(
    _settings.stage.width,
    _settings.stage.height,
    Phaser.CANVAS,
    'gameContainer'
);

game.state.add('boot', bootState);
game.state.add('load', loadState);
game.state.add('menu', menuState);
game.state.add('charSelect',charSelectState);
game.state.add("testStage", testStage);
game.state.start('boot');
