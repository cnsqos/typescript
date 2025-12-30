let union: string | number;
union = 'Hello type!';
union = 1213;

//union = false; 문자열과 숫자형만 지정을 했기 때문에 논리형은 안된다.

//배열에 문자열과 숫자만 허용을 할 수 있다.
//튜플보다 좀 더 유연하게 설정할 수 있다.

let array: (string|number)[] = ['Apple',1,2,'Banana',3,'Mango'];
let arr : Array<string | number> = ['Apple',1,2,'Banana',3,'Mango'];

//주의해야 할 점

type Person = {
  name: string;
  age: number;
}

type Developer = {
  name: string;
  skill: string;
}

//Person, Developer 타입 별칭들을 유니온으로 합쳤다.
function introduce(someone: Person | Developer) {
  someone.name; // O 정상 동작
//   someone.age; // X 타입 오류
//   someone.skill; // X 타입 오류
}

//이런부분은 함수의 오버로딩을 통해 해결하자!