//인터페이스

interface Human {
    //객체를 생성할 때 필요한 속성이나 메서드의 '타입'을 정의한다.
    name : string;
    age : number;
    boo() : void; // boo함수는 반환타입이 void임

}


const person: Human = {
  name: "da",
  age: 5,
  boo: () => console.log("this is boo"),
}


// 객체의 타입을 인터페이스로 지정할 때 타입을 꼭 지켜야 한다.
// const person2: Human = {
// 	name : "홍길동",
// 	age : 30,
// 	boo: () => console.log("this is boo"),
// }


//인터페이스에 정의되지 않은 'hobby' 속성을 추가할 수 없다.
// const person2: Human = {
// 	name : "홍길동",
// 	age : 30,
// 	boo: () => console.log("this is boo"),
// 	hobby : "게임하기",
// }



// 매개변수에서 인터페이스를 타입으로 받는다.
function booboo(a: Human): void {
  console.log(`${a.name} is ${a.age} years old`);
};

booboo(person); // da is 5 years old
person.boo(); // this is boo

//선택적 속성(Optional Properties)
//객체에 특정 속성이 있을 수도 있고 없을 수도 있을 때는 속성명 뒤에 ?를 붙여 선택적 속성으로 만들 수 있다.

interface PersonWithJob {
    name: string;
    age: number;
    // job? : 이 속성은 선택적입니다. 정의되어도 되고, 안 되어도 됩니다.
    job?: string;
}

// 1. job 속성이 있어도 유효합니다.
const worker1: PersonWithJob = {
    name: "이민준",
    age: 35,
    job: "Developer"
};

// 2. job 속성이 없어도 유효합니다.
const worker2: PersonWithJob = {
    name: "최지수",
    age: 22
    // job 속성이 없습니다. (OK)
};


// 읽기 전용 속성(readonly Properties)
// 인터페이스로 객체를 처음 생성할 때만 값을 할당하고, 그 이후에는 변경할 수 없는 속성을 의미한다.

interface Config{
    readonly API_KEY: string;
    SERVER_URL : string;
}

const appConfig: Config = {
  API_KEY: "secret-key-123",
  SERVER_URL : "http://localhost:8080"
}


//프로퍼티에 접근해서 수정하려고 하면 오류가 발생한다.
// appConfig.API_KEY = "new_key";
