// クラス：コンストラクター関数をクラス表記でかける様にしたもの＝シンタックスシュガー
// コンストラクターのシンタックスシュガー(別の意味)
class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }

    hello() {
      console.log('hello ' + this.name);
    }
  }

  const bob = new Person('Bob', 23);
  // JavaScriptはあくまでもインスタンスから生成されたものはオブジェクトになる。
  console.log(bob);

  // 下記、プロトタイプと上記のクラスは同じ意味になる。
  // function Person(name, age) {
  //   this.name = name;
  //   this.age = age;
  // }

  // Person.prototype.hello = function() {
  //   console.log('hello ' + this.name);
  // }
