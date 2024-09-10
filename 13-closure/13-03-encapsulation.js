//생성자로 함수 생성
function Counter() {
  let counter = 0;

  this.increase = function () {
    return ++counter;
  }

  this.decrease = function () {
    return --counter;
  }
}

const counter = new Counter();
console.log(counter.counter); //접근 불가
console.log(counter.increase);