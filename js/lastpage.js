// GETメソッドからジャンルごとの出題数と正答数を受け取り
let queryString = window.location.search;
let queryObject = new Object();
const answers = {}
if (queryString) {
  queryString = queryString.substring(1);
  let parameters = queryString.split("&");

  for (let i = 0; i < parameters.length; i++) {
    let element = parameters[i].split("=");

    let paramName = decodeURIComponent(element[0]);
    let paramValue = decodeURIComponent(element[1]);

    answers[paramName] = paramValue
  }
}

console.log(answers)
let $label = document.querySelectorAll('.label-content p')
let question_cnt = 0;
let currect_cnt = 0;

for(let i=0 ; i<5 ; i++){
    $label[i].textContent += "：" + answers["genre-score"+(i+1)]+"/"+answers["genre-sum"+(i+1)]
    console.log(Number(answers["genre-sum"+(i+1)])+question_cnt)
    question_cnt += Number(answers["genre-sum"+(i+1)])
    currect_cnt += Number(answers["genre-score"+(i+1)])
}

console.log(question_cnt)
console.log(currect_cnt)

document.querySelector(".totaltext2").textContent = (currect_cnt / question_cnt * 100) + "%"