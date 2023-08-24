// 1 задание

// for (let i = 1; i < 11; i++) { // выведет 0, затем 1, затем 2
//     console.log(i)
//   }
  
  

  // 2 задание

// let result = '\n'
// for (let i = 1; i < 11; i++) {
//     for (let j = 1; j < 11; j++) {
//         result += (i*j) + ' '
//     }
//     result += '\n'
// }

// console.log(result)



// 3 задание

// let sum = 0;
// while (true) {
//   let value = +prompt("Введите число", '');
//   if (value == 0) break; // (*)
//   sum += value;
// } alert( 'Сумма: ' + sum );



// 4 задание

let sum = 1;
while (true) {
  let value = +prompt("Введите число", '');
  if (value == 0) break; // (*)
  sum *= value;
} alert( 'Сумма: ' + sum );

let result = 1;
        for(let i = 1; i <= n; i++) {
            result *= i;
        }