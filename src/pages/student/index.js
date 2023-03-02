import FacultyForm from 'components/addfaculty/AddFaculty'
import AddStudent from 'components/addstudent/AddStudent'
import Layout from 'components/layout/Layout'
import React,{useState} from 'react'
import styles from "../../styles/addbutton.module.css"

export default function StudentPage() {
    const [student, setstudent] = useState(false)
    function handleclick(){
        setstudent(!student)
    }
  return (
    <Layout>
      <div>
        <button className={styles.btn} onClick={handleclick}>Add Student</button>
      </div>
      <div>
        {student&&<AddStudent/>}
      </div>
    </Layout>
  )
}


