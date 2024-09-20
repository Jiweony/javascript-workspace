//나머지 매개 변수
function func1(...a) {
  console.log(a[0], a[1]); 
}

func1(1, 2, 3, 4, 5);

function func2(param1, param2, ...rest) {
  console.log(rest); 
}

func2(1, 2, 3, 4, 5);

function func3(...rest) {
  return rest.reduce((acc, curr) => acc + curr) 
}

func3(1, 2, 3, 4, 5);