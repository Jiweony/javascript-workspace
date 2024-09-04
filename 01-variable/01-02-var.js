var circleArea = 3.141592 * 2 *2;
var cylinderVolume = circleArea * 5;
var cylinderVolume = circleArea * 10;

/*
  [변수 명명규칙]
  1) _, $, a-z, A-Z, 0-9
  2) 숫자로 시작 불가
  3) 특수문자 사용 불가
  4) 대소문자 구분
  5) 카멜케이스 사용
  6) 의미있는 이름 사용
  7) 예약어 사용 불가 
*/

/*
  호이스팅(Hoisting)
  var, let, const, function, function*, class
*/
console.log(foo);
var foo = 123;

console.log(foo);
{
  var foo = 456;
  console.log(foo);
}