
import _ from "lodash"

let value = 0

const add = () => value++

const memoAdd = _.memoize(add)

console.log(memoAdd())
console.log(memoAdd())
console.log(memoAdd())
console.log(memoAdd())
console.log(memoAdd())

console.log(add())
console.log(add())
console.log(add())
console.log(add())
console.log(add())

