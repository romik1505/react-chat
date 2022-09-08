import { useCallback, useContext, useEffect, useState } from "react"
import ChatContext from "../../context/ChatContext"
import styles from "./FriendList.module.css"

// const friends = [
//     {
//         id: 1,
//         username: "valera",
//         img: "https://sun1.userapi.com/sun1-17/s/v1/if1/QRLgSTIHzDUW_GUGjzbOjm3TvaoeJXfG3LhkQ_20-d-JXaFRSxroz2UsDFII82S0fMqrob4e.jpg?size=200x200&quality=96&crop=39,442,1053,1053&ava=1",
//         ref: "",
//         online: true,
//     },
//     {
//         id: 2,
//         username: "Vasya",
//         img: "https://sun1.userapi.com/sun1-99/s/v1/ig2/KCOZiEUVXEYExqK_l2NQhmNp9MzrZoqR_uA5Y-Ifr_ckYqSsr3vvCt3xALWqiZKFFEnxe0rdEJrPc8Jy5h4wRxst.jpg?size=100x100&quality=96&crop=230,558,584,584&ava=1",
//         ref: "",
//         online: true,
//     },
//     {
//         id: 3,
//         username: "Sanyaasdasdasd",
//         img: "https://sun1.userapi.com/sun1-20/s/v1/if1/mybsPSSxbfEOm11rNFGUWXStzHRouYu8apEg1hE48fe71xLk02sO_G26A7Dca_pW-FfKv549.jpg?size=100x100&quality=96&crop=20,128,1010,1010&ava=1",
//         ref: "",
//         online: false,
//     },
//     {
//         id: 4,
//         username: "zalupa4",
//         img: "https://sun1.userapi.com/sun1-95/s/v1/ig2/dRZl0XPtEilm3b00cTJOBu-dUfyRZkd9sRxmFOHzNqOffwQ9VLNjz478XxE8LqveT3j8nnruQoEB13nmYRK2poHo.jpg?size=100x100&quality=96&crop=533,583,1007,1007&ava=1",
//         ref: "",
//         online: false,
//     }
// ]


const FriendList = () => {
    const ctx = useContext(ChatContext)
    const [friends, setFriends] = useState([])
    
    const onClick = (chat) => {
        console.log({...chat, type: "personal"})

        ctx.setContext((prev)=>{
            return {
                ...prev,
                selectedChat: {...chat, type: "personal"} 
          }
        })
    }

    useEffect(()=>{
        ctx.chatApi.getFriends().then((friends)=>setFriends(Object.values(friends)))
    }, [])

    return (
        <div className={styles["friends"]}>
            <div className={styles["header"]}>
                <div className={styles["title"]}>Friends</div>
                <div className={styles["amount"]}>{friends.length}</div>
            </div>
            {friends.map(user => {
                return (
                    <div className={styles["friend"]} key={user.id} onClick={()=>{onClick(user)}}>
                        <div className={styles["status"] +" "+ styles[user.online ? "online":"offline"]}></div>
                        <img src={user.img} className={styles["avatar"]}/>
                        <div className={styles["username"]}>{user.username}</div>
                    </div>
                )
            })}
        </div>
    )
}

export default FriendList;