const quiz = [
    {
        questionNumber: '質問1',
        question: '六法は「憲法」「民法」「刑法」「商法」「民事訴訟法」「○○○○○」あてはまるのは何？',
        answers: [
            '1.警察訴訟法',
            '2.刑事訴訟法',
            '3.検察訴訟法',
            '4.行政事件訴訟法',
        ],
        correct: '2.刑事訴訟法'
    },
    {
        questionNumber: '質問2',
        question: '六法には他に「たくさんの重要な法令」という意味もある。 うさ子 じゃあ法律って全部で何個あるんですか？弁護士 「○○法」または「○○に関する法律」という名前が付いたものが約○○○○個あります。いくらでしょう？。',
        answers: [
            '1.約2900個',
            '2.約2000個',
            '3.約1900個',
            '4.約900個',
        ],
        correct: '3.約1900個'
    },
    {
        questionNumber: '質問3',
        question: '「六法」は、それぞれ特定の分野に関連する法令に「国土交通六法」のほか「建設六法」「河川六法」「水道六法」「道路六法」「運輸六法」「鉄道六法」「○○○○○」あてはまるものはなに？',
        answers: [
            '1.自転車六法',
            '2.交通六法',
            '3.道路六法',
            '4.自動車六法',
        ],
        correct: '4.自動車六法'
    },
]

let quizCount = 0;
const quizLength = quiz.length;
let score = 0;

const $button = document.querySelectorAll('.quiz-button')
const buttonLength = $button.length

const setupQuiz = () => {
    document.getElementById('js-question').textContent = quiz[quizCount].question
    document.getElementById('js-number').textContent = quiz[quizCount].questionNumber

    let buttonCount = 0;

    while (buttonCount < buttonLength) {
        $button[buttonCount].textContent = quiz[quizCount].answers[buttonCount]
        buttonCount++;
    }
}
setupQuiz();


let clickedCount = 0;
let pre = Date.now()-1000;
let is_s_click = true;

while (clickedCount < buttonLength) {
    $button[clickedCount].addEventListener("click", function () {
        const clickedAnswer = event.currentTarget
        const answerCorrect = document.querySelector('.answer_correct')
        const answerIncorrect = document.querySelector('.answer_incorrect')
        // const answerResult = document.querySelector('.answer_result');
        // const answerResultText = document.querySelector('.answer_result_text')

        if (Date.now() > pre+1000){
            console.log("single")
            is_s_click = true;
            pre = Date.now();
        }else{
            console.log("double")
            is_s_click = false;
        }
        
        if (is_s_click){
            if (quiz[quizCount].correct === clickedAnswer.textContent) {
                answerCorrect.classList.add("active_answer")
                setTimeout(function () {
                    answerCorrect.classList.remove("active_answer")
                }, 1000);
                console.log("OK!")
                score++;
            }
            else {
                answerIncorrect.classList.add("active_answer")
                setTimeout(function () {
                    answerIncorrect.classList.remove("active_answer")
                }, 1000);
                console.log("NOT OK!")
            }

            quizCount++;
            if (quizCount < quizLength) {
                setTimeout(function () {
                    setupQuiz();
                }, 1000);
            }
            else {
                // answerResult.classList.add("active_result")
                // answerResultText.textContent = '終了！あなたの正解数は' + score + '/' + quizLength + 'です！'
                console.log("終わりだよー^^")
            }
        }
    });
    if (is_s_click){
        clickedCount++;
    }
}