const arr = [1,2,3];

for(let value of arr){
  console.log(value); // 값 출력
}

for(let item of arr.entries()){
  console.log(item); 
}

//배열 고차 함수
arr.forEach(function (value, idx) {
  console.log(value, idx);
  
});