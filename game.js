var Preloader = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function Preloader ()
    {
        Phaser.Scene.call(this, { key: 'preloader' });
    },

    preload: function ()
    {    
         this.load.image('imgfinal', 'https://cdn.shopify.com/s/files/1/0769/4313/products/GAMEOVER_copy_1024x1024.jpg?v=1508717540');        
         this.load.image('br', 'assets/sprites/crate32.png');
         this.load.image('ground2', 'http://images6.fanpop.com/image/photos/40700000/Backround-geometry-dash-40776456-250-250.jpg');
         this.load.image('sky', 'https://st2.depositphotos.com/7267546/10689/v/950/depositphotos_106891270-stock-illustration-cartoon-nature-landscape-for-game.jpg');
         this.load.image('final2', 'http://3.bp.blogspot.com/--aDP7X-70Yo/T0epwcsA0EI/AAAAAAAAAjU/D6b1H0gs8_4/s1600/fixe+5+estrelas.jpg');
         this.load.image('final', 'https://images-na.ssl-images-amazon.com/images/I/81MPs6C9M8L._SY355_.png');
         this.load.image('ground', 'https://lh3.googleusercontent.com/-8_3XLw9ontM/VsmYVcGUStI/AAAAAAAAAgE/ZGFffMQDNFw/w318-h318-n-rw/bg_03.png');
         this.load.image('bomb', 'src/games/firstgame/assets/bomb.png');
         this.load.image('sky2', 'https://st2.depositphotos.com/5479200/11693/v/950/depositphotos_116931742-stock-illustration-game-background-2d-application-vector.jpg');
         this.load.image('triangle', 'assets/sprites/triangle.png');
         this.load.image('branco', 'https://madeirasgasometro.vteximg.com.br/arquivos/ids/170727-490-490/pp40-branco-neve-square.jpg?v=636801256712100000');
         this.load.image('back','https://http2.mlstatic.com/piso-de-granito-verde-ubatuba-D_NQ_NP_798225-MLB25401365082_022017-F.jpg');
         this.load.image('play', 'https://http2.mlstatic.com/revestimento-adesivo-decofix-marmore-cinza-2-metros-D_NQ_NP_421311-MLB20503488532_112015-F.jpg');
         this.load.spritesheet('dude', 'src/games/firstgame/assets/dude.png', { frameWidth: 32, frameHeight: 48 });
         this.load.image('tubo', 'assets/sprites/block.png');   
         this.load.audio('drums', ['assets/audio/tech/drums.ogg', 'assets/audio/tech/drums.mp3']);
         this.load.audio('synth2', ['assets/audio/tech/synth2.ogg', 'assets/audio/tech/synth2.mp3']);
         this.load.audio('boden', ['assets/audio/bodenstaendig_2000_in_rock_4bit.mp3', 'assets/audio/bodenstaendig_2000_in_rock_4bit.ogg']);
         this.load.image('reverse','http://www.euvosescrevi.com.br/wp-content/uploads/2016/04/earth.jpg');
         this.load.image('star', 'src/games/firstgame/assets/star.png');
         this.load.setPath('assets/audio/kyobi/');
         this.load.audioSprite('kyobi', 'kyobi.json');
    },

    create: function ()
    {
        this.scene.start('mainmenu');
    }

});

var MainMenu = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function MainMenu ()
    {
        Phaser.Scene.call(this, { key: 'mainmenu' });
        window.MENU = this;
    },

    create: function ()
    {   
        
        vida=3;
        var back= this.add.image(400,300,'back');
        var play= this.add.image(400,250,'play').setScale(0.2);
        var play1;

        play1= this.add.image(400,400,'play').setScale(0.2);

        this.add.text(240, 70, '"The Runner" ', { font: '50px Arial', fill: '#ffffff' });
        this.add.text(337.5, 230, 'PLAY', { font: '50px Courier', fill: '#00000' });
        this.add.text(335, 360, 'HOW', { font: '50px Courier', fill: '#00000' });
        this.add.text(400, 400, 'TO', { font: '50px Courier', fill: '#00000' });

        play1.setInteractive();
        play1.once('pointerup', function () {
            this.scene.start('rules');
        }, this);
        
        play.setInteractive();
        play.once('pointerup', function () {
            this.scene.start('game');
        }, this);
    }
});

