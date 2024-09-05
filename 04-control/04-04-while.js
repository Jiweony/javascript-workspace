/**
 * 반복 횟수가 정해져 있지 않음
 */

let count = 0;

while(true) {
  console.log(count);
  count++;
  if(count === 10) {
    break;
  }
}

/**
 * do-while -> 한번은 실행하고 싶을 경우
 */

let cnt = 0;

do {
  console.log(cnt);
  cnt++;
}while(cnt < 3)

/**
 * break
 */

//label 블록문

foo : {
  console.log(2);
  break foo; //break문 밑으로 코드 실행 안됨
  //console.log(3);
  //console.log(4);
}