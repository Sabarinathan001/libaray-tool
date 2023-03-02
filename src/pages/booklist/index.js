import BookForm from "components/bookform/BookForm";
import DataTable from "components/Datatable/DataTable";
import Layout from "components/layout/Layout";
import React,{useState} from "react";
import styles from "../../styles/addbutton.module.css";

function BookPage({ data }) {
    const [bookForm, setbookForm] = useState(false)
    function handleclick(){
        setbookForm(!bookForm)
    }
  return <Layout>
    <div>
      <button className={styles.btn} onClick={handleclick}>Add Book</button>
       {bookForm&&<BookForm/>}
    </div>
     <div>
     {/* <DataTable/> */}
     </div>
  </Layout>;
}

export default BookPage;

async function getstaticprops() {
  const response = await axios("url");
  return {
    props: {
      data: response.data,
    },
  };
}
