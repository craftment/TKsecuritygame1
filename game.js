let currentQuestionIndex = 0;
let score = 0;
let nickname = "";

const quizQuestions = [
    {
        question: "SQL 인젝션을 방어하기 위한 방법은 무엇인가?",
        options: ["입력값 필터링", "암호화", "백신 사용", "전자서명"],
        answer: "입력값 필터링"
    },
    {
        question: "랜섬웨어의 주된 특징은 무엇인가?",
        options: ["파일 암호화", "시스템 파괴", "정보 유출", "웹 해킹"],
        answer: "파일 암호화"
    },
    {
        question: "웹 해킹을 방어하기 위한 방법은 무엇인가?",
        options: ["XSS 방어", "방화벽 설정", "네트워크 암호화", "트로이목마 방어"],
        answer: "XSS 방어"
    },
    {
        question: "방화벽의 주요 역할은 무엇인가?",
        options: ["내부 서버 보호", "서버 암호화", "네트워크 트래픽 차단", "파일 복구"],
        answer: "네트워크 트래픽 차단"
    }
];

function startGame() {
    nickname = document.getElementById('nickname').value;
    if (nickname === "") {
        alert("닉네임을 입력하세요.");
        return;
    }

    document.getElementById('nickname-section').style.display = "none";
    document.getElementById('game-section').style.display = "block";
    showQuestion();
}

function showQuestion() {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    document.getElementById('question').textContent = currentQuestion.question;

    const optionsList = document.getElementById('options-list');
    optionsList.innerHTML = "";

    currentQuestion.options.forEach(option => {
        const li = document.createElement('li');
        li.textContent = option;
        li.onclick = () => checkAnswer(option);
        optionsList.appendChild(li);
    });
}

function checkAnswer(selectedOption) {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    if (selectedOption === currentQuestion.answer) {
        score += 10;
    }
    document.getElementById('next-btn').style.display = "block";
}

function nextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < quizQuestions.length) {
        showQuestion();
        document.getElementById('next-btn').style.display = "none";
    } else {
        endGame();
    }
}

function endGame() {
    document.getElementById('question-section').style.display = "none";
    document.getElementById('result-section').style.display = "block";
    document.getElementById('final-score').textContent = `${nickname}님의 최종 점수: ${score}점`;
}

function restartGame() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById('result-section').style.display = "none";
    document.getElementById('question-section').style.display = "block";
    document.getElementById('nickname-section').style.display = "block";
    document.getElementById('nickname').value = "";
}