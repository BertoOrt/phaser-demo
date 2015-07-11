var loadState = {

  preload: function () {
    game.load.spritesheet('llama', 'images/llama1.png', 79, 85);
    game.load.image('sky', 'images/sky2.png');
    game.load.image('platform', 'images/platform.png');
    game.load.image('logo', 'images/galvanize.png');
    game.load.image('diamond', 'images/diamond.png');
  },

  create: function () {
    game.state.start('menu');
  },

}
