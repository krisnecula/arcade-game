// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // x pos - track enemy's position on board
    // y pos - track enemy's position on board

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    // code to automate enemy movement:
    // if enemy is not pass the boundary of the screen edge
      // move forward
      // increment x by speed * dt
    // else
      // reset pos to start
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Player class
class Hero {
  constructor() { // constructor and its properties
    this.x = 0; // x pos
    this.y = 0; // y pos
    this.sprite = 'images/char-horn-girl.png'; // sprite image
  }
    // Methods
      // update() to update the position of the player
        // check for collision
          // did player x and y collide with the enemy?
        // check for win
          // did player win the game?
      // render() to draw/redraw the player to the board every loop through the main game loop
        // draw player sprite on current x and y coord position
        render() {
          ctx.drawImage(Resources.get(this.sprite), this.x, this.y); // call the drawImage method from ctx
        }
}
      // handleInput() method.
        // the event listener will fire this method and update x & y coord according to key input
      // Reset Player
        // set x and y to starting x and y


// New Player object
const player = new Hero();

// Init allEnemies array
// For each enemy class push the new Enemy object into above array



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
