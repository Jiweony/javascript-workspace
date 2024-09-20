const obj = {name: "오일남", age: 99};

const [name, age] = obj;
console.log(`이름 : ${name}, 나이 : ${age}`);

const {name: newName, age: newAge} = obj; // 새로운 변수 설정
console.log(`이름 : ${newAge}, 나이 : ${newAge}`);

const todos = [
  {id:1, content: "HTML", completed: true},
  {id:2, content: "CSS", completed: true},
  {id:3, content: "JS", completed: false}
]

let completedTodos = todos.filter((todo) => todo.completed);
console.log(completedTodos);

completedTodos = todos.filter(({completed}) => completed);
console.log(completedTodos);

//구조분해할당 사용 예시2
const person = {
  name: "오일남",
  address: {
    zipCode: "12345",
    city: "부산"
  }
}

console.log(person.address.city); //부산에 접근 for

const {name: name2, address: {city}} = person;
console.log(city);