// 関数は実行可能なオブジェクトである。
function a() {
    console.log('hello');
}

a.prop = 0;
a.method = function() {
    console.log('method');
}

a(); // ()が末尾につけることで、実行される。
a.method(); // 関数宣言で呼び出して実行できる＝オブジェクトである。
console.log(a.prop);