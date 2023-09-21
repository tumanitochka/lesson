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
        x1.hp = (x1.hp - (x2.attack - x1.shield)) ? x1.hp < 0 : 0
        x2.hp = (x2.hp - (x1.attack - x2.shield)) ? x2.hp < 0 : 0
        console.log(x1.name + ' = ' + x1.hp + ' здоровья')
        console.log(x2.name + ' = ' + x2.hp + ' здоровья')
    }

    if (x1.hp = x2.hp = 0) { x1.hp == 0 || x2.hp == 0 }
    let result = (x1.hp >= 0) ? 'Победил: ' + x1.name : 'Победил: ' + x2.name
    console.log(result)
}

Duel(warrior1, warrior2)
