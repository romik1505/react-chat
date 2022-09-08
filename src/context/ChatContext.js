import {createContext, useEffect, useState} from "react"
import SocketClient from "../model/SocketClient"
import ChatAPI from "../model/ChatAPI"

const ChatContext = createContext({
    user: {},
    chatSocket: {},
    chatApi: {},
    isLoggedIn: false,
    selectedChat: {},
    onLogin: () => {},
    setContext: (prev)=>{}
})

export const ChatContextProvider = (props) => {
    const [chatContext, setChatContext] = useState({})

    useEffect(()=>{
        const api = new ChatAPI("http://localhost:8000")
 
        const onLogin = (userData) => {
            const ws =  new SocketClient("ws://localhost:8000/ws", userData, (msg) => {
                console.log("msg", msg)
            })
            ws.init()

            setChatContext((prev)=> {
                return  {
                    ...prev,
                    user: userData,
                    chatSocket: ws,
                    isLoggedIn: true
                }
            })
        }

        setChatContext((prev)=>{
            return {
                ...prev,
                chatApi: api,
                isLoggedIn: false,
                selectedChat: {},
                onLogin: onLogin,
                setContext: setChatContext
            }
        })
    }, [])

    return(
        <ChatContext.Provider value={chatContext}>
            {props.children}
        </ChatContext.Provider>
    )
}

export default ChatContext