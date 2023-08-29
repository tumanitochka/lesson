// 1 задание

// let value = prompt('Какой объем Вашей флешки?') * 1024
// let result = (value / 820)
// alert('На вашей флешке поместится ' + Math.floor(result) + ' файлов, размером в 820 Мб')



// 2 задание

// let sum = +prompt("Cколько денег? ")
// let price = prompt("Цена шоколадки? ")
// let sell = Math.trunc(sum / price);
// let change = sum - price * sell;
// if (sell < 1) {
//   alert('Денег не хватает');
// }
// else {
//   alert('Получите свои ' + sell + ' шоколадки, а также сдачу ' + +change + ' рублей ');
// }



// 3 задание

// number = prompt('Введите трехзначное число')
// let a = Number(nmb % 10)
// let b = Number((nmb - a) / 10 % 10)
// let c = Number((nmb - a - b * 10) / 100)

// // alert(a * 100 + b * 10 + c)



// 4 задание

// let age = +prompt('Укажите ваш возраст в поле ввода')
// let result = (age >= 0 && age <= 2) ? 'ребенок' :
// (age >= 12 && age < 18) ? 'подросток' :
// (age >= 18 && age < 60) ? 'взрослый' :
// (age >= 60) ? 'пенсионер' : 'не человек'

// alert(result)



// 5 задание

// let value = prompt('Введите цифру от 0 до 9')
// let result = (value == 0) ? ')' :
// (value == 1) ? '!' :
// (value == 2) ? '@' :
// (value == 3) ? '#' :
// (value == 4) ? '$' :
// (value == 5) ? '%' :
// (value == 6) ? '^' :
// (value == 7) ? '&' :
// (value == 8) ? '*' :
// (value == 9) ? '(' : 'Вы ввели число!'

// alert(result)



// 6 задание

// let value = prompt('Введите трехзначное число и мы проверим на сходство цифр')
// let a = value % 10
// let b = Number((value - a) / 10 % 10)
// let c = Number((value - a - b * 10) / 100)
// let result = (a == b || a == c || b == c) ? 'В вашем числе есть одинаковые цифры.' : 'Одинаковых цифр нет!'
// alert(result)



// 7 задание

// let age = prompt('Введите год рождения')
// let result = ((age % 4 == 0) && (age % 100 != 0) || (age % 400 == 0)) ? 'Высокосный' : 'Не высокосный'
// alert(result)



// 8 задание

// let value = prompt('Введите пятизначное число')
// let a = value % 10
// let b = (value - a) / 10 % 10
// let c = (value - a - b * 10) / 100 % 10
// let i = (value - a - (b * 10) - (c * 100)) / 1000
// let r = a * 10 + b

// let result = (i === r) ? 'Число палиндромное' : 'Число не палиндромное'


// alert(result)