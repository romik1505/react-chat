import { useContext, useRef } from "react"
import ChatContext from "../../context/ChatContext"
import styles from "./ChatInputForm.module.css"

const ChatInputForm = () => {
    const inputRef = useRef()
    const ctx = useContext(ChatContext)
    const onPushClip = () => {
        console.log("clip")
    }

    const onPushMicrophone = () => {
        console.log("micro")
    }

    const onPushSmile = () => {
        console.log("smile")
    }

    const onKeyDown = (e) => {
        if (e.key === "Enter") {
            const text = inputRef.current.value
            const chat_id = ctx.selectedChat.id
            const chat_type = `${ctx.selectedChat.type}_message`

            ctx.chatSocket.pushMessage(text, chat_id, chat_type)
            console.log(text)
            inputRef.current.value = ""
        }
    }

    return (
        <div className={styles["input"]}>
            <input type="button" className={styles["clip"]} onClick={onPushClip}/>
            <input type="button" className={styles["microphone"]} onClick={onPushMicrophone}/>
            <input type="text" placeholder="Введите сообщение" onKeyDown={onKeyDown} ref={inputRef}/>
            <input type="button" className={styles["smile"]} onClick={onPushSmile}/>
        </div>
    )
}

export default ChatInputForm;