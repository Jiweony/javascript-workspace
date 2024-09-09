//콜백함수 -> 함수의 인수로 사용하는 함수

console.log("시작");

const showMsg = function (){
  console.log("3초가 지났습니다.");
}
//showMsg();

setTimeout(showMsg, 3000); //비동기 처리

console.log("끝");
