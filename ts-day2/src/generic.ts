// function add(x: string|number, y:string|number): string|number{
//     return x + y;
// }

// add(1, 2); // 3
// add('hello', 'world'); // 'helloworld'

//의도한대로 값을 넣어서 실행이 잘 되면 좋지만, x와 y에 다른타입을 넣게되면
//의도하지 않은대로 실행되서 컴파일러가 에러를 일으킨다.

function add(x: string, y: string): string;
function add(x: number, y: number): number;
function add(x: any, y: any) {
   return x + y;
}

add(1, 2); // 3
add('hello', 'world'); // 'helloworld'

// 오버로딩을 통해 다음 함수 호출은 일어날 수가 없다.
// add(1, '2');
// add('1', '2');


//제네릭의 사용

// function add<T>(x: T, y: T): T { // 제네릭 : 꺾쇠와 문자 T를 이용해 표현. T는 변수명이라고 보면 된다.
//    return x + y; // 컴파일 에러 발생 typescript 관점에서는 T는 아무타입이나 될 수 있고, +는 모든 타입에서 안전하지 않다.
// }


// console.log(add<number>(1,2));
// console.log(add<string>('hello','world'));
// add<number>(1, 2); // 제네릭 타입 함수를 호출할때 <number> 라고 정해주면, 함수의 T 부분이 number로 바뀌며 실행되게 된다.
// add<string>('hello', 'world'); // 'helloworld'



// 인수들을 받아서 배열로 만들어주는 메소드
// function toArray<T>(a: T, b: T): T[] {
//    return [a, b];
// }

// // 만약 화살표 함수로 제네릭을 표현한다면 다음과 같이 된다.
// const toArray2 = <T>(a: T, b: T): T[] => { ... }


// toArray<number>(1, 2); // 숫자형 배열
// toArray<string>('1', '2'); // 문자형 배열
// toArray<string | number>(1, '2'); // 혼합 배열

// // 사실 컴파일러는 전달하는 인수의 타입을 보고 스스로 추론하기 때문에 함수 호출할때 제네릭을 안써줘도 알아서 추론한다.
// toArray(1, 2);
// toArray('1', '2');
// toArray<string | number>(1, '2'); // 하지만 가끔 자동 타입 추론이 잘안되는 경우가 있기 때문에 직접 제네릭을 선언해야한다.



function loggingIdentity<T>(arg: T[]): T[] {
   console.log(arg.length); // 배열은 .length를 가지고 있다. 따라서 오류는 없다.
   return arg; // 배열을 반환
}

function loggingIdentity2<T>(arg: Array<T>): Array<T> {
   console.log(arg.length);
   return arg;
}

loggingIdentity([1, 2, 3]);
loggingIdentity2([1, 2, 3]);


// 제네릭 인터페이스
interface Mobile<T> { 
   name: string;
   price: number;
   option: T; // 제네릭 타입 - option 속성에는 다양한 데이터 자료가 들어온다고 가정
}

// 제네릭 자체에 리터럴 객테 타입도 할당 할 수 있다.
const m1: Mobile<{ color: string; coupon: boolean }> = {
   name: 's21',
   price: 1000,
   option: { color: 'read', coupon: false }, // 제네릭 타입의 의해서 option 속성이 유연하게 타입이 할당됨
};

const m2: Mobile<string> = {
   name: 's20',
   price: 900,
   option: 'good', // 제네릭 타입의 의해서 option 속성이 유연하게 타입이 할당됨
};


//* 인터페이스로 함수 타입을 지정
interface Add {
   (x: number, y: number): number;
}

let myFunc: Add = (x, y) => {
   return x + y;
};

// 1. 제네릭 함수 타입 구조를 정의하는 인터페이스
interface GenericIdentityFn {
    //  어떤 타입을 받든, 그 타입을 그대로 반환하는 함수
    <T>(arg: T): T; // 제네릭 함수 타입 구조
}


// 2. GenericIdentityFn 인터페이스의 규격을 만족하는 실제 제네릭 함수 구현
function identity<T>(arg: T): T {
		// <T> : 함수 이름 바로 뒤에 타입 변수를 선언합니다.
   // (arg: T): T : 함수 시그니처는 위 인터페이스의 규격과 일치합니다.
   return arg;
}

// 3. 변수 myIdentity에 타입과 값 할당
// myIdentity 변수의 타입을 위에서 정의한 GenericIdentityFn 인터페이스로 지정합니다.
// 이로써 myIdentity는 '어떤 타입을 받아 그대로 반환하는 제네릭 함수'라는 규격을 강제받습니다.
let myIdentity: GenericIdentityFn = identity;

// 4. 함수 호출 (명시적 타입 인자 전달)
// myIdentity는 제네릭 함수이므로, <number>를 명시하여 T를 number로 확정합니다.
// 함수는 number 인자(100)를 받고 number를 반환합니다.
myIdentity<number>(100);

// 5. 함수 호출 (다른 타입 인자 전달)
// <string>을 명시하여 T를 string으로 확정합니다.
// 함수는 string 인자('100')를 받고 string을 반환합니다.
myIdentity<string>('100');

