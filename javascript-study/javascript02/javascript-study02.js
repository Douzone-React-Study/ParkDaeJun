// 1. 삼항 연산자 ----------------------------------
// 조건 ? true일때 : false일때
const arr = [];
let text = "";
if (arr.length === 0) {
  text = "배열이 비어있습니다";
} else {
  text = "배열이 비어있지 않습니다";
}
// ↓
const arr2 = [];
let text2 =
  arr2.length === 0 ? "배열이 비어있습니다" : "배열이 비어있지 않습니다";

// 중첩
// 가독성이 그렇게 좋지 않으니 이러한 코드는 피하는게 좋다
const condition1 = false;
const condition2 = true;

const value = condition1 ? "와우" : condition2 ? "blabla" : "foo";
console.log(value);

// 3. 단축 평가 논리 계산법 ------------------------------
const dog = {
  name: "멍멍이",
};
// const getName = (animal) => {
//   return animal.name;
// };
// console.log(getName());

// animal 값이 제대로 주어졌을 때만 name 을 조회하고,
// 그렇지 않을때는 그냥 undefined 를 반환하게 하고 싶으면?
// ↓

// function getName(animal) {
//   if (animal) {
//     return animal.name;
//   }
//   return undefined;
// }
// const name = getName();
// console.log(name);

// && 연산자로 코드 단축시키기
// ↓

const getName = (animal) => {
  return animal && animal.name;
};
console.log(getName());

// || 연산자로 코드 단축시키기
const namelessDog = {
  name: "",
};
const getName1 = (animal) => {
  const name = animal && animal.name;
  if (!name) {
    return "이름이 없는 동물입니다";
  }
  return name;
};
// ↓
const getName2 = (animal) => {
  const name = animal && animal.name;
  return name || "이름이 없는 동물입니다";
};

// 4. 함수의 기본 파라미터 ------------------------------

