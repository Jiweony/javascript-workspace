//배열의 모든 요소를 순회(for문과 유사)
//반환값 없음
// break, continue문 사용불가!

let arr = [1,2,3,4,5];

let result = arr.forEach(num => {
  console.log(num);
});

arr = ["apple", "banana", "cherry"];
arr.forEach(str => {
  console.log(str.toUpperCase());
})

const people = [
  {id: 1, name: "오일남", age: 99},
  {id: 2, name: "오이남", age: 98},
  {id: 3, name: "오삼남", age: 97},
];

people.forEach(person => {
  console.log(`${person.id}번 ${person.name}님, 환영합니다.`);
})

arr = [1,2,3,4,5];
keys = ["a", "b", "c"];
newArr = [];
arr.forEach((v, i) => {
  const result = {[keys[i]]: v}
  newArr.push(result);
})
