function add(a, b) {
    return a + b
}

function inc(a) {
    return a + 1
}

export default add
export {inc}
export {random} from './math_1.js'
export {default as Crass} from './math_1.js'