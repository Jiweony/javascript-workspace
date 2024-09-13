//원본 배열 변경o
let arr = [1,2,3,4,5];

arr.splice(1, 3);

arr = [1, 2, 3, 4, 5];
arr.splice(1,0,1.5,2.0,"2.5"); //요소 삭제 및 추가
console.log(arr);
