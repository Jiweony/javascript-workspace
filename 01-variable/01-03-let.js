let foo = 123; // 전역 변수

console.log(foo);

{
  let foo = 456; // 지역 변수
}

console.log(foo);