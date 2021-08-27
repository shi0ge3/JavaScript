// ディスクリプター:下記、４つのプロパティーのこと。
// value:値/configurabel:設定変更可能性/enumerable:列挙可能性/writable:値の変更可能性
// const obj = {prop: 0};

const descriptor = Object.getOwnPropertyDescriptor(obj, 'prop');

console.log(descriptor);
