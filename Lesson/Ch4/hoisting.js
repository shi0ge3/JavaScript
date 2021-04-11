/* Hoisting(ホイスティング)：コンテキスト内(記述分)で宣言した変数や関数の定義を「コード実行前にメモリーに配置」すること。 */
// ホイスティングはコンテキストが生成される度に、実行される。
// 同じコードでもJSエンジンで挙動が異なるので注意も必要。

/* 関数の場合 */
a(); // 呼び出し可能で、実行される。＝コンテキスト内に処理内容が記述されている行より、上に呼び出し文を記述していても実行ができる。
// 可能な理由は実行前に、すでにHoistingされている。

function a() {
    // 関数内のHoistingも、グローバルと同じ結果。
    // console.log(e);
    let e = 1;

    function f(){
        console.log('f is called');
    }
    console.log('a is called');
}

a(); // 呼び出し可能で、実行される。

/* 変数の場合 */
console.log(b); // 呼び出し可能だが、「undefined(値なし)」となる。
var b = 0;
console.log(b); // 呼び出し可能。

console.log(c); // 初期化されていない。＝メモリ－に配置されていない。(Uncaught ReferenceError: Cannot access 'c' before initialization)
let c = 0;

console.log(d); // 初期化されていない。＝メモリ－に配置されていない。(Uncaught ReferenceError: Cannot access 'd' before initialization)
const d = 0;

/* let/constは「undefined」の初期化されないから、推奨されている。＝バグに気づくきっかけにする目的。 */
/* そのため、varは非推奨 */

/* 関数の他の宣言 */
// 無名(むめい)関数=下記の定義を「関数式」とも呼ばれる。
g(); // 変数と同じHoistingの結果になるので注意、(Uncaught ReferenceError: Cannot access 'g' before initialization)

const g = function() {
    function f(){
        console.log('f is called');
    }
    console.log('g is called');
}

g();
