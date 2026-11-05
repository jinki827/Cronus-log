let playerName;

// 画面を1つだけ表示する関数
function showScreen(id) {
  document.querySelectorAll(".screen").forEach(function (el) {
    el.classList.add("hidden");
  });
  document.getElementById(id).classList.remove("hidden");
}

// 各階のクイズの進行状況によって、アイコンを変更する。
function updateQuizIcons() {
  const floors = ["f6", "f5", "f4"];

  floors.forEach(floor => {
    const progress = getFloorProgress(floor);
    console.log(progress);
    if (!progress) return;

    for (const quizId in progress) {
      console.log(quizId, progress[quizId]);
      const img = document.querySelector(`img[data-quiz="${quizId}"]`);
      console.dir(img.dataset.quiz);
      if (!img || !progress[quizId]) return;

      if (progress[quizId].cleared) {
        img.src = "./index/images/clear-icon.svg";
      } else if (progress[quizId].unlock && quizId.includes("boss")) {
        img.src = "./index/images/boss-icon.svg";
      } else if (progress[quizId].unlock) {
        img.src = "./index/images/quiz-icon.svg";
      } else {
        img.src = "./index/images/lock-icon.svg";
      }
    }
  })
}

// ページを開いた時の処理
window.onload = function () {
  playerName = getPlayerData();
  // データがあればTop画面、なければスタート画面を表示
  if (playerName) {
    showScreen("top-screen");
  } else {
    showScreen("start-screen");
  }
  updateQuizIcons();
};

// スタートボタン → ログイン画面
document.getElementById("startBtn").addEventListener("click", function () {
  showScreen("login-screen");
});

// ログインボタン → 説明画面
document.getElementById("loginBtn").addEventListener("click", function() {
  const name = document.getElementById("username-input").value.trim();
  if (!name) return alert("名前を入力してください。");
  savePlayerData(name);

  showScreen("explanation-screen");
});

// 説明画面 → Top画面
document.getElementById("startGame-btn").addEventListener("click", function() {
  showScreen("top-screen");
});

// やり直しボタン
document.getElementById("reset-btn").addEventListener("click", function() {
  resetGame();
});