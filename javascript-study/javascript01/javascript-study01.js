// 1. 출력 -----------------------------------
console.log("hello");
console.log(1 + 2 + 3);

// 2. 변수와 상수 (var는 더 이상 사용 x) ---------------------
// let > 값 선언후 바꿀수 있음
// const > 선언하고 값이 바뀌지 않음
let value = 1;
console.log(value);
const value2 = 2;
console.log(value2);

// 데이터 타입
let num = 1; // 숫자
let text = "hello"; // 문자열 ", ' 차이 없음
let good = true; // boolean
// null > 고의적으로 설정하는 값
// undefined > 설정하지 않았기 때문에 없는 값

// 3. 연산자 -----------------------------------
// 산술 연산자
let cal = 1 + 2 - (3 * 4) / 4;
console.log(cal);
let cal2 = 1;
console.log(cal2++);
console.log(++cal2);

// 대입 연산자
let cal3 = 1;
cal3 += 3;
cal3 -= 3;
cal3 *= 3;
cal3 /= 3;
console.log(cal3);

// 논리 연산자
// ! > NOT, && > AND, || > OR
// 연산 순서 not > and > or
console.log(!((true && true) || (true && false) || !false));

// 비교 연산자
// ===, == 둘다 비교 가능 하지만 ==는 타입 검사 x
// !==, != 둘다 비교 가능 하지만 !=는 타입 검사 x
const a = 1;
const b = "1";
const equals = a == b;
console.log(equals); // 숫자 1과 문자 '1' 이 동일한 값으로 간주
// <, <=, >, >=

// 4. 조건문 -----------------------------------
// if
const con = 1;
if (true) {
  const con = 2;
  console.log("if문 안의 con 값은 " + con);
}
console.log("if문 밖의 con 값은 " + con);

// if-else
const con2 = 10;
if (con2 > 15) {
  console.log("con2 가 15 큽니다.");
} else {
  console.log("con2 가 15보다 크지 않습니다.");
}

// if-else if
const con3 = 10;
if (con3 === 5) {
  console.log("5입니다!");
} else if (con3 === 10) {
  console.log("10입니다!");
} else {
  console.log("5도 아니고 10도 아닙니다.");
}

// switch/case
const device = "iphone";
switch (device) {
  case "iphone":
    console.log("iphone");
    break;
  case "ipad":
    console.log("ipad");
    break;
  default: // case로 준비하지 않은 값일 경우
    console.log("...");
}

// 5. 함수 -----------------------------------
function add(a, b) {
  return a + b;
  console.log("호출이 되지 않는 코드!");
}
console.log(add(1, 2));

function hello(name) {
  console.log(`hello ${name}`); // 템플릿 리터럴
}
hello("park");

//화살표 함수
const add1 = (a, b) => {
  return a + b;
};
console.log(add1(1, 2));

const add2 = (a, b) => console.log(a + b);
add2(3, 4);

const grade = (score) => {
  if (score === 100) {
    return "A+";
  } else if (score >= 90) {
    return "A";
  } else if (score === 89) {
    return "B+";
  } else if (score >= 80) {
    return "B";
  }
};
const g = grade(100);
console.log(g);

// 6. 객체 -----------------------------------
const dog = {
  // 키(공백이 없어야함 필요한 상황이라면 ''로 감싸서 문자열로 넣어줘야한다): 원하는 값
  name: "멍멍이",
  age: 2,
};
console.log(dog.name);

const ironMan = {
  name: "토니",
  actor: "로다주",
  alias: "아이언맨",
};

// 함수에서 객체를 파라미터로 받기
const print = (hero) => {
  console.log(
    `${hero.alias}(${hero.name}) 역할을 맡은 배우는 ${hero.actor} 입니다.`
  );
};
print(ironMan);

const print2 = (hero) => {
  const { alias, name, actor } = hero; // <= 객체 비구조화 할당
  console.log(`${alias}(${name}) 역할을 맡은 배우는 ${actor} 입니다.`);
};
print2(ironMan);

// 파라미터 단계에서 객체 비구조화 할당 가능
const print3 = ({ alias, name, actor }) => {
  console.log(`${alias}(${name}) 역할을 맡은 배우는 ${actor} 입니다.`);
};
print3(ironMan);

// 객체 안에 함수 넣기
const dog2 = {
  name: "멍멍이",
  sound: "멍멍!",
  say() {
    // 화살표 함수는 this 가 제대로 자신이 속한 객체를 가르키지 못하기때문에 사용 x
    console.log(this.sound);
  },
};
dog2.say();

// Getter 함수와 Setter 함수
const numbers = {
  a: 1,
  b: 2,
  get sum() {
    console.log("함수가 실행됩니다.");
    return this.a + this.b;
  },
};
// numbers.sum() 을 한 것이 아니라 number.sum 을 조회했을 뿐인데,
// 함수가 실행되고 그 결과값이 출력되었습니다.
// Getter 함수는 특정 값을 조회 할 때 우리가 설정한 함수로 연산된 값을 반환합니다.
console.log(numbers.sum);

