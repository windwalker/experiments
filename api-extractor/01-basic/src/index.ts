import Helper from "./Helper"

/**
 * @public
 */
class MathLib {
    /**
     * @public
     */
    add(a: number, b: number) {
        return a + b
    }
    /**
     * @internal
     */
    multiply(a: number, b: number) {
        return a * b
    }
}

export default MathLib
export {Helper}