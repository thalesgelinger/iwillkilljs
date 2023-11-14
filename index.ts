function Component(target: any) {
    console.log(`Logging class: ${target.name}`);
}

function State(target: any) {
    console.log(`Logging state: ${target.name}`);
}

@Component
class MyClass {

    @State() value: number;

    constructor() {
        console.log("MyClass constructor called");
    }

    myMethod() {
        console.log("Executing myMethod");
    }
}

const instance = new MyClass();
instance.myMethod();

