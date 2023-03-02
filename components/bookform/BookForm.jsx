import React, { useState } from "react";''
import styles from "./bookform.module.css"
import axios from "axios"
import Home from "../../src/pages/api/hello"
import SubmitButton from "components/button/Button";

export default function BookForm() {
  const [bookNameInput, setbookNameInput] = useState("");
  const [invoiceInput, setinvoiceInput] = useState("");
  const [authorInput, setauthorInput] = useState("");
  const [isBn, setisBn] = useState();
  const [costInput, setcostInput] = useState("");
  const [departmentInput, setdepartmentInput] = useState("");

  const bookinputhandler = (e) => {
    setbookNameInput(e.target.value);
  };
  const invoiceHandler = (e) => {
    setinvoiceInput(e.target.value);
  };
  const authorHandler = (e) => {
    setauthorInput(e.target.value);
  };
  const costHandler =(e)=>{
    setcostInput(e.target.value)
  }
  const departmenthandler=(e)=>{
    setdepartmentInput(e.target.value)
}
const isbnHandler=(e)=>{
    setisBn(e.target.value)
}
const formValues = {
  name:bookNameInput,
  invoice:invoiceInput,
  author:authorInput,
  isBn:isBn,
  cost:costInput,
  department:departmentInput
}
const booksubmitHandler=(e)=>{
 e.preventDefault()
 console.log(formValues)
   
}
  return (
    <div className={styles.formcontent}>
    <form onSubmit={booksubmitHandler} className={styles.formcontainer}>
      <label htmlFor="name">Enter book name</label>
      <input
        type="text"
        id="name"
        required
        minLength={3}
        maxLength={15}
        onChange={bookinputhandler}
        value={bookNameInput}
      />
      {/* <label htmlFor="invoice">Enter invoice</label>
      <input
        type="text"
        id="invoice"
        required
        minLength={4}
        maxLength={12}
        onChange={invoiceHandler}
        value={invoiceInput}
      /> */}
      <label htmlFor="author">Enter author name</label>
      <input
        type="text"
        id="author"
        onChange={authorHandler}
        value={authorInput}
      />
      <label htmlFor="cost">Enter the Cost</label>
      <input type="number" id="cost" onChange={costHandler}  value={costInput} />
      <label htmlFor="isbn">Enter the ISBN</label>
      <input type="text" id="isbn" onChange={isbnHandler} value={isBn} />
      <label htmlFor="department">Select Department</label>
      <select onChange={departmenthandler} value={departmentInput} >
        <option value="it">Informaation Technology</option>
        <option value="cs">Computer Science</option>
        <option value="ece">Eclectronics and communication</option>
        <option value="Science">Science</option>
        <option value="cosmic">cosmic</option>
        <option value="drama">drama</option>
        <option value="Maths">Maths</option>
      </select>
      <SubmitButton/>
    </form>
    </div>
  );
}