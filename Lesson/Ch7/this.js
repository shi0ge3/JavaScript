// this:呼び出し元のオブジェクトへ参照を保持するキーワード

const person = {
    name: 'Tome',
    hello: function() {
        console.log(`Hello ${this.name}`);
    }
}

person.hello();

// 下記の内容で結果は同じになる。
// const person = {
//     name: 'Tome',
//     hello: function() {
//         console.log(`Hello ${person.name}`); // レキシカルスコープでpersonを参照してnameを見るため。
//     }
// }
// person.hello();
// 基本はオブジェクト内の関数で呼ぶならthis。