/**
 * 배열의 각 요소를 변환, 새로운 배열을 생성, 원본 배열에 영향x
 */
let arr = [1,2,3,4,5];
arr.map(num => num + 2);

arr = ["a", "b", "c"];
arr.map(str => str.toUpperCase());

let people = [
  {name : "오일남", age: 99},
  {name : "김일남", age: 98},
  {name : "정일남", age: 97}
]
console.log(people.map(person => person.name));

//매개변수 인덱스 사용(값, 인덱스)
arr = ["apple", "banana", "cherry"];
const result = arr.map((value, index) => `${index + 1} : ${value}`);

//객체 속성값 변경
people = [
  {name : "오일남", age: 99},
  {name : "김일남", age: 98},
  {name : "정일남", age: 97}
]
people.map(obj => ({
...obj, age: obj.age + 1;
}));

//빈 배열에 적용
arr = [];
arr.map(item => item * 2);