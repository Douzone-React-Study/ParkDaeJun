/** 핸드폰 번호 가리기*/
const solution = (phone_number) => {
  const arr = phone_number.split("");
  arr.reverse().length = 4;

  for (let i = 0; i < phone_number.length - 4; i++) {
    arr.push("*");
  }

  let str = arr.reverse().toString().split(",").join(""); //replace(/\,/g, "")
  return str;
};
