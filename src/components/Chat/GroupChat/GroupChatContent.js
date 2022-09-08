import { useContext, useEffect, useState } from "react"
import styles from "./GroupChatContent.module.css"
import MessageItem   from "./MessageItem"
import ChatContext from "../../../context/ChatContext"

const GroupChatContent = () => {
    const ctx = useContext(ChatContext)
    const [messages, setMessages] = useState([])
    
    ctx.chatSocket.websocket.onmessage = (msg) => {
        console.log(msg.data)
        const event = JSON.parse(msg.data)

        setMessages(prev => {
            return [
                ...prev,
                event
            ]
        })
    }

    useEffect(()=>{
        const selectedChat = ctx.selectedChat
        const user = ctx.user
        const body = {id:selectedChat.id, chat_type: selectedChat.type, user_id: user.id}
        ctx.chatApi.getMessages(body).then((msg)=>{
            console.log(msg)
            setMessages(msg)
        })
    }, [ctx.selectedChat])

    return (
        <div className={styles["chat-content"]}>
            {messages.map((event) => <MessageItem myid={ctx.user.id} type={event.type} message={event.data}/>)}
        </div>
    )
}

export default GroupChatContent;
