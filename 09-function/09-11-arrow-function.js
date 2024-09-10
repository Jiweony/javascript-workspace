//ES5
const pow = function (x) {
  return x * x;
}

//ES6
const powArrow = (x) => x * x; //화살표 함수 

//setTimeout 예제
const [x, y] = [2, 3];
setTimeout(function () {
  console.log(x + y); 
}, 2000);

setTimeout(() => console.log(x + y), 2000);

//고차함수에서의 화살표 함수
const arr2 = [1, 2, 3];
const result = arr2.map(function (x) {
  return x * 2; 
})
console.log(result);

const result2 = arr2.map((x) => x * 2)
console.log(result);