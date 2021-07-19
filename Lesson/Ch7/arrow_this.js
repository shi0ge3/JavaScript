// thisの挙動の違い。
window.name = 'John';

// オブジェクト(無名)関数の場合
// thisは呼び出し元のオブジェクト
const person = {
    name: 'Tom',
    hello: function() {
        console.log('Hello ' + this.name);
    }
}
person.hello();

// アロー関数の場合
// thisはグローバルオブジェクトを参照している。
const arrow_person = {
    name: 'Bob',
    hello: () => {
        console.log('Hello ' + this.name);
    }
}
arrow_person.hello();

const a = () => console.log('Bye ' + this.name);