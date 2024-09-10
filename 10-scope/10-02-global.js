var global  = "global"; //전역

function foo() {
  var local = "local"; //지역
  console.log(global);
  console.log(local);
}
foo();

console.log(global);
console.log(local); //참조 에러 발생 -> 함수 안의 변수 직접 접근 불가