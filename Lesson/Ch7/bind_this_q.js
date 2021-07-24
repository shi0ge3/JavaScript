// 問題１
setTimeout(person.hello.bind(person, "hello"), 1000);

// 問題２
alert(person.hello("hello"));

// 問題３
// オブジェクトの関数がアロー関数(無名関数)なので、オブジェクト関数に変更する。

// 問題４
function hello1s() {
    setTimeout(this.hello.bind(this, 'hello'), 1000);
    setTimeout(() => {
        this.hello('hello');
    }, 1000);
    const _this = this;
    setTimeout(function() {
        _this.hello('hello');
    })
}
