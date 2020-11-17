/*
      *
     ***
    *****
*/
function triangle(n) {
    let stars = "", result = "";
    for (let i = 0; i < n; i++) {
        let simple = "";
        // if (i === 0) {
        //     stars += "*";
        // } else {
        //     stars += "**";
        // }
        stars += i ? "**" : "*";
        for (let j = 0; j < n - 1 - i; j++) {
            simple += " ";
        }
        result += simple + stars + "\n";
    }
    return result;
}

/* 
    Правильно написать окончание слова в зависимости от числа 
*/

function getNumber(max = 11, min = 0) {
    return Math.floor(Math.random() * (max - min) + min);
}

/*
    День    1, 21, 31               !11
    Дня     2-4, 22-24, 32-34       !12-14
    Дней    0, 5-20, 25-30, 35-40
*/
let n = getNumber(1001);
// let word = "";
function getWord(n, w0, w1, w2) {
    if (n % 100 >= 11 && n % 100 <= 14 ) {
        return w0;
    } else if (n % 10 === 1) {
        return w1;
    } else if (n % 10 === 2 || n % 10 === 3 || n % 10 === 4) {
        return w2;
    } else {
        return w0;
    }
}

console.log(`До Нового года осталось ${n} ${getWord(n, "часов", "час", "часа")}`);


