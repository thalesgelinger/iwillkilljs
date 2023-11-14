import { Map } from 'immutable'


console.log({ a: 1 } == { a: 1 })
const a = { a: 1 }
console.log(Map(a) == Map(a))

