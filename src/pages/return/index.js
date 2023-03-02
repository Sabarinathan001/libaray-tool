import FacultyForm from 'components/addfaculty/AddFaculty'
import Layout from 'components/layout/Layout'
import ReturnBook from 'components/ReturnBook/ReturnBook'
import React,{useState} from 'react'
import styles from "../../styles/addbutton.module.css"

export default function ReturnPage() {
   const [returnBook, setreturnBook] = useState(false)
    function handleclick(){
        setreturnBook(!returnBook)
    }
  return (
    <Layout>
      <div>
        <button className={styles.btn} onClick={handleclick}>Return Book</button>
      </div>
      <div>
        {returnBook&&<ReturnBook/>}
      </div>
    </Layout>
  );
}

 