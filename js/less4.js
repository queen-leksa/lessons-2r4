let x1 = Math.random() * 61 - 30;
x1 = Math.floor(x1);
let y1 = Math.random() * 61 - 30;
y1 = Math.floor(y1);
let x2 = Math.random() * 61 - 30;
x2 = Math.floor(x2);
let y2 = Math.random() * 61 - 30;
y2 = Math.floor(y2);
let x3 = Math.random() * 61 - 30;
x3 = Math.floor(x3);
let y3 = Math.random() * 61 - 30;
y3 = Math.floor(y3);

console.log(`${x1}, ${y1}`);

let ab = Math.sqrt((x2 - x1) **2 + (y1 - y2) **2);
let bc = Math.sqrt((x2 - x3) **2 + (y2 - y3) **2);
let ac = Math.sqrt((x1 - x3) **2 + (y3 - y1) **2);

let p = ab + bc + ac;
console.log(p);

let pm = (ab + bc + ac)/2;
console.log(pm);

let s = Math.sqrt(pm*(pm-ab)*(pm-bc)*(pm-bc));
console.log(s);