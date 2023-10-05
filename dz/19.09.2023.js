// Выдано 19.09.2023

` Напишите код, выполнив задание из каждого пункта отдельной строкой:

Создайте пустой объект user.
Добавьте свойство name со значением John.
Добавьте свойство surname со значением Smith.
Измените значение свойства name на Pete.
Удалите свойство name из объекта. `

let user = {}
user.name = 'John'
user.surname = 'Smith'

user.name = 'Pete'

delete user.name

console.log(user)

// Проверка на пустоту - https://learn.javascript.ru/task/is-empty

function isEmpty(obj) {
    for (let key in obj) {
      // если тело цикла начнет выполняться - значит в объекте есть свойства
      return false;
    }
    return true;
  }

let schedule = {};
alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";
alert( isEmpty(schedule) ); // false
