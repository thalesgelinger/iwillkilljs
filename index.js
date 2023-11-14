function MyDecorator() {
    return function (target, propertyKey, descriptor) {
        // Decorator logic goes here
        console.log('MyDecorator applied to', target, propertyKey);
    };
}
function myFunc() {
    console.log('Inside myFunc');
}
myFunc();
