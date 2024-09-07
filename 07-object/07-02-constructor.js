const person = new Object();
console.log(person);

person.name = "김일남";
person.age = 99;
person.sayHello = function(){
  console.log("안녕하세요. 제 이름은 " + this.name);
}

console.log(person);
person.sayHello(); //함수 호출