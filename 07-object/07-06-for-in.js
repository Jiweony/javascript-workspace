const person = {
  "first-name": "il-nam",
  "last-name": "Kim",
  age: 99,
  1: 1
}

const personArr = Object.keys(); //배열의 키만 가지고 배열로 만듬
for(let i = 0; i < personArr.length; i++){
  console.log(person[personArr[i]]); //키의 값 출력 
}

//객체 순회
for(let prop in person){
  console.log(person[prop]);
}

//배열 순회
const arr = ["one", "two"];
for(let index in arr) {
  console.log(arr[index]);  
}

//문자열 순회
const str = "javascript";
for(let c in str){
  console.log(c);
}