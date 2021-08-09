// 関数コンストラクタ
function fn2(a, b) {
    return a + b;
}

let d = 0;
function fn() {
    let d = 1;
    // 上記の関数を関数コンストラクタで表す。
    const fn1 = new Function('a', 'b', 'return a + b * d');
    return fn1;
}

const f = fn();
const result = f(1, 2);

console.log(result);

// 関数オブジェクトから生成されている。
console.log(fn2 instanceof Function);
