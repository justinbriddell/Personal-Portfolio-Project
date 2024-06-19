import styles from "./HeaderStyle.module.css"

function Header() {
    
    return(
        <header>
            <div id="HeaderContainer">
                <h1 className = {styles.Title_Header}>Justin Briddell</h1>
            </div>
        </header>  
    )

}

export default Header