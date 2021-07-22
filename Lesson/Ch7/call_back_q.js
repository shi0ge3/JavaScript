// 問題１
const person = {
    hello: function () {
        return 'hello Tom';
    }
}

setTimeout(function() {
    const hello = person.hello();
    console.log(hello);
}, 1000);

// 問題２
setTimeout(function() {
    const hello = person.hello();
    alert(hello);
}, 1000);

// 問題３
// hello:シャローコピー(値コピー)なので'hey'とは異なるので上書きされていない。

// 問題４
const calc = calcFactory(10, console.log);
const calc2 = calcFactory(10, alert);