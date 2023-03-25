// let
// letは上書可能、再宣言不可能
let var1 = "初期値は1";
var1 = "2に変更";
console.log(var1);

// const
// constは上書不可、オブジェクトのみ上書可能
const var2 = {
  name: "初期値",
  value: 1
};
var2.value = 2;
console.log(var2);
const var3 = ["cat", "dog"];
var3.push("monkey");
console.log(var3);

/* テンプレート文字列
文字列内でJSの変数を展開する方法
 */
const name = "ben";
const age = 20;
const msg_temp = `私の名前は${name}です。年齢は${age}です。`;
console.log(msg_temp);

/* 
アロー関数
*/
// 従来の関数
function func1(str) {
  return str;
}
console.log(func1("従来です"));
const func2 = (str) => {
  return str;
};
console.log(func2("アロー１です"));
const func3 = (num1, num2) => num1 + num2; // 1行で処理が完結する場合の書き方
console.log(func3("アロー", "２です"));

/* 分割代入
オブジェクトから指定のプロパティを取り出して使う
コードが見やすくなる
 */
const myProfile = {
  my_name: "love",
  my_age: 29
};
const { my_name, my_age } = myProfile;
console.log(`私は${my_name}です。年齢は${my_age}です。`);

const myProfile2 = ["love", 29];
const [my_name2, my_age2] = myProfile2;
console.log(`私は${my_name2}です。年齢は${my_age2}です。`);

/* デフォルト引数
 */
const sayHello = (name = "ゲスト") => console.log(`こんにちは ${name}さん`);
sayHello();

/* スプレッド構文
配列の中身を順番に処理して展開する
 */
// 配列の展開
const arr1 = [1, 2, 3];
console.log(...arr1);
const sumFunc = (n1, n2, n3) => console.log(n1 + n2 + n3);
sumFunc(arr1[0], arr1[1], arr1[2]);
sumFunc(...arr1);

//配列を分割し再代入
const arr2 = [1, 2, 3, 4];
const [num1, num2, ...arr3] = arr2;
console.log(arr3); //配列が返る

// 配列の結合(値渡し)
const arr4 = [...arr1, ...arr2];
console.log(arr4);

/* mapやfilterを用いた配列処理
 */
const nameArr = ["tanaka", "sato", "yamada"];
for (let i = 0; i < nameArr.length; i++) {
  console.log(nameArr[i]);
}
nameArr.map((name) => console.log(name)); //配列を順番に処理
// 条件に一致する要素を返す
const x1 = nameArr.filter((name) => {
  return name === "yamada";
});
console.log(x1);

const newNameArr = nameArr.map((name) => {
  if (name === "yamada") {
    return "山田さん";
  } else {
    return `${name}さん`;
  }
});
console.log(newNameArr);

/* 三項演算子：　if elseを一行で記述する方法
条件 ? true時の処理 : false時の処理
 */
const var10 = 1 < 0 ? "trueです" : "falseです";
console.log(var10);

const num10 = "1300";
const formattedNum =
  typeof num10 === "number" ? num10.toLocaleString() : "数値でないです";
console.log(formattedNum);

/* 三香演算子の意味 && ||
|| は左がfalseの場合は右側を返す
JSはNULLはfalse
&& は左側がtrueなら右を返す
 */
const num11 = null;
const fee = num11 || "金額未設定";
console.log(fee);

const num12 = null;
const fee2 = num12 && "何か設定あり";
console.log(fee2);
