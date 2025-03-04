let currentQuestionIndex = 0;
let score = 0;
let nickname = "";

// 게임의 스토리와 선택지
const quizQuestions = [
    {
        story: "당신은 컴퓨터 보안을 담당하는 전문가입니다. 어느 날, 회사 서버에서 이상한 트래픽이 감지되었습니다.",
        options: [
            { text: "서버 로그를 확인한다", isCorrect: true },
            { text: "네트워크를 차단한다", isCorrect: false },
            { text: "알려진 보안 프로그램을 실행한다", isCorrect: false }
        ]
    },
    {
        story: "서버 로그를 확인해본 결과, SQL 인젝션 공격이 감지되었습니다. 이 문제를 어떻게 해결할까요?",
        options: [
            { text: "입력값을 필터링한다", isCorrect: true },
            { text: "서버를 완전히 초기화한다", isCorrect: false },
            { text: "로그를 삭제한다", isCorrect: false }
        ]
    },
    {
        story: "랜섬웨어가 감염된 시스템을 발견했습니다. 어떻게 대응할까요?",
        options: [
            { text: "즉시 감염된 시스템을 격리한다", isCorrect: true },
            { text: "시스템을 완전히 삭제한다", isCorrect: false },
            { text: "침해된 데이터를 전송한다", isCorrect: false }
        ]
    },
    {
        story: "마지막으로, 방화벽 설정이 제대로 되어있는지 점검해야 합니다. 이 방어 방법을 확인해볼까요?",
        options: [
            { text: "방화벽 규칙을 점검하고 강화한다", isCorrect: true },
            { text: "방화벽을 제거한다", isCorrect: false },
            { text: "시스템에 모든 포트를 열어둔다", isCorrect: false }
        ]
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
    document.getElementById('story-text').textContent = currentQuestion.story;

    const optionsList = document.getElementById('options-list');
    optionsList.innerHTML = ""; // 이전 선택지 초기화

    currentQuestion.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option.text;
        button.onclick = () => checkAnswer(option);
        optionsList.appendChild(button);
    });

    document.getElementById('next-btn').style.display = "none";
}

function checkAnswer(selectedOption) {
    const currentQuestion = quizQuestions[currentQuestionIndex];

    if (selectedOption.isCorrect) {
        score += 10;
    }

    // 선택 후, '다음 문제' 버튼을 보이게 한다
    document.getElementById('next-btn').style.display = "block";
}

function nextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < quizQuestions.length) {
        showQuestion();
    } else {
        endGame();
    }
}

function endGame() {
    document.getElementById('story-section').style.display = "none";
    document.getElementById('result-section').style.display = "block";
    document.getElementById('final-score').textContent = `${nickname}님의 최종 점수: ${score}점`;
}

function restartGame() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById('result-section').style.display = "none";
    document.getElementById('story-section').style.display = "block";
    document.getElementById('nickname-section').style.display = "block";
    document.getElementById('nickname').value = "";
}
