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
setTimeout(person.hello(), 1000);

// 問題３
// hello:理由 heyはまだ実行に移っていない為。

// 問題４
