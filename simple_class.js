let obj = {
    name: 'Time',
    hello: function () {
        console.log(`Hello, ${this.name}`);
    }
}

function User(name) {
    this.name = name;
    this.hello = function () {
        console.log(`Hello, ${this.name}`);
    }
}

function plus(a) {
    return function (x) {
        return a + x;
    }
}
