import styles from "./Profile.module.css"
import { useContext, useEffect, useState } from "react"
import ChatContext from "../../context/ChatContext"

const Profile = () => {
    const ctx = useContext(ChatContext)
    const [user, setUser] = useState(ctx.user)

    useEffect(()=>{
        setUser(ctx.user)
    }, [ctx.user])

    return (
        <div className={styles.profile}>
            <img className={styles.avatar} src={user.img} alt="avatar"/>
            <div className={styles.username}>
                {user.username}
            </div>
        </div>
    )
}

export default Profile;