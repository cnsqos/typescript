//유틸리티 타입
//타입스크립트에서 타입 변경을 쉽고 용이하게 하기 위한 헬퍼 함수 처럼 유틸리티 타입을 제공한다.

//js 배열을 하면서 for,while으로도 해결이 가능하지만
//forEach, filter, map을 통해 간편하게 해결하는 것 처럼

//유틸리티 타입을 몰라도 인터페이스, 제네릭을 활용해서 타입을 바꿀 수 있지만
//유틸리티 타입을 사용하면 훨씬 더 간결한 문법으로 타입을 정의 할 수 있다.


interface User{
    phone :number;
}



//Readonly<T>
//타입의 모든 속성을 읽기 전용으로 변경한 새로운 타입을 반환

type readonly_user = Readonly<User>;


//Uppercase<String Type>
//문자열의 각 문자를 대문자로 변환하고 리터럴 타입으로 만든다.
//리터럴 타입
//값 자체를 타입으로 만드는것
//특정 하나의 값으로 범위를 엄격하게 제한한다.

type LowerGreeting = "Hello, world";
type UpperGreeting = Uppercase<LowerGreeting>;

const greeting: UpperGreeting = "HELLO, WORLD";


// 쇼핑몰 상품의 상세정보(interface와 union 타입 활용하기)
// 쇼핑몰에서 판매하는 상품의 상세 정보를 나타내는 타입을 정의해야한다.
// 1. Product 인터페이스 정의하기
// -모든 상품이 가지는 공통 속성을 정의한다.
// -id: 숫자
// -name : 문자열
// -price : 숫자

// 2. DeliveryMethod 유니온 타입을 정의
// -배송 방법은 '택배','방문수령','새벽배송' 중 하나만 가능하다.
// 3. ProductDetail 인터페이스 정의
// -Product 인터페이스를 extends 한다.
// -description : 문자열
// -delivery:위에서 정의한 DeliveryMethod 타입
// -stock : 숫자

// 타입을 정의한 후 myProduct 제품 한개를 정의한다.
// id: 101


// 1. Product 인터페이스 정의
interface Product {
  id: number;
  name: string;
  price: number;
}

// 2. DeliveryMethod 유니온 타입을 사용 오타와 잘못된 값을 원천 차단
type DeliveryMethod = '택배' | '방문수령' | '새벽배송';


// 3. ProductDetail 인터페이스 정의 (Product 상속)
interface ProductDetail extends Product {
  description: string;
  delivery: DeliveryMethod;
  stock: number;
}

// myProduct 제품 한 개 정의
const myProduct: ProductDetail = {
  id: 101,
  name: '무선 키보드',
  price: 45000,
  description: '조용하고 가벼운 무선 키보드입니다.',
  delivery: '택배',
  stock: 25,
};


