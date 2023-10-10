let user = []

// отловили input
let name = document.getElementById('name')
let age = document.getElementById('age')
let city = document.getElementById('city')
let phone = document.getElementById('phone')
let val = document.getElementById('val')


function saveAdd() {
    user.push({name: name.value, age: age.value, city: city.value, phone: phone.value})
                alert(`Данные о ${name.value} сохранены.`)
                name.value = ''
                age.value = ''
                city.value = ''
                phone.value = ''
    }

    function showUsersName(){
        val.value = ''
        let buff = ''
        user.forEach((e) => {
            buff += '<li>' + e.name + '</li>'
        })
        val.innerHTML = buff
    }
    function showUsersAge(){
        val.value = ''
        let buff = ''
        user.forEach((e) => {
            buff += '<li>' + e.age + '</li>'
        })
        val.innerHTML = buff
    }
    function showUsersCity(){
        val.value = ''
        let buff = ''
        user.forEach((e) => {
            buff += '<li>' + e.city + '</li>'
        })
        val.innerHTML = buff
    }
    function showUsersPhone(){
        val.value = ''
        let buff = ''
        user.forEach((e) => {
            buff += '<li>' + e.phone + '</li>'
        })
        val.innerHTML = buff
    }