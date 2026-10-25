// 画面の切り替え
function switchTab(button, targetId) {
    document.querySelectorAll(".quiz-tab button").forEach((btn) => 
        btn.classList.remove("is-active")
    );
    button.classList.add("is-active");

    document.querySelectorAll(".view-panel").forEach((panel) =>
        panel.classList.add("hidden")
    );
    document.getElementById(targetId).classList.remove("hidden");
}