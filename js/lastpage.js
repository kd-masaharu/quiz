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
const $label = document.querySelectorAll('.quiz-button')

for(let i=0 ; i<6 ; i++){
    
}