/**
 * @internal
 */
class InnerSocket{
    connect() {
        console.log('connect socket')
    }

    close() {
        console.log('close socket')
    }
}

export default InnerSocket