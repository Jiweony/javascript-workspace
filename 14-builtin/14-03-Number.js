/**
 * 숫자를 다루는 wrapper 객체(원시 타입의 값을 감싸서 객체로 만드는 것) 
 * 자바스크립트의 모든 수는 실수
 * number
 */

//toString() -> number를 string으로 바꿔줌
let num = 123;
num.toString();//string

let now = new Date();
console.log(now);
let year = now.getFullYear();
let month = now.getMonth() + 1; //Month는 0부터 시작
let day = now.getDate();

let newDateFormat = `${year}-${month}-${day}`;
newDateFormat = `${year}-${month.toString().padStart(2,0)}-${day.toString().padStart(2,0)}`;
console.log(newDateFormat);

//toFixed() -> 반올림 적용
num = 123.456789;
console.log(num.toFixed(2)); //123.46
console.log(num.toFixed(4)); 
console.log(num.toFixed()); //123

//toPrecision() -> 정수, 소수를 포함한 전체 자릿수 결정 / 반올림 적용
num = 123.456789;
console.log(num.toPrecision(4));

//parseInt() -> 정수로 변환
let str = "123";
let numParseInt = parseInt(str);
console.log(numParseInt);

str = "1010";
numParseInt = parseInt(str, 2); //str값은 2진수 적용, 변환값 10진수

//parseFloat() -> 실수로 변환
str = "123.456789";
numParseFloat = parseFloat(str);
