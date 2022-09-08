import styles from "./Auth.module.css"
import AuthForm from "../components/Auth/AuthForm"

const Auth = (props) =>  {
    return (
        <div className={styles.auth}>
            <AuthForm/>
        </div>
    )
}

export default Auth;