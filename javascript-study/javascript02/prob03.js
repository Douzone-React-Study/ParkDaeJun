/** 문자열 내 p와 y의 개수 */
function solution(s) {
  s = s.toUpperCase();
  return s.split("P").length === s.split("Y").length;
}
