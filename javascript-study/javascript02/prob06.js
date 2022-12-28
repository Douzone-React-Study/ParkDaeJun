/** 하샤드 수*/
function solution(x) { 
  let sum = 0;
  const arr = String(x).split("");

  for (let i = 0; i < arr.length; i++) {
    sum += Number(arr[i]);
  }

  //   arr.forEach((i) => {
  //     sum += Number(arr[i]);
  //   });

  //   arr.reduce((sum, i) => sum + Number(arr[i]));

  return x % sum === 0 ? true : false;
}
