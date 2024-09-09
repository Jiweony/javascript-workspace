//깊은 복사
//객체를 텍스트(JSON)로 전환 -> 객체
const user = {
  name:"김일남",
  address: {
    city: "부산"
  }
}

const newUser = JSON.parse(JSON.stringify(user)); //객체를 텍스트로 변환 후, 다시 객체로 변환
console.log(user);
newUser.name = "김이남";
newUser.address.city = "서울";
console.log(newUser);


