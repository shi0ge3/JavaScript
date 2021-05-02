/* falsyな値：Booleanで真偽値に変換した場合に、「false」になる値。*/
// 種類：false, null, 0, undefined, 0n, NaN
let a = 0;
console.log(`falsyな値 ${a} の場合 `, Boolean(a));

let b = 0n;
console.log(`falsyな値 ${b}n の場合 `, Boolean(b));

let c = null;
console.log(`falsyな値 ${c} の場合 `, Boolean(c));

let d = undefined;
console.log(`falsyな値 ${d} の場合 `, Boolean(d));

let e = NaN; // NaN：数値と予測していたのに違った場合。
console.log(`falsyな値 ${e} の場合 `, Boolean(e));
/* truthyな値：Booleanで真偽値に変換した場合に、「true」になる値。*/
// 種類：falsy以外

// 使用例：変数を使用して、truthyとfalsy(null, undefined限定)で実行が分岐される。
if (a) { // !aで反転して判定される。
    console.log('hello');
} else {
    console.log('bye');
}
