interface Student {
  name: string;
  age: number;
  major: string;
  introduce(): string;
}

const student: Student = {
  name: "홍길동",
  age: 19,
  major: "비전공",
  introduce() {
    return `안녕하세요 저는 ${this.name}이고, ${this.age}살이며 전공은 ${this.major}입니다.`;
  },
};

console.log(student.introduce());

