import styles from "./MessageItem.module.css"

const MessageItem = (props) => {
    switch (props.type) {
        case "group_message":
            return GroupMessage(props.message, props.myid)
        case "connect":
            return ConnectMessage(props.message)
        case "disconnect":
            return DisconnectMessage(props.message)
        default: 
            console.log("unknown event -> ", props.message)
    }
}

const parseDate = (date = "") => {
    return new Date(date).toLocaleTimeString("ru-RU", {hour:"2-digit", minute:"2-digit"})
}

const GroupMessage = (message, myid) => {
    return (
        <div className={styles["message-item"]}>
            <img  className={styles["avatar"]} src={message.sender.img} alt="avatar"/>
            <div className={styles["message-content"]}>
                <div className={styles["top"]}>
                    <div className={styles["username"]}>{message.sender.username}</div>
                    <div className={styles["date"]}>{parseDate(message.date)}</div>
                </div>
                <div>{message.text}</div>
            </div>
        </div>
    )
}

const ConnectMessage = (message) => {
    const style = `${styles["message-item"]} ${styles.event}` 
    return (
        <div className={style}>
            {message.user.username} присоединился к беседе
        </div>
    )
}

const DisconnectMessage = (message) => {
    const style = `${styles["message-item"]} ${styles.event}` 
    return (
        <div className={style}>
            {message.user.username} вышел из беседы
        </div>
    )
}

export default MessageItem;