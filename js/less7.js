/*
    Функции
    f(x) = 2x + 5;
*/

// rgb()
// url()
// .toFixed()
// .random()


function cookEggs (eggs = 2, sausage = false, cheese = false, tomato = false) {
    let recipe = "Берем сковороду и ставим на огонь.\n";
    recipe += `Разбить в сковороду ${eggs} яйца.\n`;
    if (sausage) {
        recipe += "Добавить колбасочку.\n";
    }
    if (cheese) {
        recipe += "Потереть сырочек.\n";
    }
    if (tomato) {
        recipe += "Добавить помидорчиков.\n";
    }
    recipe += "Добавить соль и перец, накрыть крышкой и ждать 5 минут.\n";
    recipe += "Яичница из " + eggs + " яиц "; 
    if (sausage) {
        recipe += "с колбасой";
        if (tomato && cheese) {
            recipe += ", помидорами и сыром";
        } else if (tomato) {
            recipe += " и помидорами";
        } else if (cheese) {
            recipe += " и сыром"
        }
    } else if (tomato) {
        recipe += "с помидорами";
        if (cheese) {
            recipe += " и сыром";
        }
    } else if (cheese) {
        recipe += "с сыром";
    }
    recipe += " готова!\n";
    return recipe;
}

cookEggs();
console.log(cookEggs(1, true, false, true));
cookEggs(3);
