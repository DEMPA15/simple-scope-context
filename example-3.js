class Animal {
    constructor(numLegs, age) {
        this.numLegs = numLegs;
        this.age = age;
    }
    
    speak() {
        return this.phrase;
    }
}

class Dog extends Animal {
    constructor(breed, age) {
        super(4, age);
        
        this.breed = breed;
        this.phrase = 'woof';
    }
}

class Duck extends Animal {
    constructor(age, type) {
        super(2, age);
        
        this.type = type;
        this.phrase = 'quack';
    }
}

const yorkie = new Dog('Yorkie', 1);//?

yorkie.speak();//?

const mallard = new Duck(3, 'Mallard');//?

mallard.speak();//?