let user = {
  name: "John",
  surname: "Smith",

  get fullName() {
    return `${this.name} ${this.surname}`;
  },

  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  },
};

// 주어진 값을 사용해 set fullName이 실행된다.
user.fullName = "Alice Cooper";
console.log(user.fullName);
console.log(user.name);

// 7. 배열 -----------------------------------
const array = [1, 2, 3, 4, 5];
const object = [{ name: "멍멍이" }, { name: " 야옹이" }];
console.log(object[1]);

// 배열 새 항목 추가
object.push({
  name: "멍뭉이",
});
console.log(object[2]);

// 배열 크기
console.log(object.length);

// 8. 반복문 -----------------------------------
// for
for (let i = 0; i < 10; i++) {
  console.log(i);
}

for (let i = 0; i < object.length; i++) {
  console.log(object[i].name);
}

// while
let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}

// for...of
let numbers3 = [10, 20, 30, 40, 50];
for (let i of numbers3) {
  console.log(i);
}

// 객체를 배열로 받아오기
const doggy = {
  name: "멍멍이",
  sound: "멍멍",
  age: 2,
};
console.log(Object.entries(doggy)); // [[키, 값], [키, 값]]
console.log(Object.keys(doggy)); // [키, 키, 키]
console.log(Object.values(doggy)); // [값, 값, 값]

// 객체를 위한 반복문 for...in
for (let i in doggy) {
  console.log(`${i} : ${doggy[i]}`);
}

// 연습문제
function biggerThanThree(numbers2) {
  let nm = [];
  for (let i of numbers2) {
    if (numbers2[i] > 3) {
      nm.push(numbers2[i]);
    }
  }
  return nm;
}

const numbers2 = [1, 2, 3, 4, 5, 6, 7];
console.log(biggerThanThree(numbers2)); // [4, 5, 6, 7]

// 9. 배열 내장함수 -----------------------------------
// forEach
const superheroes = ["아이언맨", "캡아", "토르", "닥스"];
superheroes.forEach((i) => {
  //i는 각 원소를 가르키게 된다.
  console.log(i);
});

// map
// 배열 안의 각 원소를 변환 할 때 사용 되며,
// 이 과정에서 새로운 배열이 만들어진다.
// 만약에 배열 안의 모든 숫자를 제곱해서 새로운 배열을 만들고 싶다면?
const arr3 = [1, 2, 3, 4, 5, 6, 7, 8];
const squared = [];
arr3.forEach((n) => {
  squared.push(n * n);
});
// ↓
const squared2 = arr3.map((i) => i * i);

// indexOf
// 항목이 몇번째 원소인지 찾아주는 함수
console.log(superheroes.indexOf("토르"));

// findIndex
// 배열 안에 있는 값이 객체이거나, 배열일때 사용
const tools = [
  { id: 1, text: "javascript", done: true },
  { id: 2, text: "java", done: true },
  { id: 3, text: "c", done: false },
];

console.log(tools.findIndex((i) => i.id === 2)); // 1출력

// find
// 값이 몇번째인지 알아내는 것이 아니라, 찾아낸 값 자체를 반환
console.log(tools.find((i) => i.id == 2));

// filter
// 배열에서 특정 조건을 만족하는 값들만 따로 추출하여 새로운 배열을 만든다
console.log(tools.filter((i) => !i.done));

// splice
// 배열에서 특정 항목을 제거할 때 사용
const arr4 = [10, 20, 30, 40];
const index = arr4.indexOf(30);
// 첫번째 파라미터는 어떤 인덱스부터 지울지를 의미하고
// 두번째 파라미터는 그 인덱스부터 몇개를 지울지를 의미함
arr4.splice(index, 1);

// slice
// splice랑 비슷하지만, 기존의 배열은 건들이지 않는다
const sliced = arr4.slice(0, 2);
console.log(sliced); // [10, 20]
console.log(arr4); // [10, 20, 30, 40]

// shift 와 pop
// shift 는 첫번째 원소를 배열에서 추출해준다.
console.log(arr4.shift());
// pop는 shift의 반대

// unshift
// 배열의 맨 앞에 새 원소를 추가한다
console.log(arr4.unshift(5)); //[5, 10, 20, 30, 40]

// concat
// 여러개의 배열을 하나의 배열로 합쳐준다
const arrr1 = [1, 2, 3];
const arrr2 = [4, 5, 6];
console.log(arrr1.concat(arrr2));

// join
// 배열 안의 값들을 문자열 형태로 합쳐준다
console.log(arrr1.join(""));

// reduce
// accumulator 와 current 를 파라미터로 가져와서 결과를
// 반환하는 콜백함수, 두번째 파라미터는 reduce 함수에서
// 사용 할 초깃값.
let sum = arrr1.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum);
