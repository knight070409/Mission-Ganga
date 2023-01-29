var gameSettings = {
    playerSpeed: 200,
}

var config = {
    width: 1260,
    height: 546,
    backgroundColor: 0x000000,
    scene: [Load, Scene1],
    physics: {
        default: "arcade",
        arcade: {
            debug: false
        }
    }
}

var game = new Phaser.Game(config);