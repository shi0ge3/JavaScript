// instanceof: どのコンストラクターから生成されたオブジェクトかを確認する。

function F(a, b) {
    this.a = a;
    this.b = b;
    const result = new Object();
    result.a = 1;
    return {a: 1};
}

F.prototype.c = function() {}

const instance = new F(1, 2);
// どのオブジェクトを生成されたのかを確認。
console.log(instance instanceof F);
console.log(instance.__proto__ === F.prototype); // falseの理由はObjectクラスのコンストラクタのため。
console.log(instance.__proto__ === Object.prototype); // Trueが返されている。
