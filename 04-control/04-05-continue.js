let string = "Hello world!";
let count = 0;

//문자 l의 갯수 카운트
for(let i = 0; i < string.length; i++){
  if(string[i] !== 'l'){
    continue;
  }
  count++;
}

console.log(count);
