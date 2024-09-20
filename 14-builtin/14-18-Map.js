/**
 * 키-값 쌍을 저장하는 내장 객체
 * 중복돈 키는 허용 안함
 * 객체와 달리 모든 유형의 값(원시 값 또는 객체)을 키로 사용 가능
 * 삽입된 순서대로 키-값 쌍을 저장
 * 순서가 보장되기 때문에 순회를 하거나 데이터를 저장할 때 사용
 */

let map = new Map();
console.log(map);

map.set("name", "오일남");
map.set("age", 99);
map.set({key: "value"}, "객체를 키로 넣었음");

console.log(map.get('name'));

// map 안의 객체에 접근 -> 식별자 필요
const obj = {key2: "value2"};
map.set(obj, "객체를 키로 넣었음(식별자 사용)");
console.log(map.get(obj));

// 키 존재 여부 확인
console.log(map.has("age")); //true
console.log(map.has("address")); //false

// 키 값 삭제
map.delete("age");
console.log(map);
console.log(map.size); //크기 확인

//순회
map.forEach((v, k) => {
  console.log(v, k); 
});

map.entries(); //키-값을 반복 가능한 Iterator 객체로 변환

const studentsMap = new Map();
studentsMap.set("오일남", "99");
studentsMap.set("오이남", "98");
studentsMap.set("오삼남", "97");

console.log([...studentsMap.entries()].sort((a,b) => b[1] - a[1])); //내림차순 정렬