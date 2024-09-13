/**
 * 일급객체함수
 * 1. 익명의 리터럴로 표현 가능
 * 2. 변수, 자료 구조에 저장 가능
 * 3. 함수에 매개 변수에 전달 가능
 * 4. 반환값으로 사용 가능
 */

function operateOnArray(arr, operation) {
  const result = [];
  for(let num of arr){
    result.push(operation(num))
  }
  return result; 
}
let numbers = [1,2,3];
console.log(operateOnArray(numbers, (num) => num * 2));

//함수를 반환하는 예
function makeMul(factor) {
  return function (num) {
    return num * factor;
  }
}

let doubler = makeMul(2);
console.log(doubler(5));
