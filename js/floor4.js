// 読み取り結果の管理
const STORAGE_KEY = "foundCodes";
let foundCodes = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
let scannedData = "";   // 直近に読み取った内容

let html5QrCode = null;
const container = document.getElementById('scanner-container');
const resultEL = document.getElementById('result');
const TARGET = "https://google.com/html5-qrcode";

function onScanSuccess(decodedText) {
    scannedData = decodedText;
    resultEl.textContent = decodedText;

    // 重複しなければ保存
    if (!foundCodes.includes(decodedText)) {
        foundCodes.push(decodedText);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(foundCodes));
    }

    if(decodedText === TARGET) {
        
    }

    // 読み取り内容に応じた処理(例)
    // if (decodedText === "rock1") { alert("第1問の岩を発見!"); }

    closeScanner();
}


function onScanFailure(error) {
  // handle scan failure, usually better to ignore and keep scanning.
  // for example:
  console.warn(`Code scan error = ${error}`);
}

        // 【起動ボタンを押したとき】
        document.getElementById('start-btn').addEventListener('click', () => {
            container.style.display = 'flex'; // 画面を表示
            
            // インスタンスがなければ作成
            if (!html5QrCode) {
                html5QrCode = new Html5Qrcode("reader");
            }

            // カメラの起動
            html5QrCode.start(
                { facingMode: "environment" }, // 背面カメラを優先
                {
                    fps: 10,    // 1秒間に何回スキャンを試みるか
                    qrbox: { width: 250, height: 250 } // スキャンする枠のサイズ
                },
                (decodedText, decodedResult) => {
                    // ① 読み取り成功時の処理
                    alert("読み取り成功: " + decodedText);
                    closeScanner(); // 成功したら自動で閉じる
                },
                (errorMessage) => {
                    // ② 読み取り中（エラーではなく、毎フレームスキャンを失敗している状態）
                    // ログが大量に出るため通常は空でOK
                }
            ).catch((err) => {
                alert("カメラの起動に失敗しました: " + err);
                container.style.display = 'none';
            });
        });

        // 【閉じるボタンを押したとき】
        document.getElementById('closeQrcodeButton').addEventListener('click', () => {
            closeScanner();
        });

        // スキャナーを停止して閉じる共通処理
        function closeScanner() {
            if (html5QrCode && html5QrCode.isScanning) {
                html5QrCode.stop().then(() => {
                    container.style.display = 'none'; // 画面を非表示
                }).catch((err) => {
                    console.error("停止エラー: ", err);
                });
            } else {
                container.style.display = 'none';
            }
        }