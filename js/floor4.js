// QRコードリーダー
function onScanSuccess(decodedText, decodedResult) {
    console.log("読み取り成功");
    console.log(decodedText);

    document.getElementById("result").textContent = decodedText;
}

function onScanFailure(error) {
    // QRコードが見つからなかった場合
}

const scanner = new Html5Qrcode(
    "reader",
    {
        fps: 10,
        qrbox: 250
    }
);

scanner.render(onScanSuccess, onScanFailure);