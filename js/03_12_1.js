/* let xp = 1;
console.log(xp++);
console.log(++Xp); */
console.log(0 == false, 0 === false);
console.log(0 == "", 0 === "");
console.log(123 == "123", 123 === "123");
console.log(null == undefined, null === undefined);

//비교 연산 시 부정확한 숫자 저장 주의
let aa = 0.1;
let b = 0.2;
let c = aa + b;
console.log(c == 0.3, c);
console.log((0.1 * 10 + 0.2 * 10) / 10);

//NaN은 자신을 포함한 다른 어떤 값과도 다르다
console.log(NaN == NaN); //false
console.log(NaN > 0); //false
console.log(NaN != NaN) //true
let n = Number("가나다");
if (n === NaN) {
    console.log("n = NaN");
}   //거짓

if (Number.isNaN(n)) {
    console.log("@@@@@@@" + "n = NaN");
}
if (n != n) {
    console.log("n = NaN");
}
if ("") {
    console.log("빈 문자열은 true");
}
if (" ") {
    console.log("공백 문자열은 true");
}
if (0) {
    console.log("숫자 0은 true");
}
if (1) {
    console.log("숫자 1은 true");
}
if (-1) {
    console.log("숫자 -1은 true");
}
if (NaN) {
    console.log("NaN은은 true");
}
if (null) {
    console.log("null은 true");
}
if (undefined) {
    console.log("undefined는 true");
}
console.log("################");

console.log("abc" && "def");
console.log(0 && "def");    //false이기 때문에 결과 값이 0이 나옴
console.log("abc" || "def");
console.log(0 || "def");

//let z = x || y;

console.log("----------------------------------------");
/*
let month = prompt("월을 입력하세요");
let season;
month = Number(month);
if (3 <= month && month <= 5) {
    season = '봄';
} else if (6 <= month && month <= 8) {
    season = '여름';
} else if (9 <= month && month <= 11) {
    season = '가을';
} else if (12 <= month && month <= 2) {
    season = '겨울';
} else {
    season = '알수없는 계절';
}
alert(season); */

/*사용자로 부터 숫자를 계속 입력받고, 입력받은 숫자들의 총합을 출력
    취소 버튼을 클릭하거나, 프롬프트 창의 우측 상단 x버튼 클릭시 입력 종료
    숫자가 아닌 문자열을 입력한 경우, 합산하지 않고 '숫자가 아닌 것을 입력했다'고 출력 */


let test = 0;
while (true) {
    let result = confirm("숫자를 입력해주세요");
    if (isNaN(number) || number.trim() === "") {
        alert("올바른 숫자를 입력해주세요.");
        continue;
    }
    if (result == true) {
        let number = prompt();

        test = Number(test) + Number(number);

    } else if (result == false) {
        break;
    }

}
console.log(test);
console.log("----------------------------------------");