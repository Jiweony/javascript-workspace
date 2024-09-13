//toString()
let arr = [1,2,3,4,5];

arr = [1, 'a', 2, 'b'];

//join() -> 배열의 모든 요소를 쉼표나 지정된 구분 문자열로 구분하여 연결한 새 문자열을 만들어 반환
arr = [1,2,3,4,5];
console.log(arr.join()); //1,2,3,4,5
console.log(arr.join(""));

arr = ["010", "1234", "5678"];
console.log(arr.join("-"));

arr = ["Hello", "World"];
console.log(arr.join(" "));

// push(), pop(), shift()
arr = [];
console.log(arr);

arr.push("문자열1");
arr.push("문자열2");
arr.push("문자열3");
arr.push("문자열4");
arr.push("문자열5");

arr.pop(arr); //배열의 요소를 제거하고, 제거한 요소를 반환
arr.shift() //배열의 요소를 제거하고, 제거한 요소를 반환
arr.unshift(1) //0번 인덱스에 값 추가

//reverse()
arr = ["a", "b", "c"];
console.log(arr.reverse()); //원본 배열 변경

//fill()
arr = new Array(10);
console.log(arr.length);

arr = new Array(10).fill(0);
console.log(arr);

//from() -> 유사배열객체를 배열로 만들어줌
arr = Array.from("Hello"); //문자열 분해해서 배열로 변환
console.log(arr);

arr = Array.from({0:"a", 1:"b"});
console.log(arr);

//유사배열객체를 새로운 배열로 변환해서 반환
let arrLike = {length: 5, 0:"a", 1:"b"}; 
console.log(arrLike[0]);
console.log(arrLike[1]);

arr = Array.from(arrLike);
arr.forEach(el => { //[]형태의 '배열'에서는 사용가능 / 유사배열객체는 배열 메소드 사용불가
  console.log(el);
});

//콜백 함수 사용
arr = Array.from([1,2,3,4,5], function(value, index) {
  return value + index;  
})
console.log(arr);

