const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value; // add-textというidの要素の値を取得する
  document.getElementById("add-text").value = ""; // add-textというidの要素の値を空にする

  // 未完了リストに追加する関数
  addIncompleteList(inputText); // addIncompleteList関数を実行
};

// 未完了リストに追加する関数
const addIncompleteList = (text) => {
  // liタグを生成
  const li = document.createElement("li"); // liタグを生成

  // divタグを生成
  const div = document.createElement("div"); // divタグを生成
  div.className = "list-row"; // divタグのclassをlist-rowにする

  // pタグを生成
  const p = document.createElement("p"); // pタグを生成
  p.innerText = text; // pタグの中身をtextにする

  // button（完了）タグを生成
  const completeButton = document.createElement("button"); // buttonタグを生成
  completeButton.innerText = "完了"; // buttonタグの中身を完了にする
  completeButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグ(div)の親タグ（li）を未完了リストから削除
    deleteFromIncompleteList(completeButton.parentNode.parentNode); // deleteFromIncompleteList関数を実行

    // 完了リストに追加する要素
    const addTarget = completeButton.parentNode; // 押された完了ボタンの親タグ(div)を完了リストに追加する
    // TODO内容テキストを取得
    const text = addTarget.firstElementChild.innerText; // addTargetの最初の子要素のテキストを取得

    // 完了したTODOに追加する要素

    // 以下、自分で考えたコード(これでも動いた)
    // const li = document.createElement("li"); // liタグを生成
    // const div = document.createElement("div"); // divタグを生成
    // const p = document.createElement("p"); // pタグを生成
    // p.innerText = text; // pタグの中身をtextにする
    // const backButton = document.createElement("button"); // buttonタグを生成
    // backButton.innerText = "戻す"; // buttonタグの中身を戻すにする
    // li.appendChild(div); // liタグの子要素にdivタグを設定
    // div.appendChild(p); // divタグの子要素にpタグを設定
    // div.className = "list-row"; // divタグのclassをlist-rowにする
    // div.appendChild(backButton); // divタグの子要素にbuttonタグを設定
    // document.getElementById("complete-list").appendChild(li); // complete-listというidの要素の子要素にliタグを設定

    // 以下、解答コード
    // div以下を初期化
    addTarget.textContent = null; // addTargetのテキストを空にする

    // liタグを生成
    const li = document.createElement("li"); // liタグを生成
    li.append(addTarget); // liタグの子要素にaddTargetを設定

    // pタグを生成
    const p = document.createElement("p"); // pタグを生成
    p.innerText = text; // pタグの中身をtextにする

    // 戻すボタンを生成
    const backButton = document.createElement("button"); // buttonタグを生成
    backButton.innerText = "戻す"; // buttonタグの中身を戻すにする
    // 戻すボタンを押したときの処理
    backButton.addEventListener("click", () => {
      // 押された削除ボタンの親タグ(div)の親タグ（li）を未完了リストから削除
      const deleteTarget = backButton.parentNode.parentNode; // 押された戻すボタンの親タグ(div)の親タグ(li)を取得
      document.getElementById("complete-list").removeChild(deleteTarget); // complete-listというidの要素の子要素からdeleteTargetを削除

      // テキストを取得
      const text = backButton.parentNode.firstElementChild.innerText; // 押された戻すボタンの親タグ(div)の最初の子要素(p)のテキストを取得
      addIncompleteList(text); // addIncompleteList関数を実行
    });

    // divタグの子要素に各要素を設定
    addTarget.appendChild(p); // divの子要素にpタグを設定
    addTarget.appendChild(backButton); // divの子要素にbuttonタグを設定

    // 完了済みリストに追加
    document.getElementById("complete-list").appendChild(li); // complete-listというidの要素の子要素にliタグを設定
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
};

// 未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  // 押された削除ボタンの親タグ(div)の親タグ（li）を未完了リストから削除
  document.getElementById("incomplete-list").removeChild(target); // ulタグの子要素から削除
};

document
  .getElementById("add-button") // add-buttonというidに関して、
  .addEventListener("click", () => onClickAdd()); // 指定したidの要素がクリックされたときにonClickAddを実行
