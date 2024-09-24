// 로그인 -> 장바구니 -> 결제

function login(username) {
  const promise =  new Promise((resolve, reject)=>{
    setTimeout(() => {
      if(username){
        resolve(username);
      }else{
        reject(new Error("아이디를 입력해주세요!"))
      }
    }, 2000)
  })
}

function addToCart(product) {
  return new Promise((resolve, reject)=>{
    setTimeout(() => {
      if(product){
        resolve(product);
      }else{
        reject(new Error("장바구니에 넣을 상품이 없음!"))
      }
    }, 2000)
  })
}


function makePayment(money, product) {
  return new Promise((resolve, reject)=>{
    setTimeout(() => {
      if(!product){
        reject(new Error("장바구니에 넣을 상품이 없음!"))
      }
      if(money<=0){
        reject(new Error("음수 금액은 사용할 수 없습니다."))
      }
      resolve({money, product});
    }, 2000)
  })
}

login("오일남").then((username)=>{
  console.log(`${username}님 환영합니다!`);
  return addToCart("노트북"); 
}).then((product)=>{
  console.log(`${product}을 장바구니에 담았습니다.`);
  return makePayment(1000, product);
}).then((money, product)=>{
  console.log(`${money}로 ${product} 결제 완료`);
})