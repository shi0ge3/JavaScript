function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.hello = function() {
    console.log('hello ' + this.name);
}

const bob = new Person('Bob', 18);
const tom = new Person('Tom', 33);
const sun = new Person('Sun', 20);

// Personのプロトタイプとbob or tomのインスタンスオブジェクトの__proto__は同じ。
bob.hello();
tom.hello();

// prototypeオブジェクトを使用することで、インスタンスオブジェクトの関数の参照先が同じになる。
// メモリ使用効率がよくなる効果がある。