var menuState = {

  create: function () {
    var winLabel = game.add.text(80,100, 'Hit enter to play', {font: '50px Courier', fill: 'orange'});
    enterKey = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
    enterKey.onDown.addOnce(this.start, this);
  },

  start: function () {
    game.state.start('play');
  },

}
