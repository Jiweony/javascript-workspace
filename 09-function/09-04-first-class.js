//일급 객체
//1. 무명의 리터럴로 표현이 가능하다.
//2. 변수에 저장할 수 있다.
const increase = function (num) {
  return ++num;
}

const decrease = function (num) {
  return --num;
}

//2. 자료구조에 저장할 수 있다.
const predicates = {
  increase: increase, //함수대입
  decrease: decrease
}

//3. 함수의 매개변수에 전달할 수 있다.
function makeCounter(predicate){
  let num = 0;
  //4. 반환값으로 사용할 수 있다.
  return function(){
    num = predicate(num);
    return num;
  }
}

const increaser = makeCounter(predicates.increase);
console.log(increaser());
