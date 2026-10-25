// 仮データ
const quizzes = {
  "f6-q1": {unlock: false, cleared: false},
  "f6-q2": {unlock: true, cleared: false},
  "f6-q3": {unlock: true, cleared: false},
  "f6-boss": {unlock: true, cleared: false}
}

// 画面の切り替え
function switchTab(button, targetId) {
  // quiz-tab のボタンの色を切り替え
  document.querySelectorAll(".quiz-tab button")
    .forEach((btn) => btn.classList.remove("is-active"));
  button.classList.add("is-active");

  // 指定した画面を初期化
  let displayID = targetId;

  // unlockの判定 -> 未開放なら未開放画面にする
  if (quizzes[targetId] && quizzes[targetId].unlock === false) {
    displayID = "view-lock-f6";
    
    // 未開放画面の<h2>要素の中身をtabのテキストと同じにする。
    const lockTitle = document.querySelector("#view-lock-f6 .quiz-text h2");
    if (lockTitle) {
      lockTitle.textContent = button.textContent;
    }
  }

  // 一旦、全体をhidden
  document.querySelectorAll(".view-panel")
    .forEach((panel) => panel.classList.add("hidden"));
  
  // displayID のview-panelのhiddenを外す
  const targetPanel = document.getElementById(displayID);
  if (targetPanel) {
    targetPanel.classList.remove("hidden");
  }
}
