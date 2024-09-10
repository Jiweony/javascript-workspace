var x = "global";

function foo() {
  var x = "function scope";
  console.log(x); 
}
foo();
console.log(x);

var y = 0; //범위 => let = 블록, var = 전역 
{
  var y = 1;
  console.log(y);
}
console.log(y);