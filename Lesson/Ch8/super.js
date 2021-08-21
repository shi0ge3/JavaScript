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
        console.log('Konnichiwa ' + this.name); // 関数内のthisはコンストラクターと違いエラーにならない。
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

// 一部例外でオブジェクトでは使用可能。(クラスのコンストラクターで使用できない仕様と比較)
const american = {
    hello() {
        console.log('hello ' + this.name);
    }
}

const bob = {
    name: 'Bob',
    hello() { // 下記のObject .setPrototypeOfの処理の影響でここをコメントアウトしてもプロトタイプチェーンでamericanオブジェクまで遡る。
        super.hello();
        // console.log('hello ' + this.name);
    }
}

Object.setPrototypeOf(bob, american); // americanオブジェクをbobのプロパティに追加している。
bob.hello();
