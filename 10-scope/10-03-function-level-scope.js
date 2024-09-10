let x1 = "global";

//예제1
function foo(){
  let x1 = "local";
  console.log(x1);
  
  function bar(){
    console.log(x1);
  }

  bar();
}
foo();

//예제2
let x2 = 10;
function foo(){
  let x2 = 100;
  console.log(x2);
  
  function bar(){
    console.log(x2);
  }

  bar();
}
foo();
console.log(x2);


//예제3
let x3 = 10;

function foo(){
  let x3 = 100;
  console.log(x3);
  
  function bar(){
    x3 = 1000;
    console.log(x3);
  }
  bar();
}
foo();
console.log(x3);

//예제4
let foo = function () {
  let a = 3, b = 5;

  let bar  = function () {
    let b = 7, c = 11;
    
    a += b + c;
    console.log(a);
  }
  bar();
}
foo();

//예제 5
//Lexcical scope
let x4 = 1;

function foo() {
  let x4 = 10;
  bar();  
}

function bar() {
  console.log(x4); //선언될 때, 같은 scope의 변수가 이미 할당됨
}

foo();

//내부 함수인 경우
function foo() {
  let x4 = 10;

  function bar() {
    console.log(x4); //선언될 때, 같은 scope의 변수가 이미 할당됨
  }
  bar();
}
foo();