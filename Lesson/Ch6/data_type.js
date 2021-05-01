// 動的型付け言語：変数宣言時の型の宣言なし。変数を使用する状況によって、変数の方が変更される。
// 静的型付け言語：変数宣言時の型の宣言あり。変数を使用する状況によらず、常に同じ型を保持。

/* 暗黙的な型変換：変数が呼ばれた状況によって変数の方が自動的に変換されること。 */

function printTypeAndValue(val) {
    console.log(typeof val, val);
}

let a = 0;

printTypeAndValue(a);

// let b = '1' + a：結果 10 暗黙的型変換でa(0)が文字列型に変換されて、連結される。
let b = parseInt('1') + a; //parseIntで引数の文字列をint(整数)に変換。=明示的型変換。

printTypeAndValue(b);

let c = 15 - b;

printTypeAndValue(c); // number 14

let d = c - null; // null = 0(整数) に暗黙的変換される。

printTypeAndValue(d); // number 14

let e = d - true; // true = 1(整数) に暗黙的変換される。

printTypeAndValue(e); // number 13
