// bind関数を使用することで、意図的にthisの参照先を変更できる。

window.name = 'John';

const person = {
    name: 'Tom',
    hello: function() {
        console.log('Hello ' + this.name);
    }
}
person.hello();

// bindの引数にしたオブジェクトをthisの参照先にしている。
const helloTom = person.hello.bind(person);

function fn(ref) { // 関数オブジェクトを参照先にしている。オブジェクト（例ならperson）のthisにするにはbind関数を使用。
    ref();
}

fn(helloTom); // personオブジェクトのname:Tomを参照している。
// 結果：Hello Tom

function a() {
    console.log(`hello ${this.name}`);
}

// bind関数の第一引数をオブジェクトを渡している。
// その結果をconst b(変数)に代入している。
const b = a.bind({name: 'Tim'})
b();

// 関数の引数の場合。（オブジェクトではない場合）
function c(name) {
    console.log(`hello ${this.name}`);
}

// bind関数の第一引数をオブジェクトを渡している。
// その結果をconst c(変数)に代入している。
const d = c.bind(null, 'Tim');
d();
// d('Tom'); =結果：hello Timと変わらない。＝関数cの引数を固定している。
