// 1. 점수 변수 3개를 'number' 타입으로 선언하고 할당합니다.
let mathScore: number = 85;
let englishScore: number = 92;
let scienceScore: number = 78;

// 2. 세 변수의 합계를 저장할 변수를 선언합니다. (결과: 255)
let totalScore: number = mathScore + englishScore + scienceScore;

// 3. 세 과목의 평균을 저장할 변수를 선언합니다. (결과: 85)
let averageScore: number = totalScore / 3;

// 4. 결과 출력
console.log(`총점: ${totalScore}`); 
console.log(`평균: ${averageScore}`);
// 💡 해설: 모든 변수가 number 타입으로 지정되어, 숫자형 연산에 오류가 발생하지 않습니다.
// 만약 mathScore에 문자열을 할당하려고 했다면, 컴파일 단계에서 오류가 발생했을 것입니다.



