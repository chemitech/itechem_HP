document.addEventListener("DOMContentLoaded", function() {
    const input = document.getElementById("emailInput");

    function adjustWidth() {
        input.style.width = `${input.value.length + 1}ch`;
    }

    // 初回調整
    adjustWidth();

    // 変更時に再調整（編集できる場合のみ）
    input.addEventListener("input", adjustWidth);
});
