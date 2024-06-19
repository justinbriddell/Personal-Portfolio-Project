import styles from "./ProjectStyle.module.css"

function Project(){

    return(
        <header>
            <h1 className={styles.Header}>Projects</h1>
            <ul>
                <li className={styles.Calculator}> 
                    <h2>Calculator:
                       utilized JavaScript, HTML, and CSS in cohesion to create a functional calculator available to users on a web interface - <br/>
                            <a href="https://github.com/justinbriddell/Calculator-Project"> GitHub Link</a>  
                    </h2>
                    <h3>Skills: JavaScript, HTML, CSS</h3>
                </li>
                <li className={styles.Rock_Paper}> 
                    <h2>Rock, Paper, Scissors Game: 
                        coded Python program that allows users to play a game of rock, paper, scissors against integrated CPU - <br/>
                            <a href="https://github.com/justinbriddell/Rock-Paper-Scissors-Game"> GitHub Link</a>
                    </h2> 
                    <h3>Skills: Python</h3>
                </li>
            </ul>

        </header>
    )

}

export default Project