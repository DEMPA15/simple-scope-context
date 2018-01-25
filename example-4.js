class Parent {
    constructor(data) {
        this.name = data.name;
        
        this.children = data.children;
    }
    
    listChildren() {
        return this.children
            .map(child => `${ child.sayName() }, the ${ child.sayTitle() }.`)
            .join('\n');
    }
}

class Child {
    constructor(data) {
        this.data = data;
    }
    
    sayName() {
        return this.data.name;
    }
    
    sayTitle() {
        return this.data.title;
    }
}

const anakin = new Parent({
    name: 'Anakin',
    children: [
        new Child({
            name: 'Luke',
            title: 'New Hope',
        }),
        new Child({
            name: 'Leia',
            title: 'Princess of Alderaan',
        }),
    ],
});//?

anakin.children[0].sayName();//?

anakin.children[1].sayTitle();//?

anakin.listChildren();//?