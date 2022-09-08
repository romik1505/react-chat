import { useContext, useEffect, useState } from 'react'
import ChatContext from '../../context/ChatContext'
import ChatInputForm from './ChatInputForm'
import styles from './ChatMain.module.css'
import GroupChat from './GroupChat/GroupChat'
import PersonalChat from './PersonalChat/PersonalChat'

const ChatMain = () => {
    const ctx = useContext(ChatContext)
    const [selectedChat, setSelectedChat] = useState({})
    
    useEffect(()=>{
        setSelectedChat(ctx.selectedChat)
        console.log("selected->", ctx.selectedChat)
    }, [ctx.selectedChat])
    return (
        <div className={styles["main"]}>
            {selectedChat.type == "group" && <GroupChat chat={ctx.selectedChat}/>}
            {selectedChat.type == "personal" && <PersonalChat chat={ctx.selectedChat}/>}
            <ChatInputForm />
        </div>
    )
}

export default ChatMain;

