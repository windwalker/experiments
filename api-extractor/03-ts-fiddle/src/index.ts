import DrawHelper from "./DrawHelper";
import InnerSocket from "./InnerSocket";

/**
 * @public
 */
class SDKEntryClass {
    /**
     * @internal
     */
    socket: InnerSocket

    /**
     * @internal
     */
    constructor() {
        this.socket = new InnerSocket()
    }
    open() {
        this.socket.connect()
        return new DrawHelper()
    }
}

/**
 * @public
 */
const SDKInstance = {
    /**
     * @public
     */
    getInstance: function() {
        return new SDKEntryClass()
    }
}

export default SDKInstance