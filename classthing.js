
class A {
    something = 1
}

class B extends A {
    constructor(){
        super()
        console.log(super.something)
    }
}

new B()


