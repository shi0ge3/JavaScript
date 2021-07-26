function hello(name) {
    return function() {
        console.log(`hello ${name}`);
    }
}

/**
 * 実行文は以下の通りです。
 */
setTimeout(hello('Tom'), 1000);