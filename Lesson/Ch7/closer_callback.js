function hello(name) {
    return function() {
        console.log(`hello ${name}`);
    }
}

setTimeout(hello('Tom'), 1000);