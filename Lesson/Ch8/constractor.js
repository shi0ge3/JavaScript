// コンストラクタ関数：新たなオブジェクトを作成するための雛形となる関数。
function person(name, age) {
    this.name = name;
    this.age = age;
}

// オブジェクト生成
const bob = new person('Bob', 18);
const tom = new person('Tom', 33);
const sun = new person('Sun', 20);

// コンストラクタ関数→インスタンス化→インスタンス
