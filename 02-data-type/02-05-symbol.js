//객체에서 사용하는 이름의 충돌 위험 없는 유일한 속성(property) 키

const obj = {
  key1: "value1",
  key2: "value2"
};

const obj2 = {};
obj2["name"] = "김일남";
obj2["age"] = "99";

let symbolName = Symbol("name");
console.log(symbolName);
console.log(obj2);

obj2[symbolName] = "오일남";
console.log(obj2);

let objKeyArr = Object.keys(obj2);
console.log(objKeyArr);

let symbolName2 = Symbol("새로운 이름");
obj2[symbolName2] = "홍길동";
console.log(obj2);
