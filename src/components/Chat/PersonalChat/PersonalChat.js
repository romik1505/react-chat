import PersonalChatContent from "./PersonalChatContent";
import PersonalChatHeader from "./PersonalChatHeader";

const PersonalChat = (props) => {
    return (
        <>
            <PersonalChatHeader chat={props.chat}/>
            <PersonalChatContent />
        </>
    )
}

export default PersonalChat;