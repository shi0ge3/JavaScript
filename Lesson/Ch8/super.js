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
        // this.gender = gender; // superの実行前にthisを使用するとエラー
        super(name, age);
        this.gender = gender;
    }

    hello() {
        super.hello(); // 関数でsuperを使用すると親クラスの関数を呼び出せる。
        console.log('Konnichiwa ' + this.name);
    }

    bye() {
        console.log('Sayonara ' + this.name);
    }
}

const taro = new Japanese('Taro', 23, 'Male');
console.log(taro);
taro.hello();

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
