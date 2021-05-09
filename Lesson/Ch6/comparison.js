const a = {
    prop: 0
}

const b = {
    prop: 0
}
// オブジェクト同士を比較すると参照先(メモリの場所)を比較するため、Falseになる。
console.log(a === b); // 厳格
console.log(a == b); // 抽象

// オブジェクトの値を比較するには、プロパティを比較する。下記は全てTrue。
console.log(a.prop === b.prop);
console.log(a.prop == b.prop);

// オブジェクト同士が比較とみなされる場合。
const c = a; // オブジェクトを代入する。
console.log(a === c);