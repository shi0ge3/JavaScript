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

  // 継承したプロトタイプの上書き=プロトタイプチェーンで自身のオブジェクトに近いプロトタイプを使用するため上書きができる。
  Japanese.prototype.hello = function() {
    console.log('konnnichiwa ' + this.name);
  }

  const taro = new Japanese('Taro', 23);
  console.log(taro);
  taro.hello();
