/** 정수 내림차순으로 배치하기*/
const solution = (n) => {
  const arr = n.toString().split("");
  arr.sort().reverse();
  let num = +arr.join(""); //?
  return num;
};
