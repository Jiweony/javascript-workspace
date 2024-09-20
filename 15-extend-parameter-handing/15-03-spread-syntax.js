//전개문법
console.log(...[1,2,3]); //1, 2, 3

console.log(..."hello");

console.log(...new Map([["a", 1], ["b,", 2]]));

console.log(...new Set([1, 2, 3]));

console.log(...{a:1, b:2}); //객체는 안됨

const [a, b, c, d, e] = [..."hello"]
console.log(a);
console.log(b);
console.log(c); //l,l,o 배열형태

function func1(x,y,z){
  console.log(x);
  console.log(y);
  console.log(z);
}
const arr = [1,2,3];
func1(...arr);

function func2(param, ...rest) {
  console.log(param);
  console.log(rest);
}
func2(1,2,3,4,5); //첫번째 인수는 param에 나머지는 rest에 배열 형태로 들어감

