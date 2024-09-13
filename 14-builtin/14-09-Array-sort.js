let arr = ["banana", "apple", "cherry"];
arr.sort();
console.log(arr); //원본 배열 변경 및 정렬된 배열 반환

arr = [10,13,12,11];
arr.sort();

// let func = function (a, b) {
//   return a - b;
// }
// arr.sort(func);

/** 
 * a-b 양수이면 스왑
 * 음수 또는 0이면 스왑안함
*/
let func1 = (a, b) => a - b; //오름차순
arr.sort(func1);

let func2 = (a, b) => b - a; //내림차순
arr.sort(func2);

arr = [
  {name: "오일남", age: 95},
  {name: "오이남", age: 93},
  {name: "오삼남", age: 97}
]
arr.sort((a, b) => b.age - a.age);