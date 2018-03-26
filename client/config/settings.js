var _settings =  {
    "stage": {
        width: 720,
        height: 480
    },
    "difficulty": {
        easy: {
            esm: 0.75,
            ecdm: 1.25
        },
        medium: {
            esm: 1.0,
            ecdm: 1.0
        },
        hard: {
            esm: 1.25,
            ecdm: 0.75
        }
    },
    "player":{
        "default":{
            sprKey : "playerSprite.png",
            startX : 0.2,
            startY : 0.6,
            horSpd : 0,
            vertSpd : -300,
            gravity : 500
        }
    },
    "enemies":{
        "bats":{
            key: "bat",
            amount: 5,
            frame: "Bat_Frame_00",
            fNum : [1,4],
            animeKey: "batFly",
            vx: -300,
            intervals: 1500,
        }
    }
};
