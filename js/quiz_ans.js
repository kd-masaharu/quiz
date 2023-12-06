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
        correct: 'a.鴻巣'
    },
    {
        questionNumber: '質問2',
        question: '高校受験前に受けるテストは？',
        answers: [
            'a.北辰テスト',
            'b.南辰テスト',
            'c.東辰テスト',
            'd.西辰テスト',
        ],
        correct: 'a.北辰テスト'
    },
    {
        questionNumber: '質問3',
        question: 'シラコバトをモチーフにしたマスコットキャラは？',
        answers: [
            'a.コバコバ',
            'b.シラバト',
            'c.コバトン',
            'd.シラコン',
        ],
        correct: 'c.コバトン'
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
while (clickedCount < buttonLength) {
    $button[clickedCount].addEventListener("click", function () {
        const clickedAnswer = event.currentTarget
        const answerCorrect = document.querySelector('.answer_correct')
        const answerIncorrect = document.querySelector('.answer_incorrect')
        // const answerResult = document.querySelector('.answer_result');
        // const answerResultText = document.querySelector('.answer_result_text')

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
    });
    clickedCount++;
}