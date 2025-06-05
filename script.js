const styledText = document.getElementById("styledText");
const toggleStyleButton = document.getElementById("toggleStyleButton");

toggleStyleButton.addEventListener("click", () => {
  // classList.toggle() は、指定したクラスが存在すれば削除し、存在しなければ追加します。
  // これで簡単にクラスのオン/オフを切り替えられます。
  styledText.classList.toggle("highlighted-text");
  styledText.classList.toggle("normal-text"); // normal-text も切り替えることで、常にどちらかのクラスがある状態にする
});
