let playerData;
// ページを開いた時の処理
window.onload = function () {
  playerData = getPlayerData();
  // データがあればTop画面、なければログイン画面を表示
  if (playerData && playerData.name) {
    showTopScreen();
  } else {
    document.getElementById("login-screen").classList.remove("hidden");
  }
};
// ログインボタンを押した時の処理
function login() {
  const nameInput = document.getElementById("username-input").value.trim();
  if (!nameInput) return alert("名前を入力してください。");
  // データを保存
  playerData = { name: nameInput };
  savePlayerData(playerData);
  // ログイン画面を隠してTop画面を表示
  document.getElementById("login-screen").classList.add("hidden");
  showTopScreen();
}
// Top画面の表示処理
function showTopScreen() {
  document.getElementById("player-name").innerText = playerData.name;
  document.getElementById("top-screen").classList.remove("hidden");
}
