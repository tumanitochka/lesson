/// 1 задание

let one = +prompt('Введите первое число');
let x = prompt('Введите символ');
let two = +prompt('Введите второе число');

let calc = (x == '+') ? () => alert(one + two):
(x == '-') ? () => alert(one - two):
(x == '*') ? () => alert(one * two):
(x == '/') ? () => alert(one / two): 0

calc()


/// 2 задание

let ssh = prompt('Введите короткое имя старницы ВКонтакте?')
const generateLink = (a,b)  => alert('Ваша ссылка на страницу: ' + a + b)

generateLink('https://vk.com/', ssh)