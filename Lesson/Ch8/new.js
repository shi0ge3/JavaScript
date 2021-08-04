// コンストラクタ関数からインスタンスを作成するための演算子
function F(a, b) {
    this.a = a;
    this.b = b;
    return {};
}

// prototypeがある場合。
F.prototype.c = function() {}

function newOpe(C, ...args) {
    // 空のオブジェクト生成。
    const _this = Object.create(C.prototype);
    const result = C.apply(_this, args);
    // console.log(result, _this);
    if(typeof result === "object" && result !== null) {
        return result;
    }

    return _this;
}

const instance = newOpe(F, 1, 2);
console.log(instance); // プリミティブ型が返される場合。
