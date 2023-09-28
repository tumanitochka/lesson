let str = `У лукоморья дуб зелёный;
Златая цепь на дубе том:
И днём и ночью кот учёный
Всё ходит по цепи кругом;
Идёт направо — песнь заводит,
Налево — сказку говорит.`

let target = "к"
let pos = 0
let little = str.toLowerCase()

while (true){
    let foundPos = little.indexOf(target, pos)
    if (foundPos == -1) break

  console.log( `Найдено тут: ${foundPos}` )
  pos = foundPos + 1
}