var Rules = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function Rules ()
    {
        Phaser.Scene.call(this, { key: 'rules' });
        window.MENU = this;
    },

    create: function ()
    {
       var back= this.add.image(400,300,'back');
       var play3= this.add.image(650,500,'play').setScale(0.2);

       this.add.text(590, 480, 'BACK', { font: '50px Courier', fill: '#000000' });
       this.add.text(20, 40, 'Welcome to "The Runner" ', { font: '50px Times', fill: '#ffffff' });
       this.add.text(60, 115, 'Rules: ', { font: '40px Times', fill: '#ffffff' });
       this.add.text(65, 180, 'The aren´t any rules for this game. Just give your best to', { font: '30px Times', fill: '#ffffff' });
       this.add.text(65, 220, 'complete the maps and DONT USE CHEATS!! ', { font: '30px Times', fill: '#ffffff' });
       this.add.text(70, 300, 'Controls: Up Arrow ', { font: '30px Times', fill: '#ffffff' });
       this.add.text(190, 350, 'Left Arrow   ', { font: '30px Times', fill: '#ffffff' });
       this.add.text(190, 400, 'Right Arrow   ', { font: '30px Times', fill: '#ffffff' });
       this.add.text(328, 304.5, '|', { font: '20px Times', fill: '#ffffff' });
       this.add.text(320, 290, '^', { font: '40px Times', fill: '#ffffff' });
       this.add.text(332, 353, '<', { font: '30px Times', fill: '#ffffff' });
       this.add.text(346, 327, '_', { font: '40px Times', fill: '#ffffff' });
       this.add.text(370, 401, '>', { font: '30px Times', fill: '#ffffff' });
       this.add.text(350, 375, '_', { font: '40px Times', fill: '#ffffff' });

       play3.setInteractive();
       play3.once('pointerup', function () {
            this.scene.start('mainmenu');
        }, this);
    }
});

