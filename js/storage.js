// プレイヤーデータを取得する関数
function getPlayerData() {
    const data = localStorage.getItem("nazotoki_player");
    return data ? JSON.parse(data) : null;
}

// プレイヤーデータを保存する関数
function savePlayerData(data) {
    localStorage.setItem("nazotoki_player", JSON.stringify(data));
}

// ログインチェック（未ログインならログイン画面へ）
function checkAuth() {
    const data = getPlayerData();
    if (!data || !data.name) {
        alert("ログインしてください")
        window.location.href = "index.html";
    }
    return data;
}

// リセット処理
function resetGame() {
    if (confirm("最初からやり直しますか？")) {
        localStorage.removeItem("nazotoki_player");
        window.location.reload();
    }
}