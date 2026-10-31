// =================================================
// 定数・初期データ取得
// =================================================

// localStorage からプレーヤーのこの階の進行状況を取得する。
const FLOOR = "f6";
const quizzes = getFloorProgress(FLOOR);


// 主要なdocument要素取得
const tabButtons = document.querySelectorAll(".tab-button");
const viewPanels = document.querySelectorAll(".view-panel");
const lockPanel = document.getElementById("view-lock-f6");
const clearModal = document.getElementById("clear-modal");
const modalCloseButton = document.getElementById("modal-close-button");


// =================================================
// 画面ロード時の反映
// =================================================
function loadViewPanel(){
  // すでにクリア済みの問題について、<h2>要素の横に「Clear！」を表示
  viewPanels.forEach((section) => {
    const quizState = quizzes[section.id];
    if (quizState && quizState.cleared) {
      const clearEl = section.querySelector(".clear");
      if (clearEl) clearEl.classList.remove("hidden");
    }
  });
}


// =================================================
// タブ切り替えの画面制御
// =================================================
tabButtons.forEach((btn, index) => {
  btn.addEventListener("click", function(){
    // タブボタンのアクティブ化の切替
    tabButtons.forEach((_btn) => _btn.classList.remove("is-active"));
    this.classList.add("is-active");

    // viewPanelを一旦全部非表示
    viewPanels.forEach((panel) => panel.classList.add("hidden"));

    // クリックしたボタンと同じインデックスのview-panelクラスが対象の画面。
    let targetViewPanel = viewPanels[index];

    // しかし、unlockされてない画面だった場合、lock画面用のview-panelクラスを設定する
    if (quizzes[targetViewPanel.id] && quizzes[targetViewPanel.id].unlock === false) {
      targetViewPanel = lockPanel;

      // view-lock-f6 のh2要素内文字を選択したボタンと同じ文字にする。 
      const lockTitle = lockPanel.querySelector(".quiz-text h2");
      lockTitle.textContent = btn.textContent;
    }

    // 対象のview-panelクラスを表示する
    targetViewPanel.classList.remove("hidden");
  });
});



// =================================================
// 正解時のモーダルを閉じるボタン
// =================================================
modalCloseButton.addEventListener("click", () => {
  clearModal.classList.add("hidden");
});


// =================================================
// 回答送信時
// =================================================
const answerButton = document.querySelectorAll(".answer-button");
answerButton.forEach((ans_btn) => {
  ans_btn.addEventListener("click", function(){

    // 対象の問題のセクション全体を取得
    const sectionEl = this.closest("section");
    const quizId = sectionEl.id;
    const errorMessage = sectionEl.querySelector(".error-message");

    // 入力されたテキストを取得
    const inputAnswer = sectionEl.querySelector(".answer-input");
    const playerAnswer = inputAnswer.value.trim();
    // quizData.jsから答えを取得
    const judge = isValidQuiz(playerAnswer, quizId);
    
    // 正解時の処理
    if (judge) {
      
      // 1.進行状況を更新する。
      if (quizzes[quizId]) {
        quizzes[quizId].cleared = true;
        updateFloorProgress(FLOOR,quizzes);
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


// load実行
loadViewPanel();