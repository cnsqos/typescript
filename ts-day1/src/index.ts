//1. Boolean
//논리적인 참/ 거짓을 나타낸다.

let isStudent : boolean = true;
let hasLicense : boolean = false;

//isStudent = "yes"; 문자열을  boolean타입 변수에 할당할 수 없다.

console.log(`학생여부:  ${isStudent}`);


//2. Number(숫자)
//정수 : 소수점이 없는 숫자
//실수 : 소수점이 있는 숫자
//Infinity : 무한대
//NaN(Not a Number)

let age : number = 28;
let salary : number = 55000.50;
let positiveInfinity : number = Infinity;
let negativeInfinity : number = -Infinity;
let notANumber:number = NaN;

console.log(`나이 : ${age}, 연봉 :${salary}`)

//3. string(문자열)
//텍스트 데이터를 나타낸다.
//템플릿 리터럴도 사용 가능하다.

let userName:string = "김철수";
let greeting:string = `안녕하세요, 저는 ${userName}입니다.`;

console.log(greeting);

//4. Array(배열)
/// 타입 뒤에 []를 붙이거나, Array<Type>형식으로 선언한다.
let scores : number[] = [90, 85, 95, 100];
// scores.push("하이");
scores.forEach(x => console.log(x))

let names : Array<string> = ["Alice","Bob","Charlie"]

console.log(names);
