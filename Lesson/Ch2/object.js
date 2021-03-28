/* 前提知識 */

/* オブジェクト：名前(プロパティorキー)と値(バリュー)をペアで管理する入れ物 */

/* 記述例とオブジェクトで格納して扱えるもの
 * let obj = {
 *      property1: 'Hello', = 名前：値
 *      property2: function() { = 名前：関数
 *      },
 *　    property3: { = 名前：オブジェクト ※オブジェクトのプロパティに格納された関数は「メソッド」と呼ばれる
 *       d: 'Bye'
 *      }
 * }
 *
 * プロパティー(オブジェクト)へのアクセス方法
 * ドット記法
 * obj.name
 *
 * ブラケット記法
 * obj['name']
 */

let obj = {
    prop1: 'value1', // 複数のオブジェクトを記述の場合は , (カンマ)を忘れずに！
    prop2: 2,
    prop3: function() { // 関数名がない関数は「無名関数」と呼ばれる
        console.log('value3')
    },
    prop4: { // オブジェクトの格納も可能
        prop5: 'value5'
    },
}

// オブジェクトの呼び出し
// ドット記法
// プロパティへのアクセス
console.log(obj.prop1);
// メソッドの実行
obj.prop3();

// ブラケット記法
// プロパティへのアクセス
console.log(obj['prop4']);
// メソッドの実行
obj['prop3']();

/* 既存のオブジェクトに新たなオブジェクトを追加 */
obj.prop6 = 'value6'; // 例 名前：値のペアを追加
console.log(obj.prop6);

// オブジェクト全体を出力
console.log(obj); // 全ての中身が出力される。
