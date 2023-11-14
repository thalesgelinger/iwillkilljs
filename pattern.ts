import { match } from "ts-pattern"

//enum Fruits {
//    apple = "apple",
//    banana = "banana"
//}

type Fruits = 'apple' | 'banana'

const a: Fruits = 'apple'

const value = match(a)
    .with("apple", () => "Here")
    .exhaustive()

console.log({ value })
