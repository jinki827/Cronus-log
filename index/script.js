let playerData;

// 画面を1つだけ表示する関数
function showScreen(id) {
  document.querySelectorAll(".screen").forEach(function (el) {
    el.classList.add("hidden");
  });
  document.getElementById(id).classList.remove("hidden");
}

// ページを開いた時の処理
// window.onload = function () {
//   playerData = getPlayerData();
//   // データがあればTop画面、なければスタート画面を表示
//   if (playerData && playerData.name) {
//     showScreen("top-screen");
//   } else {
//     showScreen("start-screen");
//   }
// };

// // スタートボタン → ログイン画面
// document.getElementById("startBtn").addEventListener("click", function () {
//   showScreen("login-screen");
// });

// ログインボタン → 説明画面
function login() {
  const name = document.getElementById("username-input").value.trim();
  if (!name) return alert("名前を入力してください。");

  playerData = { name: name };
  savePlayerData(playerData);
  showScreen("explanate-screen");
}