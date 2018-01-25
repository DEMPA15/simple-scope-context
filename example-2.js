class A {
    increment(factor = 1) {
        return this.total += factor;
    }
}

class B extends A {
    constructor() {
        super();
        this.total = 0;
    }
}

const b = new B();

b.increment();//?
b.increment(2);//?

b.total;//?