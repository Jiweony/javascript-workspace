//함수 선언문
function func(number) {
 return number * number; 
}
console.log(func(2));

//함수 표현식
//익명 함수 표현식
const funcExp = function (number){
  return number * number;
}
console.log(funcExp(4));

//Funtion 생성자 함수
const funcConst = new Function("number", "return number * number");
console.log(funcConst(5));

