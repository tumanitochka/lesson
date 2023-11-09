const output = document.querySelector('.output')

function funcPromise(){
    output.innerHTML = `
    <p>1. Promise (Обещание):
    Promise - это объект, представляющий асинхронную операцию, которая может завершиться успешно (resolve) или с ошибкой
    (reject). Промисы позволяют более четко и удобно управлять асинхронным кодом.

    Пример создания промиса:</p>
<pre>
const myPromise = new Promise((resolve, reject) => {
    // Асинхронный код, который может завершиться успешно или с ошибкой
    if (/* условие */) {
        resolve('Успех!'); // В случае успешного выполнения
    } else {
        reject('Ошибка!'); // В случае ошибки
    }
});
</pre>

<p>2. async и await:
    async и await - это синтаксический сахар для работы с промисами, который делает асинхронный код более читаемым и
    удобным.
    Пример использования async и await:</p>
<pre>
async function fetchData() {
    try {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Ошибка:', error);
      }
}
            </pre>

<p>3. Практические примеры:
    Пример 1: Загрузка данных с сервера с использованием async/await:</p>
<pre>
async function fetchData() {
    try {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Ошибка:', error);
      }
}
            </pre>
<p>Пример 2: Параллельное выполнение нескольких асинхронных операций с Promise.all:</p>
<pre>
async function fetchMultipleData() {
    const promises = [fetchData1(), fetchData2(), fetchData3()];
    const data = await Promise.all(promises);
    return data;
}
            </pre>

<p>Пример 3: Цепочка обработки данных с промисами:</p>
<pre>
fetch(url)
    .then(data => data.json())
    .then(json => console.log(json))
    .catch(error => console.log(error));
</pre>
    `
}
