//Symbol:ES6から導入された、プロパティーの重複を避けるために、必ず一意の値を返す関数。
const s = Symbol('hello'); //プリミティブ型であるSymbol
const s2 = Symbol('hello');
console.log(s === s2); // sとs2は違う＝違うアドレスに格納されている値
console.log(typeof s); // symbol型のプリミティブ型とわかる。

const str = new String('Tom');
console.log(str);

String.prototype[s] = function() {

}

String.prototype[s2] = function() {

}
// 上記の場合は、プロパティの競合を防ぐためにES６から独立するようになった。