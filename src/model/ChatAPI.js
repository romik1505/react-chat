class ChatAPI {
    constructor(url = "http://localhost:8000") {
        this.url = url
    }

    // POST {username: "username_1"} => {user:{id, username, img}}
    async login(body = {}) {
        return fetch(this.url + "/login", {
            method: 'POST',
            body: JSON.stringify(body)
        }).then(resp => resp.json())
    }


    // POST {id: "", username: "", img: ""}
    async userUpdate(body = {}) {
        return fetch(this.url + "/user/update",{
            method: 'POST',
            body: JSON.stringify(body)
        }).then(resp => resp.json())
    }

    async getChannels() {
        return fetch(this.url + "/channels").then(resp => resp.json())
    }

    async getFriends() {
        return fetch(this.url + "/friends").then(resp => resp.json())
    }

    // {type="personal" or "group", id}
    async getMessages(params = {}) {
        return fetch(this.url + "/messages?" + new URLSearchParams(params)).then(resp => resp.json())
    }
}

export default ChatAPI;