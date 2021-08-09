// ProtoTypeChain：階層が浅い順にプロトタイプを参照していくこと。
// 優先順位：自身のプロパティ→インスタンスのプロトタイプ→オブジェクトプロトタイプ

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.hello = function() {
      console.log('OwnProperty: hello ' + this.name);
    }
  }

  // PersonとObjectのプロトタイプチェーンを比較。
  Person.prototype.hello = function() {
    console.log('Person: hello ' + this.name);
  }

  // Personのオブジェクトが無効であるとこちらのObjectになる。
  Object.prototype.hello = function() {
    console.log('Object: hello ' + this.name);
  }

  const bob = new Person('Bob', 18);
  bob.hello();