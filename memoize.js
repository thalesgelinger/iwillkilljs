import  _ from "lodash"

console.clear()

const colorize = (color) => {
    console.log(`New color: ${color}`)
}


//colorize('blue')
//colorize('blue')
//colorize('red')
//colorize('red')

//const memoColorize = _.memoize(colorize)
//
//memoColorize('blue')
//memoColorize('red')
//memoColorize('red')
//memoColorize('blue')


const reactMemo = (fn) => {
    let prev = {
        color: null,
        result: null,
    }
    return (color) => {
        if(prev.color === color) {
            return prev.result;
        }
        prev.color = color;
        prev.result = fn(color);
    }
}

const rnMemoColorize = reactMemo(colorize);

rnMemoColorize('blue')
rnMemoColorize('red')
rnMemoColorize('blue')
rnMemoColorize('red')

