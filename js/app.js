"use strict";
/* Enemy variable:
 * @param {string} x,y,speed - gives individual enemies
 * an intial x and y pos and creates speed variation.
 */
var Enemy = function(x,y,speed) {
    this.x = x;
    this.y = y + 55; // places enemy on road
    this.speed = speed;
    this.sprite = 'images/enemy-bug.png';
    this.step = 101;
    this.boundary = this.step * 5; // takes enemy past the boundary
    this.resetPos = -this.step;
};
/*
 * Update the enemy's position:
 * automate enemy movement if enemy is not
 * passed the boundary of the screen edge.
 * @param {string} dt - a time delta between ticks
 */
Enemy.prototype.update = function(dt) {
      if(this.x < this.boundary) { // conditional checks enemy's x property
      this.x += this.speed * dt; // increment x by speed * dt to move forward
      }
    else {
      this.x = this.resetPos // reset x pos to start
    }
};
/*
 * Render enemy to screen:
 * with anonymous function
 */
 Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
/*
 * Player class:
 * with constructor function
 */
class Hero {
  constructor() {
    this.sprite = 'images/char-horn-girl.png'; // sprite image
    this.step = 101; // distance between blocks on x axis
    this.jump = 83; // distance between blocks on y axis
    this.startX = this.step * 2; // reference point to starting x pos
    this.startY = (this.jump * 4) + 55; // reference point to centered starting y pos
    this.x = this.startX; // x pos
    this.y = this.startY; // y pos
    this.victory = false;
  }
/*
 * Class methods:
 * update will loop through each enemy in the allEnemies array
 * and check for a collision.
 * reset will send player back to starting coordinates
 * if collision logic is true.
 * render will render player to screen
 */
      update() {
        for (let enemy of allEnemies) {
          if (this.y === enemy.y && (enemy.x + enemy.step/2 > this.x && enemy.x < this.x + this.step/2)) {
          this.reset();
        }
    }
        if (this.y < 40) {
          this.victory = true;
    }
  }
      reset () {
        this.y = this.startY;
        this.x = this.startX;
      }
      render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
        }
/*
 * handleInput is attached to the event listener
 * and will update x & y coord according to key input.
 * @param {string} input - direction to travel
 * checks the value of the input and moves player.
 */
      handleInput(input) {
        switch(input) {
          case 'left':
            if (this.x > 0) { // conditional checks if player's x pos is greater than zero
            this.x -= this.step; // if so, continue left
          }
            break; // stops movement at left edge of board
          case 'up':
            if (this.y > 40) { // conditional checks if player's y pos is at top of board
            this.y -= this.jump;
          }
            break; // stops movement at top of board
          case 'right':
            if (this.x < this.step * 4) { // conditional checks if player's x pos is less than 4 steps
            this.x += this.step; // if so, continue right
            }
            break; // at 4 steps stop movement at right edge of board
          case 'down':
            if (this.y < this.jump * 4) { // conditional checks if player's y property is less than 4 steps
            this.y += this.jump; // if so, continue down
            }
            break; // at 4 steps stop movement at bottom part of board
        }

      }
  }
/*
 * New player object:
 */
const player = new Hero();
const bug1 = new Enemy(-101, 0, 200); // coordinates and speed
const bug2 = new Enemy(-101, 83, 300);
const bug3 = new Enemy((-101*2.5), 83, 300);
const bug4 = new Enemy(-101, 2 * 83, 350); // make sure y pos is a multiple of 83 to make collision logic on line 61 true
const allEnemies = []; // init allEnemies array
allEnemies.push(bug1, bug2, bug3, bug4); // for each enemy class push the new Enemy object into above array
/*
 * Event listener for key presses:
 * sends the keys to the
 * player.handleInput() method.
 */
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
