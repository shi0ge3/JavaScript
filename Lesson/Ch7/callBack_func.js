// コールバック関数：他の関数に引数として渡される関数。
function hello(name) {
    console.log('hello' + name);
}

function bye() {
    console.log('bye');
}

function fn(cb) {
    // 一般的には何らかの処理結果をコールバック関数に渡している。z
    cb('Tom'); //引数の関数を実行(呼び出している)
    // 引数の数が異なっていてもエラーにはならない。
}

fn(hello); // 実引数に関数(hello)を渡している。
fn(bye);

// 無名関数でも可能
fn(function(name) {
    console.log(`hello ${name}`);
})

// 実例
setTimeout(hello, 2000);
