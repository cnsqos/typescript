"use strict";
/**
 * 도형의 너비와 높이를 받아서 면적을 계산하고 문자열로 포맷팅하여 반환하는 함수
 * @param width 너비 (number)
 * @param height 높이 (number)
 * @returns 면적 정보 문자열 (string)
 */
function calculateArea(width, height) {
    // 1. 면적 계산 (결과는 number 타입)
    const area = width * height;
    // 2. 계산된 면적을 포함하는 문자열 반환 (string 타입)
    return `면적은 ${area} 입니다. (너비: ${width}, 높이: ${height})`;
}
// 함수 호출
let resultString = calculateArea(15, 10);
console.log(resultString); // 출력: 면적은 150 입니다. (너비: 15, 높이: 10)
// 🚨 오류 예시 (주석 처리): 
// calculateArea("15", 10); // 컴파일 오류: 첫 번째 인수는 number 타입이어야 합니다.
// 💡 해설: 함수 정의 시 매개변수와 반환 값의 타입을 명시함으로써, 함수의 입출력 형태가 명확해지고 오용을 막을 수 있습니다.
