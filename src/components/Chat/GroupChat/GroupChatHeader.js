import Notify from "../../UI/Notify/Notify";
import SearchInput from "../../UI/SearchInput/SearchInput"
import Settings from "../../UI/Settings/Settings";
import styles from "./GroupChatHeader.module.css"

const GroupChatHeader = (props) => {
    return (
        <div className={styles.header}>
            <div className={styles.title}>#{props.chat.name}</div>
            <div className={styles.right}>
                {props.chat.amount}
                <div className={styles.amount}>1,201</div>
                <SearchInput className={styles.search}/>
                <Notify/>
                <Settings/> 
            </div>
        </div>
    )
}
export default GroupChatHeader;
