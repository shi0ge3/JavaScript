// 問１
const addNumberFactory = num => value = num + value;

const add5 = addNumberFactory(5);
const result = add5(10);
console.log(result);

// 問２
const incrementFactory = function incrementFactory() {

    let num = 0;

    function a() {
        num = num + 1;
        console.log(num);
    }

    return a;
}

const increment = incrementFactory();

increment();
increment();
increment();
increment();