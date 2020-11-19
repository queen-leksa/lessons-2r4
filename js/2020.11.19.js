// Распределение по командам

/*
    В команде должно быть 3 человека
    Если останется 4 - в последнюю кманду добавляется 4-й

    Каждый участник - объект
    {
        name:
        project: Бал за прошлый проект
        html:
        js:
        average: p+h+j/3 * 100
    }
*/

class Student {
    constructor(n,p,h,j) {
        this.name = n;
        this.project = p * 100;
        this.html = h * 100;
        this.js = j * 100;
        this.average = this.getAverage();
    }
    getAverage() {
        return Math.round((this.project + this.html + this.js) / 3);
    }
}

let students = [
    new Student(
        "Искандаров Андрей",
        10,
        7,
        6
    ),
    new Student(
        "Магомедов Нажмутдин",
        8,
        8,
        7
    ),
    new Student(
        "Можайский Сергей",
        10,
        9,
        6
    ),
    new Student(
        "!!!Пантюхин Роман",
        0,
        0,
        0
    )
];

let average = 0;
for (let i = 0, cnt = students.length; i < cnt; i++) {
    average += students[i].average;
}
average = Math.round(average / students.length);

console.log(average);

function getNumber(max = 11, min = 0) {
    return Math.floor(Math.random() * (max - min) + min);
}

function getTeam(arr) {
    let team = [];
    while(team.length < 3) {
        team.push(arr[getNumber(arr.length)]);
    }
    // console.log(team);
    if (team[0].name !== team[1].name && 
        team[0].name !== team[2].name && 
        team[1].name !== team[2].name) {
        return team;
    } else {
        return getTeam(arr);
    }
}


function setTeam(arr) {
    let team = getTeam(arr);
    let av = 0;
    for (let i = 0; i < team.length; i++) {
        av += team[i].average;
    }
    av = Math.round(av / team.length);
    if (av >= 550 && av <= 700) {
        console.log(av)
        return team;
    // } else {
    //     return setTeam(arr);
    }
}
let teams = []
// while(students.length > 13) {
    // teams.push(setTeam(students));
    // arr[0];
    // students = JSON.parse(JSON.stringify(arr[1]));
    // console.log(students.length);
// }

let team = getTeam(students);

// console.log(students);
console.log(team);