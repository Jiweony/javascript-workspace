//concat
const arr = [1, 2, 3];
const arr2 = [4, 5, 6];
arr.concat(arr2);
console.log([...arr, ...arr2]); //전개문법으로 배열 연결

//splice
const arr3 = [1, 2, 3, 6];
const arr4 = [4, 5];
arr3.splice(2, 0, ...arr4);

//push
const arr5 = [1, 2, 3];
const arr6 = [4, 5, 6];
arr5.push(...arr6); //배열안의 요소들이 전개되어서 들어감

//shallow copy
const arr7 = [1,2,3,4,[5]];
const arr8 = [...arr7];
arr7[3][0] = 5;
console.log(arr7);
console.log(arr8);

