class Animal {
    constructor(tp, sx, yr, clr, nm) {
        this.color = clr;
        this.year = yr;
        this.name = nm;
        this.sex = sx;
        this.user = {};
        this.type = tp;
    }
    getInfo() {
        let age = 2020 - this.year;
        return `${this.type} ${this.name} с возрастом ${age} лет`;
    }
}




let cat = {
    breed: "Brithan",
    color: "black",
    birthYear: 2005,
    female: true,
    name: "Nora",
    user: {
        name: "Leksa",
        status: "ipoteka"
    },
    getInfo: function() {
        let age = 2020 - this.birthYear;
        return "Cat " + this.name + ", its age - " + age + " years";
    }
}




let parrot = new Animal("Попугай", "м", 2018, "blue", "Кеша");
let dog = new Animal("Собака", "ж", 2010, "brown", "Мэгги");

console.log(parrot.getInfo());
console.log(dog.getInfo());

// Array - Упорядоченный список значений


let colors = ["red", "black", 256, true, "ololo", new Animal("Попугай", "м", 2018, "blue", "Кеша"), "black"];

// console.log(colors[3]);
// console.log(colors.indexOf("black"));
// console.log("Длина массива: " + colors.length);

let fruits = ["груша", "яблоко", "апельсин", "ананас"];

/*
    Методы массива:
    push(el) - добавить элемент в конец массива
    pop() - забрать последний элемент массива
    shift() - забрать первый элемент массива
    unshift() - впихнуть элемент в начало массива
*/
fruits.push(("B" + "a" + + "a").toLowerCase());
fruits.pop();

console.log(fruits);

/*

*/
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

/*
    Дано число 1 <= n < 100
    Вывести в консоли массив из ряда фиббоначи до числа n (вкл) 

    Все это сделать при помощи функции
*/