var Game = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function Game ()
    {
        Phaser.Scene.call(this, { key: 'game' });
        window.GAME = this;
        var player;
        var platforms;
        var cursors; 
        var tubos;
        var timer;
        var star;
    },

    create: function () 
    {
        
       drums = this.sound.add('drums'); 
       synth2 = this.sound.add('synth2');
       boden = this.sound.add('boden');
    
        var loopMarker = {
        name: 'loop',
        start: 0,
        duration: 7.68,
        config: {
            loop: true
        }
     }

    drums.addMarker(loopMarker);
    drums.play('loop', {
        delay: 0
    });

    synth2.addMarker(loopMarker);
    synth2.play('loop', {
        delay: 0
    });

    this.cameras.main.setBounds(0, 0, 5500, 600);
    this.physics.world.setBounds(0, 0, 5500, 600);

    this.add.image(0, 0, 'sky').setOrigin(0).setScrollFactor(1);
    this.add.image(1000, 0, 'sky').setOrigin(0).setScrollFactor(1); 
    this.add.image(3899.5, 0, 'sky').setOrigin(0).setScrollFactor(1);
    this.add.image(2000, 0, 'reverse').setOrigin(0).setScrollFactor(1); 

    cursors = this.input.keyboard.createCursorKeys();

    player = this.physics.add.sprite(100, 300, 'dude').setGravity(0, 300);
    
    this.cameras.main.startFollow(player, true, 0.08, 0.08);    
    this.cameras.main.setZoom(1);

    tubos= this.physics.add.staticGroup();
    tubos.create(300, 20, 'tubo').setScale(0.45).refreshBody();
    tubos.create(300, 62, 'tubo').setScale(0.45).refreshBody();
    tubos.create(300, 177, 'tubo').setScale(0.45).refreshBody();
    tubos.create(300, 219, 'tubo').setScale(0.45).refreshBody();
    tubos.create(300, 261, 'tubo').setScale(0.45).refreshBody();
    tubos.create(300, 303, 'tubo').setScale(0.45).refreshBody();  
    tubos.create(300, 345, 'tubo').setScale(0.45).refreshBody();
    tubos.create(300, 387, 'tubo').setScale(0.45).refreshBody();  
    tubos.create(300, 429, 'tubo').setScale(0.45).refreshBody();
    //------------------------------------------------------------
    tubos.create(500, 20, 'tubo').setScale(0.45).refreshBody();
    tubos.create(500, 62, 'tubo').setScale(0.45).refreshBody();
    tubos.create(500, 104, 'tubo').setScale(0.45).refreshBody();
    tubos.create(500, 146, 'tubo').setScale(0.45).refreshBody();
    tubos.create(500, 188, 'tubo').setScale(0.45).refreshBody();
    tubos.create(500, 230, 'tubo').setScale(0.45).refreshBody();
    tubos.create(500, 345, 'tubo').setScale(0.45).refreshBody();
    tubos.create(500, 387, 'tubo').setScale(0.45).refreshBody();
    tubos.create(500, 429, 'tubo').setScale(0.45).refreshBody(); 
    //------------------------------------------------------------
    tubos.create(700, 70, 'tubo').setScale(0.44).refreshBody();
    tubos.create(700, 110, 'tubo').setScale(0.44).refreshBody();
    tubos.create(700, 150, 'tubo').setScale(0.44).refreshBody();
    tubos.create(700, 190, 'tubo').setScale(0.44).refreshBody();
    tubos.create(700, 230, 'tubo').setScale(0.44).refreshBody();
    tubos.create(700, 270, 'tubo').setScale(0.44).refreshBody();
    tubos.create(700, 310, 'tubo').setScale(0.44).refreshBody();  
    tubos.create(700, 350, 'tubo').setScale(0.44).refreshBody();
    tubos.create(700, 390, 'tubo').setScale(0.44).refreshBody();
    tubos.create(700, 430, 'tubo').setScale(0.44).refreshBody(); 
    //------------------------------------------------------------
    tubos.create(900, 20, 'tubo').setScale(0.44).refreshBody();
    tubos.create(900, 60, 'tubo').setScale(0.44).refreshBody();
    tubos.create(900, 150, 'tubo').setScale(0.44).refreshBody();
    tubos.create(900, 190, 'tubo').setScale(0.44).refreshBody();
    tubos.create(900, 230, 'tubo').setScale(0.44).refreshBody();
    tubos.create(900, 270, 'tubo').setScale(0.44).refreshBody();
    tubos.create(900, 310, 'tubo').setScale(0.44).refreshBody();  
    tubos.create(900, 350, 'tubo').setScale(0.44).refreshBody();
    tubos.create(900, 390, 'tubo').setScale(0.44).refreshBody();
    tubos.create(900, 430, 'tubo').setScale(0.44).refreshBody(); 
    //------------------------------------------------------------
    tubos.create(1100,   0, 'tubo').setScale(0.44).refreshBody();
    tubos.create(1100, 100, 'tubo').setScale(0.44).refreshBody();
    tubos.create(1100, 140, 'tubo').setScale(0.44).refreshBody();
    tubos.create(1100, 180, 'tubo').setScale(0.44).refreshBody();
    tubos.create(1100, 220, 'tubo').setScale(0.44).refreshBody();
    tubos.create(1101, 260, 'tubo').setScale(0.44).refreshBody();
    tubos.create(1141, 304, 'tubo').setScale(0.50).refreshBody();  
    tubos.create(1100, 350, 'tubo').setScale(0.44).refreshBody();
    tubos.create(1100, 390, 'tubo').setScale(0.44).refreshBody();
    tubos.create(1100, 430, 'tubo').setScale(0.44).refreshBody();
    //------------------------------------------------------------
    tubos.create(1300, 65, 'tubo').setScale(0.43).refreshBody();
    tubos.create(1300, 105, 'tubo').setScale(0.43).refreshBody();
    tubos.create(1300, 145, 'tubo').setScale(0.43).refreshBody();
    tubos.create(1300, 185, 'tubo').setScale(0.43).refreshBody();
    tubos.create(1300, 225, 'tubo').setScale(0.43).refreshBody();
    tubos.create(1300, 265, 'tubo').setScale(0.43).refreshBody();
    tubos.create(1300, 306, 'tubo').setScale(0.43).refreshBody();
    tubos.create(1300, 347, 'tubo').setScale(0.43).refreshBody();  
    tubos.create(1300, 388, 'tubo').setScale(0.43).refreshBody();
    tubos.create(1300, 429, 'tubo').setScale(0.43).refreshBody();
    //------------------------------------------------------------
    tubos.create(1400, 260,'tubo').setScale(0.43).refreshBody();
    tubos.create(1450, 95, 'tubo').setScale(0.43).refreshBody();
    tubos.create(1570, 95, 'tubo').setScale(0.43).refreshBody();
    tubos.create(1690, 95, 'tubo').setScale(0.43).refreshBody();
    tubos.create(1810, 95, 'tubo').setScale(0.43).refreshBody();
    tubos.create(1930, 95, 'tubo').setScale(0.43).refreshBody();
    //---------------------------------------------------
    tubos.create(1977, 132, 'tubo').setScale(0.46).refreshBody();
    tubos.create(1977, 174, 'tubo').setScale(0.46).refreshBody();
    tubos.create(1977, 216, 'tubo').setScale(0.46).refreshBody();
    tubos.create(1977, 258, 'tubo').setScale(0.46).refreshBody();
    tubos.create(1977, 300, 'tubo').setScale(0.46).refreshBody();
    tubos.create(1977, 342, 'tubo').setScale(0.46).refreshBody();
    tubos.create(1977, 384, 'tubo').setScale(0.46).refreshBody();
    tubos.create(1977, 427, 'tubo').setScale(0.46).refreshBody();
    //------------------------------------------------------------
    tubos.create(2350, 100, 'tubo').setScale(0.43).refreshBody();
    tubos.create(2600, 160, 'tubo').setScale(0.43).refreshBody();
    tubos.create(2850, 230, 'tubo').setScale(0.43).refreshBody();
    tubos.create(3100, 290, 'tubo').setScale(0.43).refreshBody();
    tubos.create(3350, 360, 'tubo').setScale(0.43).refreshBody();
    tubos.create(3600, 360, 'tubo').setScale(0.43).refreshBody();
    
    tubos.create(3850, 455, 'tubo').setScale(0.43).refreshBody();
    tubos.create(3850, 395, 'tubo').setScale(0.43).refreshBody();
    tubos.create(3850, 335, 'tubo').setScale(0.43).refreshBody();
    tubos.create(3850, 275, 'tubo').setScale(0.43).refreshBody();
    tubos.create(3850, 215, 'tubo').setScale(0.43).refreshBody();
    tubos.create(3850, 155, 'tubo').setScale(0.43).refreshBody();
    tubos.create(3850, 90, 'tubo').setScale(0.43).refreshBody();
    //------------------------------------------------------------
    tubos.create(4300, 130, 'tubo').setScale(0.43).refreshBody();
    tubos.create(4300, 180, 'tubo').setScale(0.43).refreshBody();
    tubos.create(4300, 230, 'tubo').setScale(0.43).refreshBody();
    tubos.create(4300, 280, 'tubo').setScale(0.43).refreshBody();
    tubos.create(4300, 330, 'tubo').setScale(0.43).refreshBody();
    tubos.create(4300, 380, 'tubo').setScale(0.43).refreshBody();
    tubos.create(4300, 430, 'tubo').setScale(0.43).refreshBody();
   
    star = this.physics.add.staticGroup();    
    star.create(4300,90, 'star');

    platforms = this.physics.add.staticGroup();   
    platforms.create(-225, 768, 'ground').setScale(2).refreshBody();
    platforms.create(411, 768, 'ground').setScale(2).refreshBody();
    platforms.create(1047, 768, 'ground').setScale(2).refreshBody();
    platforms.create(1682, 768, 'ground').setScale(2).refreshBody();
    platforms.create(4238, 768, 'ground').setScale(2).refreshBody();
    platforms.create(4605, 768, 'ground').setScale(2).refreshBody();
    //-----------------------------------------------------------------
    platforms.create(2047.7,0,'ground').setScale(0.3).refreshBody();
    platforms.create(2140, 0, 'ground').setScale(0.3).refreshBody();
    platforms.create(2233, 0, 'ground').setScale(0.3).refreshBody();
    platforms.create(2326, 0, 'ground').setScale(0.3).refreshBody();
    platforms.create(2419, 0, 'ground').setScale(0.3).refreshBody();
    platforms.create(2512, 0, 'ground').setScale(0.3).refreshBody();
    platforms.create(2605, 0, 'ground').setScale(0.3).refreshBody();
    platforms.create(2698, 0, 'ground').setScale(0.3).refreshBody();
    platforms.create(2791, 0, 'ground').setScale(0.3).refreshBody();
    platforms.create(2884, 0, 'ground').setScale(0.3).refreshBody();
    platforms.create(2977, 0, 'ground').setScale(0.3).refreshBody();
    platforms.create(3070, 0, 'ground').setScale(0.3).refreshBody();
    platforms.create(3163, 0, 'ground').setScale(0.3).refreshBody();
    platforms.create(3256, 0, 'ground').setScale(0.3).refreshBody();
    platforms.create(3349, 0, 'ground').setScale(0.3).refreshBody();
    platforms.create(3442, 0, 'ground').setScale(0.3).refreshBody();
    platforms.create(3535, 0, 'ground').setScale(0.3).refreshBody();
    platforms.create(3628, 0, 'ground').setScale(0.3).refreshBody();
    platforms.create(3721, 0, 'ground').setScale(0.3).refreshBody();
    platforms.create(3814, 0, 'ground').setScale(0.3).refreshBody();
    platforms.create(3872, 0, 'ground').setScale(0.3).refreshBody();

    player.setBounce(0.1);
    player.setCollideWorldBounds(true);
    
    this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
        frameRate: 10,
        repeat: -1
    });

    this.anims.create({
        key: 'turn',
        frames: [ { key: 'dude', frame: 4 } ],
        frameRate: 20
    });

    this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
        frameRate: 10,
        repeat: -1
    });

        this.physics.add.collider(player, platforms);
        this.physics.add.collider(player, tubos);
        this.physics.add.overlap(player, star, collectStar, null, this);

  info = this.add.text(10, 7, '', { font: '48px Arial', fill: '#ff0000' });
  info2 = this.add.text(19, 50, '', { font: '48px Arial', fill: '#ff0000' });
  timer = this.time.addEvent({ delay: 46000, callback: Gameover,callbackScope: this, });
  info.setScrollFactor(0);
  info2.setScrollFactor(0);

},

    update: function ()
    {
      if ( player.x >= 2000 && player.x <=3915 ) { 
      player.angle = -180;
      player.setGravity(0, -100);

      if (cursors.left.isDown)
    {
        player.setVelocityX(-90);

        player.anims.play('left', true);
    }

    else if (cursors.right.isDown)
    {
        player.setVelocityX(90);

        player.anims.play('right', true);
    }

    else
    {
        player.setVelocityX(0);

        player.anims.play('turn');
    }

    if (cursors.up.isDown && player.body.touching.up)
    {
        player.setVelocityY(-1500);
    }
} 
    else if (player.x <2000 || player.x>3915){
        player.angle=0;
        player.setGravity(0, 300);
    }

    if (cursors.left.isDown)
    {
        player.setVelocityX(-160);

        player.anims.play('left', true);
    }

    else if (cursors.right.isDown)
    {
        player.setVelocityX(160);

        player.anims.play('right', true);
    }

    else
    {
        player.setVelocityX(0);

        player.anims.play('turn');
    }

    if (cursors.up.isDown && player.body.touching.down)
    {
        player.setVelocityY(-470);
    }

     info.setText('Time: ' + Math.floor(46000 - timer.getElapsed()));
     info2.setText('Lifes: ' + vida);      
    }
});

