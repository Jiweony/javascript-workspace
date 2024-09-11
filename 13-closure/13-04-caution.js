let arr = [];

for(var i = 0; i < 5; i++){
  arr[i] = function () {
    return i;
  }
}

for(var j = 0; j < 5; j++){ //출력값 : 5
  console.log(arr[j]());
} 

//let으로 변수 i를 지역 변수(블럭 레벨 스코프)로 변경하여 해결
arr = [];
for(let j = 0; j < 5; j++){
  console.log(arr[j]());
}

//즉시 실행함수를 이용한 해결
arr = [];
for(var i = 0; i < 5; i++){
  arr[i] = (function (num) {
    return num;
  })(i);
}

console.log(arr);


