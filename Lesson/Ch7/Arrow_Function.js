// 無名関数を記述しやすくした省略記法
function a(name) {
    return `hello ${name}`;
}

// 一行の実行処理コードの場合は、()＋{}は省略可能。
const b = name => `hello ${name}`;
console.log(b('Tom'));

// 実行処理コードが複数行の場合。引数の()が必ず必要。
// 引数なしも必要。例：()<-基本 or _<-まれに => 'hello world';
const c = (name, name1) => `hello ${name} ${name1}`;
console.log(c('Tom', 'Bob'));

// アロー関数はthis, arguments, new, prototypeが使用できない。
