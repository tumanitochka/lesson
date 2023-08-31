let age = prompt('Возраст?')

function ageFun(age) {
    let result = (age < 18) ? 'Школьник' : (25 > age >= 18) ? 'Студент' : 'Старик'
    console.log(result)
}

ageFun(age)
