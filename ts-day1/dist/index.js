"use strict";
//1. Boolean
//논리적인 참/ 거짓을 나타낸다.
let isStudent = true;
let hasLicense = false;
//isStudent = "yes"; 문자열을  boolean타입 변수에 할당할 수 없다.
console.log(`학생여부:  ${isStudent}`);
//2. Number(숫자)
//정수 : 소수점이 없는 숫자
//실수 : 소수점이 있는 숫자
//Infinity : 무한대
//NaN(Not a Number)
let age = 28;
let salary = 55000.50;
let positiveInfinity = Infinity;
let negativeInfinity = -Infinity;
let notANumber = NaN;
console.log(`나이 : ${age}, 연봉 :${salary}`);
//3. string(문자열)
//텍스트 데이터를 나타낸다.
//템플릿 리터럴도 사용 가능하다.
let userName = "김철수";
let greeting = `안녕하세요, 저는 ${userName}입니다.`;
console.log(greeting);
//4. Array(배열)
/// 타입 뒤에 []를 붙이거나, Array<Type>형식으로 선언한다.
let scores = [90, 85, 95, 100];
// scores.push("하이");
scores.forEach(x => console.log(x));
let names = ["Alice", "Bob", "Charlie"];
console.log(names);
let person = [30, '홍길동', true];
console.log(`이름 : ${person[1]}, 나이 : ${person[0]}`);
// 6. Any(모든타입)
// 타입 검사를 일시적으로 우회한다.
let randomValue = 50;
randomValue = "자유로운 타입";
randomValue = [1, 2, 3]; //오류없이 재할당이 가능하다.
console.log(`Any 값 : ${randomValue}`);
// Any를 사용하는 목적
// 1. JavaScript 프로젝트를 TypeScript 로 전환할 때 모든 파일의 타입을 즉시 정의하기 어려울 때 임시로 사용
// 2. 타입 정의 파일(.d.ts)이 제공되지 않는 서드파티 라이브러리에서 가져온 데이터를 처리할 때 사용된다.
// 3. 외부 API나 사용자 입력 등 런타임에 타입이 동적으로 변하거나 예측하기 힘든 데이터를 처리할 때
// 존재하지 않는 속성에 접근해서 undefined오류가 발생할 가능성이 높아진다.
// 해당 타입에 없는 메서드를 호출해도 에러가 나지 않기 때문에 런타임 시 '함수가 아닙니다' 오류가 발생할 가능성이 크다.
// let data: any = 123;
// console.log(data.toUpperCase());
