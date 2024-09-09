/**
 * [작명법] 
 * - 기본적으로 변수명과 동일
 * - 동사로 작명
 */

// 1. 인수 x, 반환값 x
function func1(){
  console.log("인수 x, 반환값 x")
}
func1();

//2. 인수 x, 반환값 o
function func2(){
  return "인수 x, 반환 o";
}
console.log(func2());

//3. 인수 o, 반환 x
function func3(str) {
  console.log(str);  
} 
console.log(func3("인수 o, 반환 x"));

//4. 인수 o, 반환 o
function func4(str) {
  return str;
}
console.log(func4("인수o, 반환 o"));

