// 仮データ
const quizzes = {
  "f6-q1": {unlock: false, cleared: false},
  "f6-q2": {unlock: false, cleared: false},
  "f6-q3": {unlock: true, cleared: false},
  "f6-boss": {unlock: true, cleared: false}
}

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
      console.log(btn);
    }

    const lockTitle = document.querySelector("#view-lock-f6 .quiz-text h2");
    lockTitle.textContent = btn.textContent;
    viewPanel[index].classList.remove("hidden")
  });
});

