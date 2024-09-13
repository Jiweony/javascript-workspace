/**
 * 조건에 맞는 요소만 선택해서 새로운 배열 반환
 * 원본 배열 변경 안함
 */
let arr = [1,2,3,4,5,6];
let result1 = arr.filter(num => num % 2 === 0); //짝수인 배열의 요소만 반환
console.log(result1);
let result2 = arr.filter(num => num % 2 !== 0); //홀수인 배열의 요소만 반환
console.log(result2);

arr = [
  {name: "오일남", age: 95},
  {name: "오이남", age: 93},
  {name: "오삼남", age: 97}
]
result = arr.filter(person => person.age >= 95);
console.log(result);

result = arr.filter(person => true);
console.log(result);