import FacultyForm from 'components/addfaculty/AddFaculty'
import DataTable from 'components/Datatable/DataTable'
import Layout from 'components/layout/Layout'
import React,{useState} from 'react'
import styles from "../../styles/addbutton.module.css"

function FacultyPage() {
    const [Faculty, setFaculty] = useState(false)
    function handleclick(){
        setFaculty(!Faculty)
    }
  return (
    <Layout>
      <div>
        <button className={styles.btn} onClick={handleclick}>Add Faculty</button>
      </div>
      <div>
        {Faculty&&<FacultyForm/>}
      </div>
      <div>
        {/* <DataTable/> */}
      </div>
    </Layout>
  )
}

export default FacultyPage
