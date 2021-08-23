// ラッパーオブジェクト：プリミティブ値を内容方するオブジェクト。
const a = new String('hello');
const a2 = 'Hello'.toUpperCase(); // 上記の様にわざわざ記述しなくて良い。
console.log(a.toUpperCase()); // プロパティにはStringオブジェクトの関数がある。

const b = new Number(100);
console.log(b.toExponential()); // [[]]はJSエンジンでしか使用できない値。また、中身を見ることは不可。
// jsでは指数eは10のn乗を表す。
