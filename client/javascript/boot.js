var bootState = {};

/**
    A method that inits a state and passes values from other states
    @param {string} arg - An argument that is passed from the previous state
*/
bootState.init = function(arg){
    bootState.data = arg;
    return arg * 4;
};

bootState.create = function(){
    //Initial GameSystem (Arcade, P2, Ninja)
    game.physics.startSystem(Phaser.Physics.ARCADE);

    //Initial Load State
    bootState.data += "----> and boot!";
    game.state.start('load',true,false,bootState.data);
    //(state-destination,clear world(clears memory),clear cache(clears assets),custom parameters)
};
