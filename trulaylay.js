// 1 задание

let sum = function sum() {}
let mult = function mult() {}
console.log(sum,mult)

function sum() {}
function mult() {}
console.log(sum,mult)



// 2 задание

function mult(one, two) {
    console.log(one + two)
}

mult('Первый параметр', 'Второй параметр')




// 3 задание

function sum(a, b) {
    return a + b;
}

let result = sum(1, 2)
console.log( result )




// 4 задание

function mult(a, b) {
    return a * b;
}

let result = mult(1, 2)
console.log( result )




// 5 задание


let calculation = function(a, b, c, d) {
    let result = (a > b) ? c(a,b) : d(a,b);
    console.log(result)
}

const sum = (a,b) => a + b
const mult = (a,b) => a * b

calculation(2, 3, sum, mult)