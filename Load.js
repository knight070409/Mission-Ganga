class Load extends Phaser.Scene {
    constructor(){
        super("loadScreen")
    }

    preload(){
        this.load.image("Startscene", "assest/scene.png");
        this.load.image("river", "assest/river.png");
        this.load.image("background", "assest/background.png");
        this.load.image("bottle1", "assest/bottle1.png");
        this.load.image("bottle2", "assest/bottle2.png");
        this.load.image("can", "assest/can.png");
        this.load.image("washer", "assest/washer.png");
        this.load.image("player", "assest/player.png");
        this.load.image("log", "assest/log.png");
        this.load.image("log2", "assest/log2.png");
        this.load.image("stone", "assest/stone.png");
        
    }

    create(){
        this.startscene = this.add.sprite(0, 0, "Startscene");
        this.startscene.setScale(1, 0.76)
        this.startscene.setOrigin(0,0);

        this.ENTERKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
    }

    update(){
        if(this.ENTERKey.isDown){
        this.scene.switch("bootGame");
        }
    }
}