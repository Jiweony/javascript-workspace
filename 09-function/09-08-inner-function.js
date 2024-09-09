function parent(param){
  let parentVar = param;
  function child(){
    let childVar = "Kim";
    console.log(parentVar + " " + childVar); 
  }
  child();
  console.log(parentVar);
  // console.log(childVar); //호출 불가 -> 참조 에러 발생 : 함수 스코프 안에서만 사용가능
}
parent("Hello");


function sayHello(name) {
  let text = "Hello" + name;

  const logHello = function () {
    console.log(text);
  }
  logHello();
}
sayHello("Lee");