var testStage = {};

testStage.create = function() {

    var bats = new customPool(_settings.enemies.bats);
    bats.vx = bats.vx * _settings.difficulty.hard.esm //default is medium
    var b = bats.deploy(game.width,200);

    var startX = _settings.player.default.startX;
    var startY = _settings.player.default.startY;
    testStage.hero = game.add.sprite(game.width * startX, game.height * startY, "hero", _settings.player.default.sprKey);
    game.physics.arcade.enable(testStage.hero);
    testStage.hero.body.allowGravity = true;

    testStage.hero.body.collideWorldBounds = true;
    testStage.hero.body.gravity.y = _settings.player.default.gravity;

    game.stage.backgroundColor = "#00ffff";

    testStage.platforms = game.add.physicsGroup();
    testStage.platforms.alpha = 0.25;

    testStage.platforms.create(0, game.height * 0.9,"ground0","ground0.png");
    //testStage.platforms.scale.setTo(2,1);
    testStage.platforms.create(300, game.height * 0.9,"ground0","ground0.png");
    testStage.platforms.create(600, game.height * 0.9,"ground0","ground0.png");
    testStage.platforms.setAll("body.immovable", true);


    //For debugging
    game.input.onDown.add(function(){
        var vertSpd = _settings.player.default.vertSpd;
        testStage.hero.body.velocity.y = vertSpd;
    });
};

testStage.update = function() {
    testStage.playerUpdate();
};

testStage.playerUpdate = function(){
    var plyr = testStage.hero;
    game.physics.arcade.collide(plyr, testStage.platforms);

    plyr.body.velocity.x = 0;
    // plyr.body.velocity.y = 0; NOTE: setting y velocity to 0 negates gravity
};
