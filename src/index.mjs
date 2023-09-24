const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value; // add-textというidの要素の値を取得する
  document.getElementById("add-text").value = ""; // add-textというidの要素の値を空にする

  // liタグを生成
  const li = document.createElement("li"); // liタグを生成

  // divタグを生成
  const div = document.createElement("div"); // divタグを生成
  div.className = "list-row"; // divタグのclassをlist-rowにする

  // pタグを生成
  const p = document.createElement("p"); // pタグを生成
  p.innerText = inputText; // pタグの中身をinputTextにする

  // button（完了）タグを生成
  const completeButton = document.createElement("button"); // buttonタグを生成
  completeButton.innerText = "完了"; // buttonタグの中身を完了にする
  completeButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグ(div)の親タグ（li）を未完了リストから削除
    deleteFromIncompleteList(completeButton.parentNode.parentNode); // deleteFromIncompleteList関数を実行
  });

  // button（削除）タグを生成
  const deleteButton = document.createElement("button"); // buttonタグを生成
  deleteButton.innerText = "削除"; // buttonタグの中身を削除にする
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグ(div)の親タグ（li）を未完了リストから削除
    deleteFromIncompleteList(deleteButton.parentNode.parentNode); // deleteFromIncompleteList関数を実行
  });

  // liタグの子要素にdiv要素を設定
  li.appendChild(div); // liタグの子要素にdivタグを設定

  // divタグの子要素に各要素を設定
  div.appendChild(p); // divタグの子要素にpタグを設定
  div.appendChild(completeButton); // divタグの子要素にbuttonタグを設定
  div.appendChild(deleteButton); // divタグの子要素にbuttonタグを設定

  // 未完了のリストに追加
  document.getElementById("incomplete-list").appendChild(li); // incomplete-listというidの要素の子要素にliタグを設定
}

// 未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  // 押された削除ボタンの親タグ(div)の親タグ（li）を未完了リストから削除
  document.getElementById("incomplete-list").removeChild(target); // ulタグの子要素から削除
}

document
  .getElementById("add-button") // add-buttonというidに関して、
  .addEventListener("click", () => onClickAdd()); // 指定したidの要素がクリックされたときにonClickAddを実行
