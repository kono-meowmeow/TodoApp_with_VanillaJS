const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value; // add-textというidの要素の値を取得する
  document.getElementById("add-text").value = ""; // add-textというidの要素の値を空にする

  // liタグを生成
  const li = document.createElement("li"); // liタグを生成

  // divタグを生成
  const div = document.createElement("div"); // divタグを生成
  div.innerText = inputText; // divタグの中身をinputTextにする

  // liタグの子要素に各要素を設定
  li.appendChild(div); // liタグの子要素にdivタグを設定

  // 未完了のリストに追加
  document.getElementById("incomplete-list").appendChild(li); // incomplete-listというidの要素の子要素にliタグを設定
}

document
  .getElementById("add-button") // add-buttonというidに関して、
  .addEventListener("click", () => onClickAdd()); // 指定したidの要素がクリックされたときにonClickAddを実行
