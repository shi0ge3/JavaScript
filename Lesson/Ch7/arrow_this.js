// thisの挙動の違い。
window.name = 'John';

// 無名関数の場合
const person = {
    name: 'Tom',
    hello: function() {
        console.log('Hello ' + this.name);
    }
}
person.hello();

// アロー関数の場合
const arrow_person = {
    name: 'Bob',
    hello: () => {
        console.log('Hello ' + this.name);
    }
}
arrow_person.hello();