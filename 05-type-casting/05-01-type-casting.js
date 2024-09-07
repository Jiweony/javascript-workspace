let x = 10;
console.log(typeof x); //number

//명시적 타입 변환
let xStr = x.toString();
console.log(xStr);

//암묵적 타입 변환
let xStr2 = x + '';
console.log(xStr2);

let xNum = x + '1'; //string -> number 
console.log(xNum);

console.log(Boolean('0') == 0); //false
