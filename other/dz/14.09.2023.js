// Выдано 14.09.2023

// Привет, obje - https://learn.javascript.ru/task/hello-object

let user = {} // cоздайте пустой объект user

user.name = 'John' // добавьте свойство name со значением John
user.surname = 'Smith' // добавьте свойство surname со значением Smith
user.name = 'Pete' // измените значение свойства name на Pete

delete user.name // удалите свойство name из объекта



// Проверка на пустоту - https://learn.javascript.ru/task/is-empty

function isEmpty(obj) {
    for (let key in obj) {
      return false
    } // если цикл запуститься, то false, иначе true
    return true
  }



// Объекты-константы? - https://learn.javascript.ru/task/const-object

// Можно ли изменить объект, объявленный с помощью const? Как вы думаете?

const obj = {
    name: "John",
  }

  // это будет работать!
  obj.name = "Pete"



// Сумма свойств объекта - https://learn.javascript.ru/task/sum-object

// У нас есть объект, в котором хранятся зарплаты нашей команды:

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
  }
  
let sum = 0
for (let key in salaries) {
    sum += salaries[key]
  }

  console.log(sum)

