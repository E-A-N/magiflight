var menuState = {};
menuState.init = function(){};
menuState.create = function(){
      // game.add.plugin(Phaser.Plugin.Debug);
      // game.add.plugin(Phaser.Plugin.Inspector);
      // game.add.plugin(PhaserSuperStorage.StoragePlugin);
      // game.add.plugin(PhaserInput.Plugin);

      //assigned sprite to var logo so I can enable input
      var logo = game.add.sprite((game.width-676)/2, 0, "logo","magiFlightLogoCropped.png");
      logo.alpha = 0;
      var tween = game.add.tween(logo)
      .to({alpha: 1},2000,"Linear",true);

      var start = game.add.sprite((game.width-250)/2,logo.position.y+350,"start","start.png");
      start.alpha = 0;
      var tween2 = game.add.tween(start)
          .to({alpha: 1},1000,"Linear",false)
          .to({alpha: 1},750,"Linear",false)
          .to({alpha: 0},1000,"Linear",true)
          .loop(true);

      //when anything on this screen is clicked go to next Stage
      game.input.onDown.add(menuState.nextStage);

};
//this is the function it calls
menuState.nextStage = function(){
      game.state.start("charSelect");
};
