// ANDの場合
let a = 1;
let b = 1;
const c = 3;
console.log(a && b && c); // 最後のCまで評価され、Cの値が返される。
b = 0;
// 途中でfalsyがあれば、その値を結果で返す。
console.log(a && b && c); // AとB評価され、偽のため、falsyのBの値が返される。

// ORの場合
a = 0;
b = 1;
console.log(a || b); // どちらか一方のtruthy(値が大きいデータ)の値が返される。
a = 4;
b = 2;
console.log(a || b);

// AND + OR の複合。a = 4, b = 2, c = 3
// グループ化しない場合。
console.log(a || b && c); // ORの処理結果と同じで、truthyの値が大きいaの値が返される。
// グループ化する場合。()を追記する。
console.log(a || (b && c)); // グループ化しない場合と同じ。
console.log((a || b) && c); // ANDの処理結果と同じで、最後に評価されたcの値が返される。