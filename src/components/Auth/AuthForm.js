import { useContext, useRef } from "react"
import ChatContext from "../../context/ChatContext"
import styles from "./AuthForm.module.css"

const AuthForm = (props) => {
    const login = useRef()
    const password = useRef()
    const ctx = useContext(ChatContext)

    const onSubmit = (e) => {
        e.preventDefault()
        console.log("submit")
        ctx.chatApi.login({
            username: login.current.value,
            password: password.current.value,
        }).then((userData) => {
            console.log(userData)
            ctx.onLogin(userData.user)
        }).catch((err)=> {
            console.log("error authorization", err)
        })
    }

    return (
        <form className={styles.auth} onSubmit={onSubmit}>
            <div className={styles.title}>Войти в аккаунт</div>
            <label>Username</label>
            <input type="text" placeholder="Введите логин" ref={login}/>
            <label>Password</label>
            <input type="password" placeholder="Введите пароль" ref={password}/>
            <input type="submit" value="Login"/>
        </form>
    )
}

export default AuthForm;