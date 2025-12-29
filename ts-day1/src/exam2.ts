// 1. 사용자 정보 변수 3개를 각각 string, number 타입으로 선언합니다.
let userName: string = "이도현";
let userAge: number = 25;

// 2. isAdult 변수에 논리 결과를 할당합니다.
let isAdult: boolean = userAge >= 20;

// 3. 템플릿 리터럴을 사용하여 환영 메시지를 만듭니다.
let welcomeMessage: string = `환영합니다, ${userName}님! 당신은 올해 ${userAge}살입니다.`;

// 4. 결과 출력
console.log(welcomeMessage); 
console.log(`성인 여부: ${isAdult}`); 
// 💡 해설: 불리언 타입 isAdult는 userAge >= 20 이라는 논리적 비교의 결과를 담습니다.
// welcomeMessage에 string 타입을 명시하여, 의도치 않은 다른 타입의 값 할당을 방지합니다.


