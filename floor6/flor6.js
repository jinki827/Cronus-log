// 仮データ
const defaultQuizzes = {
  "f6-q1": {unlock: true, cleared: false},
  "f6-q2": {unlock: true, cleared: false},
  "f6-q3": {unlock: true, cleared: false},
  "f6-boss": {unlock: false, cleared: false}
}
const quizAnswer = {
  "f6-q1": "aaa",
  "f6-q2": "bbb",
  "f6-q3": "ccc",
}
// localStorage からplayDataを取得する。なければ、仮データ
const savedData = getFloorProgress("f6");
const quizzes = savedData ? savedData : defaultQuizzes;
console.log(quizzes)

quizzes["f6-q1"].unlock = true;

// 画面の切り替え
const tabButton = document.querySelectorAll(".tab-button");
const viewPanel = document.querySelectorAll(".view-panel");
tabButton.forEach((btn, index) => {
  btn.addEventListener("click", function(){
    // タブボタンの制御
    tabButton.forEach((_btn) => _btn.classList.remove("is-active"));
    this.classList.add("is-active");

    // viewPanelの表示制御
    viewPanel.forEach((panel) => panel.classList.add("hidden"))
    let targetViewPanelID = viewPanel[index].id;
    if (quizzes[targetViewPanelID] && quizzes[targetViewPanelID].unlock === false) {
      index = 5;
    }

    // view-lock-f6 のh2要素内文字を選択したボタンと同じ文字にする。 
    const lockTitle = document.querySelector("#view-lock-f6 .quiz-text h2");
    lockTitle.textContent = btn.textContent;
    viewPanel[index].classList.remove("hidden")
  });
});


// 正解時のモーダルを閉じるボタン
const clearModal = document.getElementById("clear-modal");
const modalCloseButton = document.getElementById("modal-close-button");

modalCloseButton.addEventListener("click", () => {
  clearModal.classList.add("hidden");
});


// 回答送信時
const answerButton = document.querySelectorAll(".answer-button");
answerButton.forEach((ans_btn) => {
  ans_btn.addEventListener("click", function(){

    const inputAnswer = this.closest(".answer-wrapper").querySelector(".answer-input");
    // console.log(inputAnswer);
    const userAnswer = inputAnswer.value.trim();
    // console.log(userAnswer);
    const sectionEl = this.closest("section");
    const quizId = sectionEl.id
    // console.log(quizId);
    const correctAnswer = quizAnswer[quizId];
    // console.log(correctAnswer);
    const errorMessage = this.closest(".answer-area").querySelector(".error-message");
    
    // 正解時の処理
    if (userAnswer === correctAnswer) {
      
      // 1.進行状況を更新する。
      if (quizzes[quizId]) {
        quizzes[quizId].cleared = true;
        updateFloorProgress("f6",quizzes)
      }
      // 2. 正解モーダルの表示
      clearModal.classList.remove("hidden");
      // 3. h2 の横に「Clear！」の表示を表示する。
      const clearEl = sectionEl.querySelector(".clear");
      if (clearEl) {
        clearEl.classList.remove("hidden");
      }
      // 4. 一応、不正解の文字が出ないようにケア
      errorMessage.classList.add("hidden");

    } else {
      // 不正解時の処理
      errorMessage.classList.remove("hidden");
    }
    
  });
});

// 答えを再入力したときに、不正解のメッセージログを消す。
const answerInputs = document.querySelectorAll(".answer-input");
answerInputs.forEach((input) => {
  input.addEventListener("input", function() {
    const errorMessage = this.closest(".answer-area").querySelector(".error-message");
    if (errorMessage) {
      errorMessage.classList.add("hidden");
    }
  })
});


// 回答があってたら、クリア済みにする。
const sections = document.querySelectorAll("section");
sections.forEach((section) => {
  const quizResult = quizzes[section.id];
  if (quizResult && quizResult.cleared) {
    const clearEl = section.querySelector(".clear");
    clearEl.classList.remove("hidden")
  }
});