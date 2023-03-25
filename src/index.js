import "./styles.css";

/* 追加ボタンが押された時の処理
1, 入力値を取得
2, タスクを作成するためのDIV, liタグを生成
3, liタグ内に入力値を文字列として書き出す
4, divタグを未完了TODOのulに追加
*/
const onClickAdd = () => {
  // 入力値を取得
  const inputText = document.getElementById("add-input").value;
  document.getElementById("add-input").value = ""; //初期化

  createImcompletedList(inputText);
};

// 未完了リストから指定の要素を削除する関数
const deleteFromImcompletedList = (target) => {
  document.getElementById("imcompleted-list").removeChild(target);
};

// 未完了リストを作製する関数
const createImcompletedList = (inputText) => {
  // TODOタスクの一覧を生成(DOMを生成して差し込む)
  // divタグ生成
  const div = document.createElement("div");
  div.className = "list-row";

  // ilタグ生成(タスクを追加)
  const li = document.createElement("li");
  li.innerText = inputText;
  console.log(li);

  // ボタンタグの追加処理(完了)
  const compltetedButton = document.createElement("button");
  compltetedButton.innerText = "完了";

  // 完了ボタンが押された時の処理
  compltetedButton.addEventListener("click", () => {
    // divタグの削除
    deleteFromImcompletedList(compltetedButton.parentNode); //親のdivタグを渡す

    // ulタグ内のテキスト抽出
    const addTargetParent = compltetedButton.parentNode;
    const text = addTargetParent.firstElementChild.innerText;
    // divタグ内を初期化
    addTargetParent.textContent = null;

    // liタグ生成
    const li = document.createElement("li");
    li.innerText = text;

    // 戻すボタン生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      const deleteTarget = backButton.parentNode;
      document.getElementById("completed-list").removeChild(deleteTarget);

      // 戻すテキスト抽出し、未完了タスクの再生成
      const text = deleteTarget.firstElementChild.innerText;
      createImcompletedList(text);
    });

    // divタグ内を再生成し、完了リストに追加
    addTargetParent.appendChild(li);
    addTargetParent.appendChild(backButton);
    document.getElementById("completed-list").appendChild(addTargetParent);
    console.log(addTargetParent);
  });

  // ボタンタグの追加処理(削除)
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  // ボタンタグを削除
  deleteButton.addEventListener("click", () => {
    deleteFromImcompletedList(deleteButton.parentNode); //親のdivタグを渡す
  });

  // divタグの子要素に各要素を追加(下に順に追加)
  div.appendChild(li);
  div.appendChild(compltetedButton);
  div.appendChild(deleteButton);
  console.log(div);

  document.getElementById("imcompleted-list").appendChild(div);
};

// 追加ボタンが押された時、未完了のTODO登録
document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