var Game2 = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function Game2 ()
    {
        Phaser.Scene.call(this, { key: 'game2' });
        window.GAME = this;
        var timer1;
        var platforms;
        var player;
        var pipe;
        var timer2;
        pipes=null;         
    },

    create: function () 
    {
    
    this.add.image(350, 280, 'sky2').setScale(1.1);

    this.pipes = this.add.group();

    this.physics.world.enable(this.pipes);

    platforms = this.physics.add.staticGroup();   
    platforms.create(0, 535, 'ground2').setScale(0.6).refreshBody();
    platforms.create(150, 535, 'ground2').setScale(0.6).refreshBody();
    platforms.create(300, 535, 'ground2').setScale(0.6).refreshBody();
    platforms.create(450, 535, 'ground2').setScale(0.6).refreshBody();
    platforms.create(600, 535, 'ground2').setScale(0.6).refreshBody();
    platforms.create(750, 535, 'ground2').setScale(0.6).refreshBody();
 
    cursors = this.input.keyboard.createCursorKeys();

    player = this.physics.add.sprite(100, 300, 'dude').setGravity(0, 300);
    player.setCollideWorldBounds(true);

     this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
        frameRate: 10,
        repeat: -1
    });

    this.anims.create({
        key: 'turn',
        frames: [ { key: 'dude', frame: 4 } ],
        frameRate: 20
    });

    this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
        frameRate: 10,
        repeat: -1
    });

     this.physics.add.collider(player, platforms);

     info = this.add.text(10, 10, '', { font: '48px Arial', fill: '#ff0000' });
     info3 = this.add.text(19, 50, '', { font: '48px Arial', fill: '#ff0000' });
     timer2 = this.time.addEvent({ delay: 90000, callback: ganhar,callbackScope: this, }); 
     timer1 = this.time.addEvent({ delay: 2000, callback: this.addRowOfPipes,callbackScope: this, loop: true });
},

    update: function ()
    {
           
    if (cursors.left.isDown)
    {
        player.setVelocityX(-130);

        player.anims.play('left', true);
    }

    else if (cursors.right.isDown)
    {
        player.setVelocityX(130);

        player.anims.play('right', true);
    }

    else
    {
        player.setVelocityX(0);

        player.anims.play('turn');
    }

    if (cursors.up.isDown)
    {
        player.setVelocityY(-250);
    }

    if (cursors.down.isDown)
    {
        player.setVelocityY(300);
    }
        info3.setText('Lifes: ' + vida);     
        info.setText('Time: ' + Math.floor(90000 - timer2.getElapsed()));
},

