// ビルトインオブジェクト：コード実行前にJSエンジンによって自動的に生成されるオブジェクト
const array = new Array(1,2,3,4);
console.log(array);

array[0] // 内部的にはarray["0"]添字の数値は文字列に変換されている。そしてオブジェクトに変換される。
array.hasOwnProperty(0);
