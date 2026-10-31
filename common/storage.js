// プレイヤーデータを取得する関数
function getPlayerData() {
  const name = localStorage.getItem("playerName");
  return name ? name : null;
}

// プレイヤーデータを保存する関数
function savePlayerData(name) {
  localStorage.setItem("playerName", name);
}

// 特定のフロアの進行状況を取得する関数（"playerProgress"がロールストレージになければ初期値を取得する）
function getFloorProgress(floorName){
  // すでに保存されたセーブデータを取得
  const saved = localStorage.getItem("playerProgress");
  let progress = saved ? JSON.parse(saved) : null;

  // playerProgress がなければ、quizData.jsから初期値を取得。ローカルストレージに保存。
  if (!progress){
    progress = JSON.parse(JSON.stringify(INITIAL_QUIZ_PROGRESS));
    localStorage.setItem("playerProgress",JSON.stringify(progress))
  }

  // 特定のフロアの進行状況のみ返す。
  return progress[floorName];
}


// 特定のフロアの進行状況を更新して保存する関数
function updateFloorProgress(floorName, floorData) {
  const saved = localStorage.getItem("playerProgress");
  const progress = saved ? JSON.parse(saved) : null;

  progress[floorName] = floorData;
  localStorage.setItem("playerProgress", JSON.stringify(progress));
}

// ログインチェック（未ログインならログイン画面へ）
function checkAuth() {
  const data = getPlayerData();
  if (!data || !data.name) {
    alert("ログインしてください");
    window.location.href = "index.html";
  }
  return data;
}

// リセット処理
function resetGame() {
  if (confirm("最初からやり直しますか？")) {
    localStorage.removeItem("playerName");
    localStorage.removeItem("playerProgress");
    window.location.reload();
  }
}


// -------------------------
// 判定関係の関数
// -------------------------

// [クイズ判定]クイズの答えがあっているか判定する関数
function isValidQuiz(playerAnswer, quizId) {
  playerAnswerT1 = playerAnswer;
  correctAnswer = QUIZ_ANSWERS[quizId];
  if (playerAnswerT1 === correctAnswer){
    return true;
  }else{
    return false;
  }
}

// qrCodeの入力値がQUIZ_PASSとあってるか判定をする。
function checkUnlockQuiz(code){
  // ★ code をハッシュ化するのを入れる。(後で) 20261031 jinki

  // code がQUIZ_PASS のキーにあるか判定する。
  const matchedQuizId = QUIZ_PASS[code];

  // code が違っていたら、エラーを返す。
  if (!matchedQuizId) {
    return {success: false, message: "無効なコードです"};
  }

  // どこのフロアか抽出して、変更するフロアの現在の値をローカルストレージから取得。
  const floor = matchedQuizId.substring(0, matchedQuizId.indexOf("-"));
  const quizzes = getFloorProgress(floor);
  
  // すでにアンロック済みだったら、解放済みのコードであることをメッセージで返す。
  if (quizzes[matchedQuizId].unlock) {
    return {success: true, message:"このコードはすでに解放済みです"};
  }

  // アンロックして、ローカルストレージに保存。
  quizzes[matchedQuizId].unlock = true;
  updateFloorProgress(floor, quizzes);
  
  return {success: true, message:"問題が解放されました"};
}

// アンロックテスト用
// const testPass = "6bbb"
// const test_result = checkUnlockQuiz(testPass);

// if (test_result.success) {
//   alert(test_result.message);
// }else {
//   alert(test_result.message);
// }


// -------------------------
// QRcodeReader
// -------------------------
function onScanSuccess(decodedText, decodedResult) {
  // handle the scanned code as you like, for example:
  console.log(`Code matched = ${decodedText}`, decodedResult);
}

function onScanFailure(error) {
  // handle scan failure, usually better to ignore and keep scanning.
  // for example:
  console.warn(`Code scan error = ${error}`);
}

let html5QrCode = null;
const container = document.getElementById("scanner-container");

// 【起動ボタンを押したとき】
document.getElementById("start-btn").addEventListener("click", () => {
  container.style.display = "flex"; // 画面を表示

  // インスタンスがなければ作成
  if (!html5QrCode) {
    html5QrCode = new Html5Qrcode("reader");
  }

  // カメラの起動
  html5QrCode
    .start(
      { facingMode: "environment" }, // 背面カメラを優先
      {
        fps: 10, // 1秒間に何回スキャンを試みるか
        qrbox: { width: 250, height: 250 }, // スキャンする枠のサイズ
      },
      (decodedText, decodedResult) => {
        // ① 読み取り成功時の処理
        alert("読み取り成功: " + decodedText);
        closeScanner(); // 成功したら自動で閉じる
      },
      (errorMessage) => {
        // ② 読み取り中（エラーではなく、毎フレームスキャンを失敗している状態）
        // ログが大量に出るため通常は空でOK
      },
    )
    .catch((err) => {
      alert("カメラの起動に失敗しました: " + err);
      container.style.display = "none";
    });
});

// 【閉じるボタンを押したとき】
document.getElementById("closeQrcodeButton").addEventListener("click", () => {
  closeScanner();
});

// スキャナーを停止して閉じる共通処理
function closeScanner() {
  if (html5QrCode && html5QrCode.isScanning) {
    html5QrCode
      .stop()
      .then(() => {
        container.style.display = "none"; // 画面を非表示
      })
      .catch((err) => {
        console.error("停止エラー: ", err);
      });
  } else {
    container.style.display = "none";
  }
}



