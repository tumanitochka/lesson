// 1.Создать страницу:
// 	- форму: Имя, Возраст, Город, Телефон и кнопка Save; 
// 			//Не использовать form, просто input
// 	- поле с 4 кнопками: Show Name, Show Age, Show City, Show Number;
// 	- поле для вывода информации(output):
// 2.Создать js скрипт:
// 	- хранит массив для объектов
// 	- отлов всех полей input 
// 		   и поля вывода (document.getElementById(), document.querySelector())
// 	- функция Save: 
// 		- ложит в массив объекты с полями из формы(name,age,city,phone)
// 			пример - push({name: name.value, age: age.value ..... })
// 		- выводит alert о том, что данные о этом пользователи сохранены;
// 		- очищает поля ввода;
// 	- функция showUsersName:
// 		- очищает поле outputs перед выводом
// 		- формирует контент для вывода, используя цикл и доствая все поля name
// 				из объектов (создай буферный элемент, где будешь всё это хранить,
// 				добавь <br> для переноса строк)
// 		- отправляет контент в outputs
// 	- функция showUsersAge:
// 		По анологии с showUsersName, только работа с полями age;
// 	- функция showUsersCity:
// 		По анологии с showUsersName, только работа с полями city;
// 	- функция showUsersPhone:
// 		По анологии с showUsersName, только работа с полями phone;


// Шпора:

// let name = document.getElementById('name') - достаем элемент по id
// let outputs = document.querySelector('.outputs') - достаем элемент по любому селектору
// name.value - .value позволяет получить значение лежащие в input
// outputs.innerHTML - .innerHTML позволяет добавить html код/просто текст в уже пойманый компонент
// <button onclick="saveAdd()">Save</button>



		