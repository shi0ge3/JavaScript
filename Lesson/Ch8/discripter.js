// ディスクリプター:下記、４つのプロパティーのこと。
// value:値/configurabel:設定変更可能性/enumerable:列挙可能性/writable:値の変更可能性
// const obj = {prop: 0};
'use strict';
const obj = {};

Object.defineProperty(obj, 'prop', {
    // ディスクリプターに値を入れると他のディスクリプターはfalseになる。
    // falseは変更が不可。
    configurable: true, // trueで他のオブジェクトでもプロパティ変更が可能になる。
    value: 0,
    writable: true
})// オブジェクトにdescriptorを入れる。

// 他のオブジェクトでプロパティを変更することはconfigurableがfalseだと不可。
Object.defineProperty(obj, 'prop', {
    enumerable: true
})

obj.prop = 1;
// 通常だとエラーにならずに、変更が成功したと気づけない。
// ES5から'use strict';を追記してErrorを発生させる。
console.log(obj.prop);

const descriptor = Object.getOwnPropertyDescriptor(obj, 'prop');

console.log(descriptor);
