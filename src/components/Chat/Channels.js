import { useContext, useEffect, useState } from "react"
import ChatContext from "../../context/ChatContext"
import styles from "./Channels.module.css"

const Channels = () => {
    const ctx = useContext(ChatContext)
    const [channels, setChannels] = useState([])

    useEffect(() => {
        ctx.chatApi.getChannels().then(
            channelsData => setChannels(Object.values(channelsData))
        )
    }, [])

    const onClick = (group) => {
        ctx.setContext((prev)=>{
            return {
                ...prev,
                selectedChat: {
                    ...group,
                    type: "group",
                }
            }
        })
    }

    return (
        <div className={styles["channels"]}>
            <div className={styles["header"]}>
                <div className={styles["title"]}>Channels</div>
                <div className={styles["amount"]}>{channels.length}</div>
            </div>
            {channels.map(el => <div key={el.id} className={styles["channel-item"]} onClick={()=>{onClick(el)}}>#{el.name}</div>)}
        </div>
    )
}

export default Channels;