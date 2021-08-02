// コンストラクタ関数からインスタンスを作成するための演算子
function F(a, b) {
    this.a = a;
    this.b = b;
    return {}
}

const instance = new F(1, 2);
console.log(instance); // 空のオブジェクトが返ってくる。
