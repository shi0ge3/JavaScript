function hello(name = 'Tom') {
    // 引数(今回はname)に初期値を設定する処理。
    // if(!name){
    //     name = 'Tom';
    // }
    // OR条件で値を設定する場合。
    // name = name || 'Tom';
    // 真偽の比較で、falsyなら設定した初期値が返される。(Tom)
    // しかし、falsyな値ならそれを使用して処理ができないので注意！
    // 例えば、数字の０。
    console.log(`hello ${name}`);
}

hello() // 設定した初期が使用される。
hello('Bob') // truthy(引数の値)が処理で使用される。

// AND条件の場合。
let name;
name && hello(name); // falsyな値の前に関数があると実行されないので注意。
