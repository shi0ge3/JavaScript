// super:継承元の関数を呼び出すためのキーワード。

class Person {
    //クラスのコンストラクターは関数コンテキスト内で行われている。
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    hello() {
        console.log('hello ' + this.name);
    }
}

class Japanese extends Person {
    constructor(name, age, gender) {
        this.gender = gender;
        super(name, age); // superの実行前にthisを使用するとエラー
        // this.gender = gender;
    }

    hello() {
        super.hello();
        console.log('Konnichiwa ' + this.name);
    }

    bye() {
        console.log('Sayonara ' + this.name);
    }
}

const taro = new Japanese('Taro', 23, 'Male');
console.log(taro);
taro.bye();

// const american = {
//     hello() {
//         console.log('hello ' + this.name);
//     }
// }

// const bob = {
//     name: 'Bob',
//     hello() {
//         super.hello();
//     }
// }
