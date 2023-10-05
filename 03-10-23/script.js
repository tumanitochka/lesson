let user = []

// отловили input
let name = document.getElementById('name')
let age = document.getElementById('age')
let city = document.getElementById('city')
let phone = document.getElementById('phone')


// ложим значиния input в массив user
function saveAdd(n, a, c, p) {
    user.push(n)
    user.push(a)
    user.push(c)
    user.push(p)
}

saveAdd(name.value, age.value, city.value, phone.value) // передаем значения в функцию




// перебор элементов массива
for (let i = 0; i < user.length; i++) {
    var newDiv = document.createElement(li);
    newDiv.innerHTML = user[i] 
}
