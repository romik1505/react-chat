import ChatList from '../components/Chat/ChatList'
import ChatMain from "../components/Chat/ChatMain"
import Panel from '../components/Chat/Panel';

function Chat(props) {
    return (
        <>
            <Panel />
            <ChatList />
            <ChatMain/>
        </>
    )
}

export default Chat;