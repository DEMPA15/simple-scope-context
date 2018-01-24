// LEXICAL SCOPE

// This variable is "global", meaning any code in this file can access it
// and manipulate, read, or compare its value.
let variable = 'value';

function scope() {
    // "someVar" is a "local variable" to the "scope" function, which means it can
    // be accessed anywhere inside of the body of this function or functions declared
    // inside of this function
    let someVar = 'foo';
    
    // "variable" can be accessed in this function...
    console.log(variable);
    
    function a() {
        var A;
        
        // ... and this function ...
        console.log(variable);
        
        function b(C) {
            var B;
            
            // ... and this function, too.
            console.log(variable);
            
            // The parameter "C" is also a local variable for the function "b", and 
            // can be accessed inside of that function, but not outside of it like any
            // other variable
        }
        
        // B // ERROR! (trying to reference "B" outside of scope)
    }
    
    // B // ERROR!
    // C // ERROR!
    // A // ERROR!
}

// someVar // ERROR!

scope();




// OBJECT CONTEXT

// Classes are like blueprints for objects--you set up your classes to have the shape of
// the objects you want to make.
class Context {
    // Constructors are run only once when using the "new" keyword on a class
    constructor(num) {
        // Class "fields" are initialized in the constructor and when a class is "instantiated"
        // with the "new" keyword, the fields become properties of the new object.
        this.initialized = 'static value';
        
        // Constructor parameters are useful in assigning different or unique values to
        // the fields
        this.whateverTheHeckYouWant = num;
        this.field = 'value ' + num;
        
        // You can also capture the current "this" context if you use an arrow function
        // inside of one of the classes methods and assign it to a new field
        this.getADifferentField = () => this.field + ' somethingElse';
    }
    
    // Class "methods" are functions you can access on each object from a class
    getField() {
        return this.field;
    }
}

// Classes aren't objects--they can look that way, and as such can be confusing at first.
// Classes can create multiple objects that look and behave similarly, but if you only
// create an object like this, you'll only have one object.
const plainOldObject = {
    field: 'value',
    getField() {
        return this.field;
    },
};


// Classes can be used multiple times to make similar objects.
// Each of these objects are different instances of the same class.
const context1 = new Context(1);
const context2 = new Context(2);
const context3 = new Context(3);
const context4 = new Context(4);
const context5 = new Context(5);

// Each object has different values stored in their properties, but
// the same methods, which all are able to access the properties
// by using the "this" keyword.
context1.getField();
context2.getField();
context3.getField();
context4.getField();
context5.getField();
context1.getADifferentField();

// When it comes to context (or "this"), you start to have problems when you need to access
// the object's context, but need to pass methods or other functions which need to remember
// the object's original context to other functions or methods, and can't be referenced on
// the object itself:
const getField1 = context1.getField.bind(context1);
// Since this method already captured the "this" context, you don't need to bind it here again.
const getAnotherField1 = context1.getADifferentField;

getField1();
getAnotherField1();