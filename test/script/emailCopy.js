function copyToClipboard(inputId) {
    const inputElement = document.getElementById(inputId);

    if (!inputElement) {
        alert("指定されたテキストボックスが見つかりません。");
        return;
    }

    // テキストを選択＆コピー
    inputElement.select();
    document.execCommand("copy");

    // コピー完了メッセージ
    alert("コピーしました: " + inputElement.value);
}
