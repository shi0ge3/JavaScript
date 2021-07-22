// 問題１
const person = {
    hello: () =>  {
        return 'hello Tom';
    }
}
console.log(person.hello());

// 問題２
setTimeout(person.hello(), 1000);

// 問題３
