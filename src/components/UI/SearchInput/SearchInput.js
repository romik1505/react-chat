import { useRef } from "react"
import styles from "./SearchInput.module.css"

const SearchInput = (props) => {
    const inputRef = useRef()

    const onSearch = (e) => {
        e.preventDefault()
        console.log("search " + inputRef.current.value)
        inputRef.current.value = ""
    }
    
    return (
        <div className={props.className}>
            <form className={styles.search} onSubmit={onSearch}>
                <input type="text" ref={inputRef} placeholder="Search..."/>
                <input type="button"/>
            </form>
        </div>
    )
}

export default SearchInput;