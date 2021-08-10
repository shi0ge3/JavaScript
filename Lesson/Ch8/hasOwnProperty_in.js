function Person(name, age) {
    this.name = name;
    this.age = age;
}

Object.prototype.hello = function() {
    console.log('Object: hello ' + this.name);
}

const bob = new Person('Bob', 18);
const result = bob.hasOwnProperty('hello');
console.log(result);
// in関数は、プロトタイプチェーンを遡って探す。
console.log('hasOwnProperty' in bob);
