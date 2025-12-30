//타입 별칭
//사용자가 정의하는 타입변수

let dom: {version:string, el:(selector:string)=>void, css:(prop:string)=>void} = {
  version: '0.0.1',
  el(){},
  css(){}
};


type Operation = {
	version: string, 
    el: (selector:string) => void, 
    css: (prop:string) => void
}

let Dom: Operation = {
  version: '0.0.1',
  el(){},
  css(){}
};


//타입 별칭을 선언하는 방법은 변수와 비슷하다

// type 변수명 = 타입;
type Name = string;
type Age = number;

let nname: Name = 'Tom';
let age: Age = 20;

