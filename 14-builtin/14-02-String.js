// lengh -> 문자열의 길이 반환
let alphabet = "abcdefghijk";
let alphabetLength = alphabet.length;
console.log(alphabetLength);

//indexOf() -> 해당 문자(열)의 시작 인덱스 반환
let str = "Hello, world!";
let index = str.indexOf("world");
console.log(index); // 7

let firstO = str.indexOf("o");
console.log(firstO); // 4, 왼쪽부터 찾고 첫번째의 인덱스 반환

let notFound = str.indexOf("JavaScript");
console.log(notFound); // 해당 문자 없는 경우 -> -1

//lastIndexOf()
let lastIndex = str.lastIndexOf("o");
console.log(lastIndex); // 8 -> 오른쪽부터 찾음(마지막 문자부터 찾음)

//slice()
let hello = str.slice(0, 5);
console.log(hello);

let world = str.slice(7); //7번 인덱스부터 끝까지~
console.log(hello);

let lastChar = str.slice(-1);
console.log(lastChar);

//subString() -> 문자열 잘라내기
let helloSub = str.substring(0,5);

//replace()
let worldToJavaScript = str.replace("world", "JavaScript");
let caseInsensitive = str.replace(/hello/i, "Hi"); // insensitive : 대소문자 구별하지 x
let replaceAll = str.replaceAll(/o/g, "O"); // 문자열에서 모든 o를 O로 변환

//toUpperCase() -> 소문자를 대문자로 변환 / toLowerCase() -> 대문자를 소문자로 변환
let lower = str.toLowerCase();
let upper = str.toUpperCase();

//concat() -> 문자열 연결
let strConcat1 = "Hello";
let strConcat2 = "Everyone";

let resultConcat = strConcat1.concat(" ",strConcat2);

//trim() -> 공백제거
let strTrim = "     Hello    world!!    ";
strTrim.trim();

//padStart() -> 공백추가
let strPadStart = "42";

let paddedStart = strPadStart.padStart(5,0); //공간(패딩) 생성 / 두번째 인수 -> 해당 인수로 공간 채움

//startsWith()
let url = "http://website.com";

if(url.startsWith("http://")){
  alert("올바른 url형식입니다.");
}else{
  alert("올바르지 않은 url형식입니다.");
}
