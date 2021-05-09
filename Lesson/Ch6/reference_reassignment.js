// 分割代入：オブジェクトから特定のプロパティを抽出して宣言を行う。
const a = {
    prop: 0
}

let { prop } = a;

prop = 1;
console.log(a, prop);

function fn(obj) {
    let { prop } = obj;
    prop = 1;
    console.log(obj, prop);
}

fn(a);

// オブジェクトが階層化した場合。
const c = {
    prop1: {
        prop2: 0
    }
}

let { prop1 } = c; // オブジェクトを分割代入。
console.log(prop1);

prop1.prop2 = 1;
console.log(prop1.prop2);