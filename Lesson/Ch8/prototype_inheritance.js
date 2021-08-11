// 継承：別のコンストラクター関数を受け継ぐこと。
// プロトタイプ継承： 別のコンストラクター関数のプロトタイプを受け継いで、機能を流用できるようにすること。

function Person(name, age) {
    this.name = name;
    this.age = age;
  }

  Person.prototype.hello = function() {
    console.log('hello ' + this.name);
  }

  // 継承の例
  function Japanese(name, age) {
    Person.call(this, name, age);
  }
  // プロトタイプ継承の例
  Japanese.prototype = Object.create(Person.prototype);

  const taro = new Japanese('Taro', 23);
  console.log(taro);
  taro.hello(); // Personのhello関数が呼び出し可能。
