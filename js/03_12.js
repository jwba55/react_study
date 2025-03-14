//출력문
console.log("script 출력"); //브라우저 개발자 도구의 콘솔에 출력
//alert("출력 방법"); //팝업 창을 띄워 출력
document.write("출력 방법"); //html 문서 내용에 출력
document.body.InnerHtml = "html 문서의 body 내용";
document.body.InnerHtml += "html 문서의 body 내용";

//변수 선언
//var : 함수범위 변수 선언 가변성 o - 최초 문법
//let : 블럭{}범위 변수 선언 가변성 o
//const : 블럭{}범위 상수 선언 가변성x

//블럭 범위가 일반적이다.

//감싸고 있는 함수가 없다면 전역 변수처럼 사용가능하다.
{
    var a;
    a = 1; //호이스팅
    a = 2;
    var a = 3;
} //중복선언 가능
console.log(a);


//블럭 단위
{
    let b = 1;
    b = 2;
    //let b = 3; 중복 선언 불가
    console.log(b);
}


{
    const c = 1;
    //c = 2; //상수는 최초 값 할당 이후 변경 불가
    console.log(c);
}

console.log(typeof 12345);
console.log(typeof 123.45);
console.log(typeof "문자열 테스트");
console.log(typeof '문자열 테스트');
console.log(typeof true);
console.log(typeof false);
console.log(typeof null); //'object'
console.log(typeof undefined);

let d;
console.log(d);
//선언 후 값을 저장한 적이 없는 변수 또는 객체의 존재하지 않는 속성의 값

console.log(typeof Symbol());
console.log(typeof BigInt(12345)); //number 타입에 안정적으로 저장할 수 없는 큰 정수 값
console.log(123e306 * 123e306);
console.log(BigInt(123e306) * BigInt(123e306));

//객체타입
let e = [1, 2, 3];//배열
let f = function (x, y) { //함수


    return x + y;
};
let g = { x: 1, y: 2 } //속성
//위와 같음
/* function f() {
    
} */
console.log(typeof e);  //object
console.log(typeof f);  //function
console.log(typeof g);  //object

console.log(typeof '123'); //String
console.log(typeof Number('123')); //Number
console.log(typeof true); //Boolean
console.log(typeof String(true)); //String
console.log(typeof Number(true), Number(true)); //Number
//자동 형변환
console.log('값은' + 123); //String + non-String
console.log(true + 123); //non-String + non-String

//입력문
/* let result = confirm("정말로 잘 받아졌나요?");
console.log(result);

result = prompt(); //인자로 전달한 것을 출력하고, 사용자가 입력한 값을 반환함
console.log(result); */

//2개의 숫자를 입력받고, 두 수를 더한 결과를 x+y = z 형태로 출력

/*
let x = prompt("X를 입력하세요");
let y = prompt("Y를 입력하세요");
x = Number(x);
y = Number(y)
let z = x + y;
console.log(x + "+" + y + "=" + z);
alert(`${x}+${y} = ${z}`); //백팁사용: 템플릿리터럴 `문자열 내부에 ${}사용` */

//number 타입 값들
console.log(123e1, 123e2, 123e2 - 1);
console.log(10, 0b10, 0o10, 0x10);  //10진수 2진수 8진수 16진수 - 접두어 사용
console.log(Infinity, typeof Infinity);
console.log(NaN, typeof NaN);  //Not a Number: 숫자가 아님을 표현
console.log(Number("가나다")); //숫자가 아닌 것을 숫자로 바꾸려고 했을때

