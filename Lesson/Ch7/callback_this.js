window.name = 'John';

const person = {
    name: 'Tom',
    hello: function() {
        console.log('Hello ' + this.name);
    }
}
person.hello(); // personオブジェクトから呼出。
// 結果：Hello Tom

function fn(ref) { // 関数オブジェクトとして渡している。
    ref();
}

fn(person.hello); //そのため、変数代入と同じ結果になる。
// 結果：Hello John