// call, apply=thisや引数の参照先を変更。同時に関数を実行する。

function a(name, name1) {
    console.log('hello ' + name + ' ' + name1);
}

const tim = {name: 'Tim'}

const b = a.bind(tim);

b();

a.apply(tim, ['Tim', 'Bob']);
//applyは第一引数がthisの参照先、第2引数は配列で展開して仮引数に渡せる。
const array = [1,2,3,4,5]
// const result = Math.max.apply(null, array); // ES5で主流。
const result = Math.max(...array); // ES6で主流。
console.log(result);

a.call(tim, 'Tim');
//callは第一引数がthisの参照先、第２引数を関数の仮引数に設定。