addOnePipe: function(x, y) {  
    pipe = this.physics.add.image(x, y, 'br').setScale(1.1);
    pipe.setVelocityX(-150);

    this.pipes.addMultiple(pipe);

    pipe.checkWorldBounds = true;
    pipe.outOfBoundsKill = true;

    var collider= this.physics.add.overlap(player, pipe, perder, false, this);
},

addRowOfPipes: function() {
    var hole = Phaser.Math.Between(1, 6);  
    //var hole=6;
    for (var i = 0; i < 8; i++)
        if (i != hole && i != hole + 1){
            this.addOnePipe(760, i *54 + 40);              
        }      
    },
});

function perder (player,pipe)
{
        vida--;
        if (vida==0){        
            this.scene.start('gameover');
        }
        else(this.scene.start('game2'));        

        collider.active = false;
}

function ganhar ()
{
   this.scene.start('mainmenu');       
}

function collectStar (player, star)
{
    star.disableBody(true, true);
    drums.stop();
    synth2.stop();
    this.scene.start('gamewon');      
}

function Gameover ()
{
    drums.stop();
    synth2.stop();
    vida--;
    if (vida==0){        
        this.scene.start('gameover');
    }

    else(this.scene.start('game'));     
}

var GameWon = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function GameWon ()
    {
        Phaser.Scene.call(this, { key: 'gamewon' });
        window.OVER = this;
    },

    create: function ()
    {       
          
        music = this.sound.addAudioSprite('kyobi');
        music.play('title');

        var map2= this.add.image(400,300,'back');

        this.add.sprite(580, 380, 'final').setScale(0.8);

        var play4= this.add.image(151,481,'play').setScale(0.2);

        this.add.text(96, 460, 'Map2', { font: '50px Courier', fill: '#000000' });
        this.add.text(40, 30, 'Congratulations!!!', { font: '45px Arial', fill: '#ffffff' });
        this.add.text(40, 100, 'You won Map 1.', { font: '39px Courier', fill: '#ffffff' });
        this.add.text(40, 150, 'Try to beat the 2 Map.', { font: '39px Courier', fill: '#ffffff' });
        
        play4.setInteractive();
        play4.once('pointerup', function () {
            music.stop();
            this.scene.start('game2');
        }, this);       
    }
});

var GameOver = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function GameOver ()
    {
        Phaser.Scene.call(this, { key: 'gameover' });
        window.OVER = this;
    },

    create: function ()
    {
        var back= this.add.image(400,300,'back');
        this.add.sprite(397.5, 230, 'imgfinal').setScale(0.75);
        var play5= this.add.image(395,508,'play').setScale(0.22);
        this.add.text(311, 490, 'Restart', { font: '40px Courier', fill: '#000000' });

        play5.setInteractive();
        play5.once('pointerup', function () {
            this.scene.start('mainmenu');
        }, this); 
    }

});

var game = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'phaser-example',
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    },
    scene: [ Preloader, MainMenu, Game, Game2, Rules, GameOver,GameWon ]
};
var synth2;
var drums;
var music;
var vida=3;
var game1 = new Phaser.Game(game);
var blocked = false;
