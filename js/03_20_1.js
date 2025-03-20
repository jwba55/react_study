//함수(function)
//1. function 함수명(매개변수들) {함수 실행 명령문들 }
function add(x, y) {
    let z = x + y;

    return z;
}
let o = add(3, 4);

console.log(o);

//2. var 함수명 = function(매개변수들) {함수 실행 명령문들 }
let add2 = function (x, y) {
    let z = x + y;

    return z;
}

console.log(add2(3, 4));

//3. var = new Function('매개변수', '함수 실행 명령문들')
let add3 = new Function('x', 'y', 'return x+y');
console.log(add3(3, 4));

//4. 화살표 함수()=>{} (람다식)
/**
 * (1) function 키워드 대신  화살표(=>)를 사용
 * (2) 매개변수가 하나일 경우, 괄호 생략 가능
 * (3) 함수의 실행 명령문이 return문 하나일 경우, 중괄호와 return 생략 가능
 */
let add4 = (x, y) => { let z = x + y; return z; };
console.log(add4(3, 4));

//익명함수 (Anonymous Function)
//1. 함수명이 없는 함수
//2. 함수를 변수에 저장할 때 사용
let a = (function (x, y) {
    let z = x + y;
    return z;
})(3, 4);
console.log(a);

console.log("====================================");


//다음과 같이 출력되도록 함수 calc를 정의
console.log(calc(6, '+', 2));
console.log(calc(6, '-', 2));
console.log(calc(6, '*', 2));
console.log(calc(6, '/', 2));

function calc(x, op, y) {
    switch (op) {
        case '+':
            return x + y;
        case '-':
            return x - y;
        case '*':
            return x * y;
        case '/':
            return x / y;
    }
}

//'abc' 와 '가나다'가 웹 브라우저 문서에 출력되도록 println 함수를 정의
function println(str) {
    document.write(str + '<br>');
}
println('abc');
println('가나다');

console.log("====================================");

function logThree(a, b, c) {
    console.log(a, b, c);
}

logThree(1, 2, 3);
logThree(1, 2); //매개변수 수보다 적은 수의 인자를 전달하면서 실행 가능 

//인자를 3개 받아서 합산한 결과를 방환하는 함수 addThree를 정의
/*function addThree(a, b, c) {
    if (z === undefined) z = 0;
    y === undefined ? y : 0;
    x = x || 0;
    let w = a + b + c;
    return w;
}
console.log(addThree(1, 2, 3));
console.log(addThree(1, 2));
console.log(addThree(1));
console.log(addThree()); */

console.log("====================================");
function addAll() {
    //arguments: 함수 실행 시 전달된 인자들을 저장하는 유사 배열
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}
console.log(addAll(1, 2, 3, 4, 5));
console.log(addAll(1, 2, 3));