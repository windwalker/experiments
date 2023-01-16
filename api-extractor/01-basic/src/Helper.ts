/**
 * @public
 */
class Helper {
    /**
     * @public
     */
    findMax(arr: Array<number>) {
        let max = arr[0]
        for (let i = 1; i < arr.length; i++) {
            max = Math.max(max, arr[i])
        }
        return max
    }
}

export default Helper