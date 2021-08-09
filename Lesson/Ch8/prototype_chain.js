function Person(name, age) {
    this.name = name;
    this.age = age;
  }

  // PersonとObjectのプロトタイプチェーンを比較。
  // Person.prototype.hello = function() {
  //   console.log('Person: hello ' + this.name);
  // }

  // Personのオブジェクトが無効であるとこちらのObjectになる。
  Object.prototype.hello = function() {
    console.log('Object: hello ' + this.name);
  }

  const bob = new Person('Bob', 18);
  bob.hello();