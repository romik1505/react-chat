class SocketClient {
    constructor(socketURL, user, onMessage) {
        this.user = user
        this.socketURL = socketURL
        this.onMessage = onMessage
    }

    init() {
        return new Promise((resolve, reject) => {
            this.websocket = new WebSocket(this.socketURL)
            this.websocket.onmessage = this.onMessage
            this.websocket.onerror = reject
            this.websocket.addEventListener('open', resolve)
            this.websocket.onopen = this.connect.bind(this)
        })
    }

    connect() {
        this.sendEvent({
            type: "connect",
            data: {
                ticket: this.user.id
            }
       })
    }

    // personal_message, group_message
    pushMessage(msg = "", receiver_id = "", message_type = "") {
        const event = {
            type: message_type,
            data: {
                text: msg,
                receiver_id
            }
        }
        this.sendEvent(event)
    }

    sendEvent(event = {}) {
        console.log("send ", event)
        this.websocket.send(JSON.stringify(event))
    }

}

export default SocketClient;