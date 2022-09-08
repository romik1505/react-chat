import styles from "./PersonalChatHeader.module.css"
import SearchInput from "../../UI/SearchInput/SearchInput";

const PersonalChatHeader = (props) => {
    return (
        <div className={styles.header}>
            <div className={styles.title}>{props.chat.username}</div>
            <div className={styles.right}>
                <SearchInput className={styles.search}/>
                <div className={styles.notify}></div>
                <div className={styles.settings}></div> 
            </div>
        </div>
    )
}

export default PersonalChatHeader;