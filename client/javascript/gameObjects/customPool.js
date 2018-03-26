/**
*    @constructor
*    @param {object} args - A config object with keys containing group information
*/
var customPool = function(args = null){

    //Extend Phaser group via prototypal inheritance
    Phaser.Group.call(this, game);
    var self    = this;
    self._initialized = null;
    var key       = args.key;
    var frames     = typeof args.frame !== "undefined" ? args.frame : null;
    var fNum = typeof args.fNum !== "undefined" ? args.fNum : null;
    var animeKey = typeof args.animeKey !== "undefined" ? args.animeKey : null;
    var hasAnimation = typeof fNum !=="undefined" && fNum !== null;
    var canMove = typeof args.vx !== "undefined" || typeof args.vy !== "undefined";

    frames = hasAnimation ? Phaser.Animation.generateFrameNames(frames, fNum[0], fNum[1], ".png") : frames;
    self._frames = frames;
    self._animeKey = args.animeKey;
    self._spriteKey   = args.key;
    self._intervals = args.intervals;
    self.amount = args.amount;
    self.animeSpeed = hasAnimation && typeof args.animeSpeed !== "undefined" ? args.animeSpeed : 30;
    self.randomModifier = hasAnimation && typeof args.randomModifier !== "undefined" ? args.randomModifier : null;
    self.vx = typeof args.vx !== "undefined" ? args.vx : null;
    self.vy = typeof args.vy !== "undefined" ? args.vy : null;
    self.update = (typeof args.update !== "undefined" && typeof args.update === "function") ? args.update : function(){};

    var objPool = game.add.group();
    self.enableBody = true;
    self.physicsBodyType = Phaser.Physics.ARCADE;

    if (args !== null){
        self.init();
    };
};

customPool.prototype = Object.create(Phaser.Group.prototype);
customPool.prototype.constructor = customPool;

customPool.prototype.init = function(){
    var self = this;
    self.createMultiple(self.amount, self._spriteKey);
    self.forEach(function(child){
        var flapSpeed = game.rnd.integerInRange(10, 60);
        child.animations.add(self._animeKey, self._frames, 25, true);
        child.anchor.x = 0.5;
        child.anchor.y = 0.5;
        child.outOfBoundsKill  = true; //phaser engine handles memory for us here
        child.checkWorldBounds = true;
    });

    self._initialized = true;

    var hasIntervals = typeof self.intervals !== undefined && self.intervals !== null
    if (hasIntervals){
        var intervals = self._intervals * _settings.difficulty.hard.ecdm;
        game.time.events.loop(intervals, self.deploy, self);
    }
};

/**
*    Sends a child from the pool into the stage
*     @param {number} x - X axis coordinate to deploy child
*     @param {number} y - Y axis coordinate to deploy child
*     @returns {sprite} the child object.
*/
customPool.prototype.deploy = function(x,y){
    var x = typeof x === "undefined" ? game.width : x;
    var y = typeof y === "undefined" ? Math.floor(Math.random() * game.height) : y;

    var self = this;
    var child = self.getFirstExists(false)
    if (child !== null) {
        self.preDeploy(child,x,y);
    }

    return child;
};

/**
*    This method controls immediate actions a given child (or prop) will take
     before entering (or reentering) the game world.
*     @param {sprite} child - Current sprite that is going to deployed to stage
*     @param {number} x - X axis coordinate to deploy child
*     @param {number} y - Y axis coordinate to deploy child
*     @returns {sprite} the child object.
*/
customPool.prototype.preDeploy = function(child, x, y){
    self = this;
    child.reset(x,y);
    child.play(self._animeKey);
    if (self.vx !== null){
        child.body.velocity.x = self.vx;
    }

    if (self.vy !== null){
        child.body.velocity.y = self.vy;
    }
    return child;
}

customPool.prototype.setUpdate = function(update){
    this.update = update;
}
