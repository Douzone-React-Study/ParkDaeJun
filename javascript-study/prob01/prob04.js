const solution = (n) => {
    var answer = 0;
    let res = String(n);
    for(let i = 0; i < res.length; i++){
        answer += parseInt(res[i]);
    }
    return answer;
}