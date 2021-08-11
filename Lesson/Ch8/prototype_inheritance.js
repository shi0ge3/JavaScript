// 継承：別のコンストラクター関数を受け継ぐこと。
// プロトタイプ継承： 別のコンストラクター関数のプロトタイプを受け継いで、機能を流用できるようにすること。

function Person(name, age) {
    this.name = name;
    this.age = age;
  }

  Person.prototype.hello = function() {
    console.log('hello ' + this.name);
  }

  function Japanese(name, age) {

  }
  // プロトタイプ継承の例
  Japanese.prototype = Object.create(Person.prototype);