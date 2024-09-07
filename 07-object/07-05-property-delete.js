//프로퍼티 삭제
const person = {
  "first-name": "il-nam",
  "last-name": "Kim",
  age: 99,
  1: 1
}

console.log(Person);

delete person.age;
delete person["first-name"];
delete person["1"];

//불변성 유지 for 새로운 객체 생성
// const nerPerson = {
//   "last-name": person["last-name"]
// };

//구조 분해 할당
const {"first-name":firstName, "last-name":lastName} = person;
const newPerson = {
  firstName,
  "LAST-NAME": lastName
}

