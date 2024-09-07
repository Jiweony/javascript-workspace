const foo = {
  val:10
};

const bar = foo;
bar.val = 20; //foo의 값도 바뀌게 됨

const user = {
  name:"김일남",
  address: {
    city: "부산"
  }
}

const newUser = user;
newUser.name = "김이남"; //user의 값도 바뀌게 됨

//-------------------------------------------------

//shallow copy
const newUser2 = Object.assign({}, user); //빈 객체에 user객체 병합 -> 다른 객체로 생성
newUser2.name = "김삼남";

const newUser3 = {...user};
newUser2.name = "김삼남";
newUser.address.city = "서울";