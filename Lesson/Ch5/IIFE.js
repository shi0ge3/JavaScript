/* 即時関数：関数定義と同時に「一度だけ」実行される関数。実行結果は呼び出し元に返される。 */
//　基本形
(function() {
    console.log('called');
})();

// 関数式
// public/privateの使い分けをしたいときに使用する。
let result = (function(num) {
    let privateVal = 0;
    let publicVal = 10;

    function privateFn() {
        console.log('privateFn in called');
    }

    function publicFn() {
        console.log('publicFn in called ' + privateVal++);
    }

    return {
        publicVal,
        publicFn,
    };
})(5);
console.log(result); // 関数式で参照可能な変数を出力。
result.publicFn(); // 関数式で呼び出し可能な関数を実行。
result.publicFn(); // 即時関数が呼び出される時だけ、privateValにインクリメント(+1増加していくこと)。
result.publicFn();

// result.privateFn(); // 関数式でprivate(非公開)なため呼び出し不可。変数は戻り値でないため参照も不可。
