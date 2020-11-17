// console.log(typeof 6);
// console.log(typeof "str");
// console.log(typeof null);

let obj = {};

let capitals = {
    monako: "Monako", /* свойство: значение */
    "Российская Федерация": "Москва",
    ukraine: "Kiev",
    france: "Paris"
}

capitals.italy = "Rome";
capitals.france = "Marsel";

console.log(capitals.italy);
console.log(capitals.Россия);

delete capitals.monako;
console.log(capitals);

/*
    Объект - это неупорядоченный список свойств (пара ключ-значение)
*/

let cntr = "Российская Федерация";
console.log(capitals.cntr); // => не работает!
console.log(capitals[cntr]); // => работает!

// for in - обход по всем ключам (свойствам) объекта

for (let key in capitals) { // для каждого свойства в объекте
    console.log("Страна " + key + ", столица - " + capitals[key]);
}

/*
    Дан цикл, который генерирует случайное число (0-10) n (100) раз 
    Сколько раз получилось каждое чисо
    Найти само частое число
*/

// декларируемая функция
function other() {
    //
}

// функциональное выражение 
const getNumber = function(max = 10, min = 0) {
    return Math.floor(Math.random() * (max - min) + min);
}

let numbers = {};

for (let i = 0; i <100; i++) {
    let n = getNumber();
    if (numbers[n]) {
        numbers[n] += 1;
    } else {
        numbers[n] = 1;
    }
}
console.log(numbers);
