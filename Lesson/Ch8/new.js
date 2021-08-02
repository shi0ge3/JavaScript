// コンストラクタ関数からインスタンスを作成するための演算子
function F(a, b) {
    this.a = a;
    this.b = b;
    return 1;
}

const instance = new F(1, 2);
console.log(instance); // プリミティブ型が返される場合。
