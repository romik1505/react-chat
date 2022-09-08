import styles from "./ChatList.module.css"
import Channels from "./Channels"
import FriendList from "./FriendList"
import Profile from "./Profile"

const ChatList = () => {
    return (
        <div className={styles["chat-list"]}>
            <Profile />
            <div>
                <Channels />
                <FriendList />
            </div>
        </div>
    )
}

export default ChatList;