/* 関数スコープ：{} の中の範囲のこと。 */
function a() { // 関数スコープ start
    let b = 0;
    console.log(b);
} // 関数スコープ end

// console.log(b); // 関数スコープ内の変数(b)を呼び出すとエラー。= 実行コードから参照できないため。
a(); // 0 が表示された。

/* ブロックスコープ: JavaScriptでは {} のこと。関数と同じ？ではなく、関数名がない {} のみ、スコープを指している。*/
// ブロックスコープを使用するには、絶対条件で、let, const を使用すること。varを使用すると有効にならない。
{
    let c = 1;
    console.log('block scope let: ' + c); // 正しく表示される。
    const d = 2;
    console.log('block scope const: ' + d); // 正しく表示される。

    var e = 3; // エラーにならないため、非推奨。

    // 関数の場合
    function f() {
        console.log('f is called');
    }
    f(); // ブロック内で呼び出せる。

    // 宣言式の場合
    const g = function() {
        console.log('g is called');
    }
    g(); // ブロック内で呼び出せる。
}

// エラーになる。＝ブロックスコープが有効。
// console.log('block scope let: ' + c);
// console.log('block scope const: ' + d);

// var のみエラーにならない。＝ブロックスコープが「無効」。
console.log('block scope var: ' + e);

// 関数の呼び出しが可能。＝ブロックスコープが「無効」。
f();

// 宣言式の関数呼出は不可能。
// g();
