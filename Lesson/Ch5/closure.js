/* クロージャー：レキシカルスコープの変数を関数が使用している状態。 */
function fn1() {
    let b = 1;
    function fn2() {
        // レキカルスコープ(厳密に言うと外部スコープの変数)の変数を使用していること。
        console.log(b)
    }
    fn2();
}
fn1();

// プライベート変数の定義(クロージャーを使った実装)
// let num = 0; // ここの定義すると結果は同じだが、他の関数等でも使用可能なため値が書き換えられる可能性がある・・論理バグ等の原因に・・

function incrementFactory() {

    let num = 0;

    function increment() {
        num = num + 1;
        console.log(num);
    }

    return increment; // JSでは関数自体を戻り値として使用できる。
}

const increment = incrementFactory(); // 関数自体を返されるので、一度、変数に格納が必要。
increment(); // (); を追記すると関数処理が実行される。
increment(); // 値が１つずつ増えていく関数。
increment();

// 動的な関数の生成(クロージャーを使った実装)=状況に応じて関数が変わる。
