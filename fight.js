function Person(name, gun, hp, attack, shield) {
    this.name = name;
    this.gun = gun;
    this.hp = hp;
    this.attack = attack;
    this.shield = shield;
}
  
let warrior1 = new Person("Олег", 'Серпы', 360, 20, 5);
let warrior2 = new Person("Василий", 'Дрын', 360, 20, 5);

function Duel(x1, x2){
    while (warrior1.hp >= 0 && warrior2.hp >= 0) {
        x1.hp -= (x2.attack - x1.shield)
        x2.hp -= (x1.attack - x2.shield)

        console.log(x2.name + ' нанес ' + (x2.attack - x1.shield) + ' урона, у игрока ' + x1.name + ' осталось ' + x1.hp + ' здоровья.')
        console.log(x1.name + ' нанес ' + (x1.attack - x2.shield) + ' урона, у игрока ' + x2.name + ' осталось ' + x2.hp + ' здоровья.')

        if(x1.hp <= 0 || x2.hp <= 0){ break }
    }

    let result = (x1.hp <= 0) ? 'Победил: ' + x2.name : (x2.hp <= 0) ? 'Победил: ' + x1.name : 'Ничья' 
    console.log(result)
}

Duel(warrior1, warrior2)
