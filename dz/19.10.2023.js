// Задание 1 - https://learn.javascript.ru/task/calculator-constructor



function Calculator() {

    this.read = function() {
      this.a = +prompt('a?', 0)
      this.b = +prompt('b?', 0)
    }
  
    this.sum = function() {
      return this.a + this.b
    }
  
    this.mul = function() {
      return this.a * this.b
    }
  }
  
  let calculator = new Calculator()
  calculator.read()
  
  console.log( "Сумма = " + calculator.sum() )
  console.log( "Произведение = " + calculator.mul() )





// Задание 2 - https://learn.javascript.ru/task/accumulator


function Accumulator(startingValue) {
  this.value = startingValue

  this.read = function() {
    this.value += +prompt('Сколько нужно добавить?', 0)
  }

}

let accumulator = new Accumulator(0)
accumulator.read()
alert(accumulator.value)
