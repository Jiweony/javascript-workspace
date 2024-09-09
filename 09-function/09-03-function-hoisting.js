console.log(func(2)); //함수 호이스팅
console.log(funcExp(5)); //함수 호이스팅 불가 -> 표현식

function func(number) { //선언식
  return number * number; 
}

const funcExp = function (number){ //표현식
  return number * number;
}