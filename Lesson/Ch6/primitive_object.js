/* プリミティブ型
 * 変数には値が格納される。
 * 一度作成するとその値(参照先)を変更することはできない。＝データコピーされるため。
 * 上記の変更できなことをイミュータブルという。
*/
// 参照とコピー
let a = 'hello';
let b = a;
b = 'bye';
console.log(a, b); // a = hello b = bye となる。

// 参照とconst
const x = 'hello';
// x = 'bye'; // error

// 参照と引数:値は独立しているので他から影響を受けない。
let h = 0;
function fn1(arg1) {
    arg1 = 1;
    console.log(h, arg1);
}
fn1(h);

/* オブジェクト型(プリミティブ型以外のこと)
 * 変数には参照が格納される。
 * 値は変更できる。=ミュータブルという。＝参照先を変更できるため。
*/
// 参照とコピー
let c = {
    prop: 'hello',
}
let d = c;
console.log(c, d); // 同じオブジェクトが出力される。
d.prop = 'bye'
console.log(c, d) // 同じ内容のオブジェクトが出力される。
// 新しいオブジェクトに再代入を行った場合。
d = {};
console.log(c, d); // 再代入を行ったdのみ新しいオブジェクトで出力する。

// 参照とconst
const y = {
    prop: 'hello'
}
console.log(y.prop); // prop:hello
// y = {} // 新しいオブジェクトを再代入するとError。
y.prop = 'bye';
console.log(y.prop); // prop:bye プロパティは再代入が可能。

// 参照と引数:オブジェクトの参照先が渡されているため、再代入の影響を受ける。
let i = {
    prop: 0
}
function fn2(arg2) {
    arg2.prop = 1;
    console.log(i, arg2);
}
fn2(i);
// しかし、新たなオブジェクトを渡すと参照先が異なるため影響を受けない。
function fn3(arg2) {
    arg2 = {};
    console.log(i, arg2);
}
fn3(i);
