var winState = {

  create: function () {
    var winLabel = game.add.text(80,100, 'You Won!', {font: '30px Courier', fill: 'yellow'});
    var enterKey = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
    enterKey.onDown.addOnce(this.restart, this);
  },

  restart: function () {
    game.state.start('menu');
  },

}
