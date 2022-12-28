/** 자연수 뒤집어 배열로 만들기*/
function solution(n) {
  const arr = String(n).split("");
  let len = arr.length;
  const answer = [];
  for (let i = 0; i < len; i++) {
    const an = arr.pop();
    answer[i] = Number(an);
  }
  return answer;
}
