// 로그인 -> 장바구니 노트북 담기 -> 결제
function login(username, callback) {
  setTimeout(()=>{
    callback(username);
  }, 3000)
}

// login("오일남", (username)=>{
//   console.log(`${username}님 안녕하세요.`);
// });

function addToCart(product, callback) {
  setTimeout(()=>{
    callback(product);
  }, 2000)
}

// addToCart("노트북", ()=>{
//   console.log(`${product}를 장바구니에 담았습니다.`);
// })

function makePayment(money, product, callback) {
  setTimeout(()=>{
    callback(money, product);
  }, 1000)
}

// makePayment(1000, '노트북', (money,product)=>{
//   console.log(`${money}로 ${product}구매완료!`);
// })

login("오일남",(username)=>{
  console.log(`${username}님 안녕하세요.`);
  addToCart("노트북",(product)=>{
    console.log(`${product}를 장바구니에 담았습니다.`);
    makePayment(1000,product,(money, product)=>{
      console.log(`${money}로 ${product}구매완료!`);
    })
  })
})