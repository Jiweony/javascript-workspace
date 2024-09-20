// 객체 리터럴 Rest/Spread Property
const n = {x:1, y:2}
const m = {a:10, b:20}
console.log({n});
console.log({...n, ...m}); //n의 요소들 전부 들어가서 새로운 객체의 요소로 구성됨 + m의 구성요소들과 합쳐서 새로운 객체 구성

n = {x: 1, y: 2}
m = {y: 10, z: 20}
console.log({...n, ...m});

// Rest Property
console.log({...n, ...m, z: 1000, a: 2000});
const result = {...n, ...m, z: 1000, a: 2000};
const obj = result;
const {x, ...rest} = result;
console.log(x);
console.log(rest);
