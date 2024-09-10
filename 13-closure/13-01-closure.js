// 폐쇄
function outerFunc(){
    let x = 10;
    const innerFunc = () => {
      return ++x; 
    }
    return innerFunc;
}
// console.log(outerFunc());
const closure1 = outerFunc();
