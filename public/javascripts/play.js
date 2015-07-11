var playState = {

  create: function() {

    game.add.sprite(0,0,'sky').scale.setTo(1.5,1.5);

    platforms = game.add.group();
    platforms.enableBody = true;

    var ground = platforms.create(0, game.world.height-20, 'platform');
    ground.scale.setTo(2, 1);
    ground.body.immovable = true;

    var ledge = platforms.create(550, 100, 'platform');
    ledge.scale.setTo(.3,0.3);
    ledge.body.immovable = true;

    var ledge = platforms.create(350, 300, 'platform');
    ledge.scale.setTo(.7,0.7);
    ledge.body.immovable = true;

    player = game.add.sprite(10, game.world.height -200, 'llama');
    game.physics.arcade.enable(player);
    player.body.bounce.y = 0.2;
    player.body.gravity.y = 800;
    player.body.collideWorldBounds = true;

    player.animations.add('left', [0, 1, 2, 3], 10, true);
    player.animations.add('right', [0, 1, 2, 3], 10, true);

    cursors = game.input.keyboard.createCursorKeys();
    logos = game.add.group();
    logos.enableBody = true;
    var logo = logos.create(600, 0, 'logo');
    logo.scale.setTo(.5,.5);
    logo.body.gravity.y = 4;

    scoreText = game.add.text(16, 16, 'get to galvanize!', { fontSize: '20px', fill: 'green' });
  },

  update: function() {
    game.physics.arcade.collide(player, platforms);
    game.physics.arcade.collide(logos, platforms);
    game.physics.arcade.overlap(player, logos, this.win, null, this);
    player.body.velocity.x = 0;

    if (cursors.left.isDown)
    {
        player.body.velocity.x = -300;
        player.animations.play('left');
    }
    else if (cursors.right.isDown)
    {
        player.body.velocity.x = 300;
        player.animations.play('right');
    }
    else
    {
        player.animations.stop();
        player.frame = 0;
    }
    if (cursors.up.isDown && player.body.touching.down)
    {
        player.body.velocity.y = -750;
    }
  },

  collectLogo: function(player, logo) {
    logo.kill();
    logostatus++;
    scoreText.text = 'logos : ' + logostatus;
    if (logostatus === 3) {
      this.win();
    }
  },

  gameOver: function() {
    game.state.start('lose');
  },

  win: function() {
    game.state.start('win');
  },
}
