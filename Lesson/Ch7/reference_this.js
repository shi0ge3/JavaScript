// const person = {
//     name: 'Tom',
//     hello: function() {
//         console.log('Hello ' + this.name);
//     }
// }

// // 上記の this ,があるオブジェクトを代入。
// const ref = person.hello;
// // 結果はHelloのみ出力。上記のthis.nameが渡っていないことがわかる。
// // 関数オブジェクトのみコピーしているので、nameプロパティはコピーされていないため。
// ref();

window.name = 'John';

const w_person = {
    name: 'Tom',
    hello: function() {
        console.log('Hello ' + this.name);
        a();

        const person = {
            name: 'Tom',
            hello: function() {
                console.log('Hello ' + this.name);
                a();
            }
        }
        person.hello();
    }
}

// thisのあるオブジェクトを代入。
const w_ref = w_person.hello;
// 結果は Hello John 出力。上記の window.name が渡っている。
w_ref();

// 基本的な this の contextの位置による動きの違い。(例外もある)
// オブジェクトのメソッドとして実行 = this -> 呼び出し元オブジェクト
// 関数として実行される場合 = this -> グローバルオブジェクト

person.hello();

function a() {
    console.log(`Hello ${this.name}`);
}
