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