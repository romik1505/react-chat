import GroupChatContent from "./GroupChatContent";
import GroupChatHeader from "./GroupChatHeader";

const GroupChat = (props) => {
    return (
        <>
            <GroupChatHeader chat={props.chat}/>
            <GroupChatContent />
        </>
    )
}

export default GroupChat;