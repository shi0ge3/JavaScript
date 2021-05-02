function printEquality(a, b) {
    // 厳格な等価性：=== で実行。型変換を行わないので比較する。
    console.log('厳格：', a === b);
    // 抽象的な等価性：== で実行。初めに暗黙的変換が行われて比較する。
    console.log('抽象：', a == b);
}

// 文字と整数の場合。
let a = '1';
let b = 1;
printEquality(a, b);

// 真偽値と整数の場合。
let c = true;
printEquality(b, c);

// 空文字と整数の場合。
let e = "";
let f = 0;
printEquality(e, f);

// 文字と整数の場合。
let g = "0";
printEquality(f, g);
