class Scene1 extends Phaser.Scene {
    constructor(){
        super("bootGame")
    }

    create(){
        this.river = this.add.tileSprite(0, 0,config.width, config.height, "river");
        this.river.setOrigin(0, 0);

        this.background = this.add.tileSprite(0,0,config.width, 342, "background");
        this.background.setOrigin(0,0);
        this.background.setScale(1, 0.3);

        this.bottle1 = this.add.sprite(config.width - 50, config.height / 2 +135, "bottle1");
        this.bottle1.setScale(0.1);

        this.bottle2 = this.add.sprite(config.width - 50, config.height / 2 -100, "bottle2");
        this.bottle2.setScale(0.125);

        this.can = this.add.sprite(config.width - 50, config.height / 2 -128, "can");
        this.can.setScale(0.1);

        this.washer = this.add.sprite(config.width -50, config.height / 2 +100, "washer");
        this.washer.setScale(0.1);


        this.bottle1.setInteractive();
        this.bottle2.setInteractive();
        this.washer.setInteractive();
        this.can.setInteractive();

        this.physics.world.setBoundsCollision();

        this.player = this.physics.add.image(0, config.height/2, "player");
        this.player.setScale(0.2);
        this.player.setCollideWorldBounds(true);
    
        this.physics.world.enable(this.player);
        this.physics.world.enable(this.bottle1);
        this.physics.world.enable(this.bottle2);
        this.physics.world.enable(this.can);
        this.physics.world.enable(this.washer);

        this.WKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        this.AKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.SKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        this.DKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);

        this.points = this.physics.add.group();
        this.points.add(this.bottle1);
        this.points.add(this.bottle2);
        this.points.add(this.can);
        this.points.add(this.washer);

        this.physics.add.overlap(this.player, this.points, this.collisionOccur, null, this);

        this.score = 0;
        this.scoreLabel = this.add.text(20, 10, "SCORE: " + this.score, {
            font: "35px Arial",
            fill: "black"
        });
    }

    update(){
        this.river.tilePositionX += 1;
        this.background.tilePositionX += 1;
        
        this.moveGarbage(this.bottle1, 2);
        this.moveGarbage(this.bottle2, 2);
        this.moveGarbage(this.can, 3);
        this.moveGarbage(this.washer, 3);

        this.movePlayerManager();

        this.scoreLabel.setText( "SCORE: " + this.score);

    }

    moveGarbage(garbage, speed){
        garbage.x -= speed;
        if(garbage.x < 0){
            this.ResetPos(garbage);
        }
    }

    collisionOccur(player, points) {
        this.ResetPos(points);
        if(points == this.bottle1){
            this.score += 1;
        } else if(points == this.bottle2){
            this.score += 2;
        } else if(points == this.washer){
            this.score += 3;
        } else if(points == this.can){
            this.score += 4;
        }
    }

    ResetPos(garbage) {
        garbage.x = config.width;
        var randomY = Phaser.Math.Between(config.height / 2 - 128, config.height);
        garbage.y = randomY;
    }

    movePlayerManager() {
        this.player.setVelocity(0);
    
        if (this.AKey.isDown) {
          this.player.setVelocityX(-gameSettings.playerSpeed);
        } else if (this.DKey.isDown) {
          this.player.setVelocityX(gameSettings.playerSpeed);
        }
    
        if (this.WKey.isDown) {
          this.player.setVelocityY(-gameSettings.playerSpeed);
        } else if (this.SKey.isDown) {
          this.player.setVelocityY(gameSettings.playerSpeed);
        }
    }
}

