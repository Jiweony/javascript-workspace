//구조 분해 할당
const arr = [1, 2, 3];
const [a, ,c] = arr;

const [d, e, f] = [4, 5, 6];
console.log(d);
console.log(e);
console.log(f);

const [g, h, i = 0] = [7, 8]; // 기본값
console.log(g);

const [x, ...rest] = [1, 2, 3];
console.log(x);
console.log(rest);

const today = new Date();
const [year, month, day] = today.toISOString().substring(0, 10).split("-");
console.log(`${year}년 ${month}월 ${day}일`);