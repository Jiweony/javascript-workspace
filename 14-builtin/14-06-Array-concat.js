//원본배열 변경x
let arr1 = [1,2,3];
let arr2 = [4,5,6];
let arr3 = arr1.concat(arr2);
arr3 = arr1.concat(arr2, 7, 8, 9);
console.log(arr3);