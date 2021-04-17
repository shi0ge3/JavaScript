/* scope(スコープ)：実行中のコードから値と式が参照できる範囲。５種類ある。 */
// スコープの種類が決まるのは、宣言時に使用するキーワード(var/const..etc)で決まる。

/* グローバル */
var b = 0;
function c() {}
console.log('global scope b: ' + b); // windows.b でも同じ結果になる。＝ グローバルスコープは省略して呼び出せる。

window.e = 1; // window オブジェクト = グローバルスコープ
let e = 2; // e の値は更新される。
console.log('global scope e: ' + e);

debugger; // 実行した場合、このdebuggerの行で処理が止まる。
/* スクリプト */
let a = 0;
const d = 0;
