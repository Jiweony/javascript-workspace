/**
 * 중복된 값이 없는 고유한 값들을 저장하는 객체
 * 삽입 순서대로 값 저장(정렬이 필요한 경우 배열로 변환 후 정렬)
 * 원시 값, 객체 모두 저장 가능
 * 순회 가능
 */
const mySet = new Set();
mySet = new Set([1,2,3,4,5]);
mySet.has(1);//해당 요소가 있는지 확인
mySet.delete(1);//인덱스로 접근불가 -> 값 직접 적어줘야 함
console.log(mySet.size) //Set의 크기

// Set 순회
mySet,array.forEach(value => {
  console.log(value);
});

mySet.clear();//초기화

//배열로 변환
mySet = new Set([4,5,6]);
const arr = Array.from(mySet);//Set을 배열로 변환
console.log(Array.isArray(arr));


const arr2 = [...mySet];
console.log(Array.isArray(arr2));
