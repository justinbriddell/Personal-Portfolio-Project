import styles from "./SkillsStyle.module.css"

function Skills (){

    return(
    <header>
        <h1 className={styles.Header}>Skills</h1>
            <ul className = {styles.ListContainer}>
                <li><h2>JavaScript | C (Programming Language) | Python</h2></li>
                <li><h2> HTML | CSS | React.js</h2></li>
                <li><h2>Artificial Intelligence (AI) | Generative AI</h2></li>
                <li><h2>GitHub</h2></li>
            </ul>
    </header>
        
    )
}

export default Skills 

