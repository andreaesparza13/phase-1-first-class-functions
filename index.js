function receivesAFunction(spy) {
    spy();
}

function returnsANamedFunction() {
    return function fn() {
        console.log("this is a named function");
    }
    return fn();
}

function returnsAnAnonymousFunction() {
    return () => {
        console.log("this is an anonymous function");
    }
}