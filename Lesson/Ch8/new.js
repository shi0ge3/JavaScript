// コンストラクタ関数からインスタンスを作成するための演算子
function F(a, b) {
    this.a = a;
    this.b = b;
    return {};
}

// prototypeがある場合。
F.prototype.c = function() {}

// new演算子の様な関数
function newOpe(C, ...args) {
    console.log(args);
}

const instance = newOpe(F, 1, 2);
console.log(instance); // プリミティブ型が返される場合。
