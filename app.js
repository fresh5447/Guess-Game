// 1) Create a basic Guesser constructor, and use it to make a new guess.. console.log to make sure it works.
// 2) Add the prototype function guess... to test have it accept a parameter and console.log that parameter
// you can also show how you have access to this.lives or this.number and do a console.log
// 3) Do the logic for the number being too high or low... just console.log if the guess is higher or lower then the number
// 4) Add the logic that will remove the life if guess is incorrect.

function Guesser(number, lives) {
  this.number = number
  this.lives = lives
}


Guesser.prototype.guess = function(n) {
  if(n > this.number) {
    console.log('your guess is too high')
    if(this.lives !== 0) {
      this.lives = this.lives - 1
      console.log(`you now have ${this.lives} left`)
    } else {
      console.log(`you dead!`)
    }
  } else if (n < this.number) {
    console.log('your guess is too low')
    if(this.lives !== 0) {
      this.lives = this.lives - 1
      console.log(`you now have ${this.lives} left`)
    } else {
      console.log(`you dead!`)
    }
  } else {
    console.log('that is the correct guess')
  }
}

const guesser = new Guesser(10, 2)

guesser.guess(20)
guesser.guess(19)
guesser.guess(10)