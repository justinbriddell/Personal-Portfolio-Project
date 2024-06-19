import styles from "./CertificationsStyle.module.css"

function Certifications() {
    return(
    <header>
        <h1 className={styles.Header}>Certifications / Online Courses</h1>
            <div className = {styles.CourseContainer}>
               <h2 className={styles.Course1}>LinkedIn Learning | JavaScript Essential Training by Morten Rand-Hendriksen</h2>
               <h3>Completed: January 2024 | Skills: JavaScript</h3>
               <h2 className={styles.Course2}>LinkedIn Learning | C Programming Basics by Dan Gookin</h2>
               <h3>Completed: February 2024 | Skills: C Programming</h3>
               <h2 className={styles.Course3}>LinkedIn Learning | HTML Essential Training by Jen Simmons</h2>
               <h3>Completed: May 2024 | Skills: HTML</h3>
               <h2 className={styles.Course4}>LinkedIn Learning | Introduction to Artificial Intelligence by Doug Rose</h2>
               <h3>Completed: May 2024 | Skills: Artificial Intelligence (AI)</h3>
               <h2 className={styles.Course5}>LinkedIn Learning | Introduction to Prompt Engineering for Generative AI by Ronnie Sheer</h2>
               <h3>Completed: May 2024 | Skills: Artificial Intelligence (AI)</h3>
               <h2 className={styles.Course6}>Microsoft | Career Essentials in Gernerative AI by Microsoft and LinkedIn</h2>
               <h3>Completed: May 2024 | Skills: Artificial Intelligence (AI), Generative AI</h3>
            </div>
    </header>
    )

}

export default Certifications