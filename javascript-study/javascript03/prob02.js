/** 나머지가 1이 되는 수 찾기*/
const solution = (n) => {
  for (let i = 2; i < n; i++) {
    if (n % i === 1) {
      return i;
    }
  }
};
