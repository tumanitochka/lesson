` Задание 1

Создайте калькулятор при помощи конструктора, new Calculator
важность: 5Создайте функцию-конструктор Calculator, которая 
создаёт объекты с тремя методами:
read() запрашивает два значения при помощи prompt и сохраняет 
их значение в свойствах объекта.
sum() возвращает сумму этих свойств.
mul() возвращает произведение этих свойств. `



// function Calculator() {

//     this.read = function() {
//       this.a = +prompt('a?', 0)
//       this.b = +prompt('b?', 0)
//     }
  
//     this.sum = function() {
//       return this.a + this.b
//     }
  
//     this.mul = function() {
//       return this.a * this.b
//     }
//   }
  
//   let calculator = new Calculator()
//   calculator.read()
  
//   console.log( "Сумма = " + calculator.sum() )
//   console.log( "Произведение = " + calculator.mul() )







` Задание 2


- создайте new Accumulator
- создайте функцию-конструкт ор Accumulator(startingValue).
- объект, который она создаёт, должен уметь следующее:

Хранить «текущее значение» в свойстве value. Начальное значение 
устанавливается в аргументе конструктора startingValue.
Метод read() должен использовать prompt для считывания нового числа 
и прибавления его к value.

Другими словами, свойство value представляет собой сумму всех введённых 
пользователем значений, с учётом начального значения startingValue. `


// function Accumulator(startingValue) {
//   const obj = {
//     value: 0,
//   }

//   function read()
// }

function Accumulator() {

  this.read = function() {
    this.a = 2
    console.log(a)
  }

}

let acum = new Accumulator

console.log(acum.read())

