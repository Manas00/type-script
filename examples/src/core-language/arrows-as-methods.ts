class Thing {
    foo: () => void;
    bar: () => void;
    data = "Some data in the object";

    constructor() {
        this.foo = function () {
            console.log(this.data);
        };

        this.bar = () => console.log(this.data);
    }

    zed() {
        console.log(this.data);
    }
}

export function showArrowsAsMethods() {
    let obj = new Thing();
    let f1 = obj.foo;
    let f2 = obj.bar;
    let f3 = obj.zed;

    try {
        f1();
    } catch(ex) {
        console.log("This was not preserved in call to 'f1/foo'");
    }
    try {
        f2();
    } catch(ex) {
        console.log("This was not preserved in call to 'f2/bar'");
    }
    try {
        f3();
    } catch(ex) {
        console.log("This was not preserved in call to 'f3/zed'");
    }
}
