// Задание 1

// Создайте калькулятор при помощи конструктора, new Calculator
// важность: 5Создайте функцию-конструктор Calculator, которая 
// создаёт объекты с тремя методами:
// read() запрашивает два значения при помощи prompt и сохраняет 
// их значение в свойствах объекта.
// sum() возвращает сумму этих свойств.
// mul() возвращает произведение этих свойств.



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







// Задание 2 - https://learn.javascript.ru/task/accumulator


let accumulator = new Accumulator(1); // начальное значение 1

accumulator.read(); // прибавляет введённое пользователем значение к текущему значению
accumulator.read(); // прибавляет введённое пользователем значение к текущему значению

alert(accumulator.value); // выведет сумму этих значений

