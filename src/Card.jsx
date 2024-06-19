import styles from "./CardStyle.module.css"
import ProfilePic from "./Linkedin_ProfilePic.png"
import Linkedin_Logo from "./LinkedIn Logo.png"
import Github_Logo from "./Github Logo.png"
import Resume from "./Tech_Resume_Updated_2024.pdf"

function Card() {

    return(
    <header>
    <h1 className={styles.City}>Philadelphia, PA</h1>
    <h2 className={styles.Major}>Computer Science Student</h2>
    <h2 className={styles.At}>at</h2>
    <h2 className={styles.School}>Temple University</h2>
        <div className={styles.Card_Container}>
            <img src= {ProfilePic} alt="Justin Briddell Profile Pic"/>
        </div>
            <div className={styles.Linkedin_Button_Container}>
                <button className={styles.Linkedin_Button}>
                    <a href="https://www.linkedin.com/in/justin-briddell-917220250/">
                        <img src= {Linkedin_Logo} alt="Linkedin Logo"/></a>
                </button>
            </div>
            <div className={styles.Github_Button_Container}>
                <button className={styles.Github_Button}>
                    <a href="https://github.com/justinbriddell">
                        <img src= {Github_Logo} alt="Github Logo"/></a>
                </button>
            </div>
            <div className={styles.Resume_Button_Container}>
                <button className={styles.Resume_Button}>
                    <a href={Resume}download>
                        Resume</a>
                </button>
            </div>
    </header>
    )
}

export default Card

