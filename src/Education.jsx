import styles from "./EducationStyle.module.css"
import TempleLogo from "./Temple.Logo.png"

function Education() {
    return(
    <header>
        <h1 className={styles.Education_Header}>Education</h1>
        <div className={styles.TempleLogo}>
            <img src={TempleLogo} alt="Temple T Logo" />
        </div>
               <h3 className={styles.Major}>Major: Computer Science</h3>
               <h3 className={styles.Classification}>Classification: Junior</h3>
               <h3 className={styles.GPA}>GPA: 2.87</h3>
               <h3 className={styles.Courses}>Courses: Computer Programming in C</h3>

    </header>
    )
}

export default Education