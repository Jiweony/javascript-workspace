/**
 * JSON(Javascript Object Notation) : 자바스크립트 객체 표기법
 * 서버와 클라이언트 간의 데이터 전송에서 많이 활용
 */

/**
 * JSON.stringify(value, replacer, space ) : 객체를 JSON 형태의 문자열로 변환
 */

let obj = {name: "오일남", age: 99, address: "부산"};
let json = JSON.stringify(obj);
console.log(json);

let jsonReplacer = json.stringify(obj, ["name", "age"]);
console.log(jsonReplacer);

let jsonReplacerSpace = json.stringify(obj, Object.keys(obj), 2);
console.log(jsonReplacerSpace);

/**
 * JSON.parser(text, reviver)
 */
let objParser = JSON.parse(jsonReplacer);

let objParserReviver = JSON.parse(jsonReplacer, (key, value) => {
  if(key === "age") return value + 1;
  return value;
});

