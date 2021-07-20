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
const a = () => console.log('Bye ' + this.name);

const arrow_person = {
    name: 'Bob',
    // hello: () => {
    //     console.log('Hello ' + this.name);
    // }
    // es6からは省略可能=無名関数で定義されている。
    hello() {
        console.log(`Hello ${this.name}`);
        // この場合のレキシカルスコープはこのオブジェクトのBob
        const a = () => console.log('Bye ' + this.name);
        a();
    }
}
arrow_person.hello();

// レキシカルスコープはWindowsオブジェクトを指す。
function b() {
    const a = () => console.log('Bye ' + this.name);
    a();
}

b();
