// 関数
// 引数(fn(a, b)のa, b変数のこと)は左から順番に格納される。
function fn(a, b) {
    console.log(a, b);
}

// 同じ関数名で呼び出されると一番最後に記述された関数で処理される。
function fn(a, b) {
    console.log(2);
}

// 関数名が同じものを防ぐ方法として、constの関数式を利用する。
const fn = function fn(a, b) { // 関数式の場合は関数名は省略可能。
    console.log("関数式、重複する関数名を防ぐ");
}

// javaScriptでは引数の数が不足していても実行は可能。
fn(1); // 引数は初めのaのみ代入され、bは代入されずundifinedが入る。
fn(null, 1) // a = null, b = 1 となる。

// デフォルト値の設定:引数にデフォルト値を代入する。＝設定されていない場合はデフォルト値で初期化される。
function fn_default(a, b=1) {
    console.log(a, b)
}
// 意図的な空のデータならnullを設定する。
function fn_default(a, b=null) {
    console.log(a, b);
}

// arguments = オブジェクトの一種で、関数に渡された実引数(呼び出しに関数の引数のこと)を持っている。
function fn_argu(a, b=1) {
    console.log(arguments);
    console.log(a, b);
}
// 特殊な型：渡される引数が決まっていない場合。
function fn_argu() { // ...args=可変超引数(レストパラメータズ)で対応のため使用はしなくなっている。
    const a = arguments[0];
    const b = arguments[1];
    console.log(arguments);
    console.log(a, b);
}

fn_argu(1);

// returnで返される値。
function fn_argu(a, b) {
    console.log(arguments);
    console.log(a, b);
    return a; // aの値が返される。
}

function fn_argu(a, b) {
    console.log(arguments);
    console.log(a, b);
    // return文がない場合は、undefinedが返される。
}

let c = fn_argu(1, 2);
console.log(c);
