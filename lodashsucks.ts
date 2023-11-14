import _ from "lodash"

const perftest = (id: string, callback: () => void) => {
    console.time(id)
    for (let i = 0; i < 100000; i++) {
        callback()
    }
    console.timeEnd(id)
}

const o = ''


perftest("Vanilla JS", () => {
    return !!o
})

perftest("Lodash", () => {
    return _.isEmpty(o)

})



