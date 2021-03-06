let name;
console.log(name);

/*
    undefined - тип данных для значений, которые ещё не определили
    undefined => false

    null - пустое значение
    null => false
*/

name = "Vasya";

if (name !== "Vasya") {
    console.log(`Welcome, ${name}!`);
} else {
    console.log("Sorry, go away!");
}


let age = 14;
/*
    В зависимости от значения переменной age, выводить одну из следующих фраз:
    Если возраст меньше 18: "Вам еще равно работать!"
    Если возраст от 18 до 65 (вкл): "Ваш трудовой стаж в самом разгаре!"
    Если возраст больше 65: "Отдыхайте, вы на пенсии!"
*/

age = Math.floor(Math.random() * 100);

if (age < 18) {
    console.log(`В ${age} лет еще не работают!`);
} else if (age >= 18 && age <= 65) {
    // 18 <= age <= 65
    console.log(`${age} лет - самый лучший возраст для работы!`);
} else {
    console.log(`Ваш возраст нельзя называть, но ${age}`);
}

/* 
    Даны 3 точки
    ВСЕ ТОЧКИ задаются рандомо не больше +/-30
    x1, y1 - точка А
    x2, y2 - точка B
    x3, y3 - точка C
    1) Найти длину каждого отрезка AB, AC и CB
    2) Убедиться, что это треугольник (AB + AC > CB)
    3) Если это треугольник - Посчитать его площадь и периметр
*/

let ab = ((x2 - x1)**2 + (y2 - y1)**2) ** (1/2)

let x1 
/*
    В зависимости от числа "n" Правильно писать фразу "Вам n лет";
*/