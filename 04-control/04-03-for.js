for(let i = 0; i < 2; i++){
  console.log(i)
}

//중첩
for(let i = 0; i < 5; i++){
  for(let j = 1; j<=5; j++){
    console.log("[" + i + ","+ j + "]");
    console.log(`[${i} x ${j}]`); //탬플릿 리터럴 -> ``사용
  }
}