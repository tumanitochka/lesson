// // 1. Создайте пустой объект в JavaScript.

// let obj = {};


// // 2. Добавьте свойство "name" со значением "John" в объект.

// const object = { name: "John", }

// // 3. Получите значение свойства "name" из объекта.

// object.name

// // 4. Измените значение свойства "name" на "Alice".

// object.name = "Alice"

// // 5. Удалите свойство "name" из объекта.

// delete object.name

// // 6. Проверьте, существует ли свойство "age" в объекте.

// "age" in object

// // 7. Создайте объект "person" с несколькими свойствами: "name", "age", "city".


// const person = {
//     name: "Олег",
//     age: "28",
//     city: "Сочи",
// }

// // 8. Получите список всех ключей (свойств) из объекта "person".

// for(let key in person){
//     console.log(key)
// }


// // 9. Получите список всех значений из объекта "person".

// let arr = Object.values(person)

// // 10. Проверьте, является ли объект "person" пустым.

// let result = Object.keys(person) === 0 ? "Пустой" : "Не пустой"

// // 11. Создайте копию объекта "person" с именем "personCopy".

// arr[0]


// // 12. Объедините два объекта "person" и "personCopy" в один новый объект.

// const personCopy = {}
// const personPlus = {...person, ...personCopy}

// // 13. Итерируйтесь по всем свойствам объекта "person" и выведите их в консоль.






// // 14. Создайте вложенный объект "address" в объекте "person" с полями "street" и "zipcode".

// const person = {
//     name: "Олег",
//     age: "28",
//     city: "Сочи",
//     address: {
//         street: null,
//         zipcode: null,
//     },
// }


// // 15. Получите значение поля "street" из вложенного объекта "address".

// for(let key in person.address){
//     console.log(key)
// }

// // 16. Удалите вложенный объект "address" из объекта "person".


// delete person.address


// // 17. Проверьте, есть ли у объекта "person" свойство "proto".

// "proto" in person

// *18. Создайте конструктор объекта "Car" с параметрами "brand" и "model".
// *19. Создайте экземпляр объекта "car1" с помощью конструктора "Car".
// *20. Добавьте метод "startEngine" в прототип объекта "Car".
// *21. Вызовите метод "startEngine" для объекта "car1".
// 22. Создайте объект "circle" с методом "calculateArea", вычисляющим площадь круга.

let circle = {
    s: 0,
    calculateArea: function(x){
        this.s = 3.14*(180*90)
    }
}

console.log(circle.s)

// 23. Создайте объект "rectangle" с методом "calculateArea", вычисляющим площадь прямоугольника.
// *24. Создайте объект "shape" и добавьте в него метод "printArea", который вызывает метод "calculateArea" в зависимости от типа фигуры.
// 25. Создайте объект "book" с методами "setTitle" и "setAuthor" для установки заголовка и автора книги.
// *26. Создайте объект "bookshelf" и добавьте в него метод "addBook" для добавления книги в массив.
// 27. Создайте объект "calculator" с методами "add", "subtract", "multiply" и "divide" для выполнения математических операций.
// 28. Создайте объект "bankAccount" с методами "deposit" и "withdraw" для управления счетом.
// 29. Создайте объект "student" с методом "addGrade" для добавления оценки и методом "getAverageGrade" для вычисления средней оценки.
// 30. Создайте объект "timer" с методами "start" и "stop" для учета времени.