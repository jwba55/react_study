//시작 정수와 끝 정수를 입력받고, 시작 정수부터 끝 정수까지 1씩 증가시키면서 출력 총합도 출력
/* 문제 잘못 오해해서 잘못만든거...ㅌㅋㅋㅋ
let number = prompt("시작정수를 입력하세요.");
let number2 = prompt("끝 정수를 입력하세요.");
let i = number2 / 2 + 1;
let a = i - 1;
for (; i <= number2 && number <= a; i++) {
    console.log(a);
    console.log(i);
    a--;
} */
/*
console.log("=====================================");
let start = prompt("시작정수를 입력하세요.");
let end = prompt("끝 정수를 입력하세요.");
start = Number(start);
end = Number(end);
let sum = 0;
for (let i = start; i <= end; i++) {
    console.log(i);
    sum += 1;
}
console.log("총합은" + sum + "입니다.")
console.log("=====================================")*/


//2단부터 9단까지 구구단을 출력 취소 버튼을 클릭하거나, 프롬프트 창의 우측 상단 x버튼 클릭 시 입력 종료, 숫자가 아닌 문자열을 입력한 경우, 합산하지 않고 '숫자가 아닌 것을 입력했다'고 출력
while (true) {
    let n = prompt("몇단까지 출력할까요?")
    if (!n) break;
    n = Number(n);
    if (isNaN(n)) {
        alert('숫자가 아닌 것을 입력했습니다.');
        continue;
    }
    for (let i = 2; i <= 9; i++) {
        for (let j = 1; j <= 9; j++) {
            console.log(i + "x" + j + "=" + i * j)
        }
        if (i === n) {
            break;
        }
    }
}
//(1)단수를 입력받아서, 해당 단까지만 출력
//(2)단수를 입력받아서, 해당 단은 제외하고 출력
//(3)곱수를 입력받아서, 해당 곱까지만 추렭
//(4)단수와 곱수를 입력받아서, 해당 단수*곱수 까지만 출력력
/* 
         let i;
         let j;
         let n = prompt('단수');
         n = Number(n);
         for(i=2; i<=9; i++){
            if(i===n) continue;  //n단만 제외하고  출력
            for(j=1; j<=9; j++){
           console.log(i,'*',j,'=',i*j);
            }
            // if(i===n) break; //n단까지만 출력
         }
         */

/*   let i;
  let j;
  let n = prompt('단수');
  n = Number(n);
  for(i=2; i<=9; i++){
     for(j=1; j<=9; j++){
    console.log(i,'*',j,'=',i*j);
    if(j===n) break; // * n 까지만 출력
     }
  } */

/*    let n = prompt('단수');1
   let n2 = prompt('곱수');
   n = Number(n);
   n2 = Number(n2);
   out: for(let i=2; i<=9; i++){
      for(let j=1; j<=9; j++){
     console.log(i,'*',j,'=',i*j);
     //if(i===n && j===n2)
     //break out;  //레이블을 사용한 외부 반복문 break
     if(i===n && j===n2){
      flag =false;
      break;
      }
  }
  if(flag===false) break;
}
*/
/*  let n = prompt('단수');1
      let n2 = prompt('곱수');
      n = Number(n);
      n2 = Number(n2);
      out: for(let i=2; i<=9; i++){
         for(let j=1; j<=9; j++){
        console.log(i,'*',j,'=',i*j);
        //if(i===n && j===n2)
        //break out;  //레이블을 사용한 외부 반복문 break
        if(i===n && j===n2){
         i=11;
         break;
         }
     } 
         .0
 } */

//레이블을 사용한 외부 반복문 break
outer: for (let i = 2; i <= 9; i++) {
    for (let j = 1; j <= 9; j++) {
        console.log(i + "x" + j + "=" + i * j)
        if (i === n) {
            break outer;
        }
    }
}

//레이블을 사용한 외부 반복문 continue
outer: for (let i = 2; i <= 9; i++) {
    if (i === n) {
        continue outer;
    }
    for (let j = 1; j <= 9; j++) {
        console.log(i + "x" + j + "=" + i * j)
    }
}
