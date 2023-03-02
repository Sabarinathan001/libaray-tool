import SubmitButton from 'components/button/Button';
import Form from 'components/form/Form';
import React,{useState} from 'react'
import styles from "../addfaculty/addfaculty.module.css"


function AddStudent() {

  const [studentName, setstudentName] = useState('')
  const [registerNo, setregisterNo] = useState('') 
  const [year, setyear] = useState('')
  const [studentDepartment, setStudentDepartment] = useState('') 
  const [gender, setgender] = useState('')
  const [phonenumber, setphonenumber] = useState()

const formvalues={
  name:studentName,
  register:registerNo,
  gender:gender,
  department:studentDepartment,
  year:year,
  phoneno:phonenumber
}

  const studentnameinputhandler = (e) =>{
    setstudentName(e.target.value)
    console.log(studentName)
  } 
  const registerNoHandler = (e) =>{
    setregisterNo(e.target.value)
    console.log(registerNo)
  } 
  const yearhandler = (e) =>{
    setyear(e.target.value)
    console.log(year)
  }
  const departmenthandler = (e) =>{
    setStudentDepartment(e.target.value)
    console.log(studentDepartment)
  }
  const genderhandler =(e)=>{
    setgender(e.target.value)
    }
    const phonenumberhandler=(e)=>{
      setphonenumber(e.target.value) 
    }
    
  const studentFormSubmiHandler = (e)=>{
    e.preventDefault()
    console.log(formvalues)
  }
  return (
    <div className={styles.formcontent}>
    <form onSubmit={studentFormSubmiHandler} className={styles.formcontainer}  >
       <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        required
        minLength={3}
        maxLength={15}
        onChange={studentnameinputhandler}
        value={studentName}
      />
      <label htmlFor="register_no">Employee Id</label>
      <input
        type="text"
        id="register_no"
        required
        minLength={4}
        maxLength={12}
        onChange={registerNoHandler}
        value={registerNo}
      />
      <label htmlFor="">Select year</label>
      <select onChange={yearhandler}>
        <option value="">1 Year</option>
        <option value="">2 Year</option>
        <option value="">3 Year</option>
        <option value="">4 Year</option>
      </select>
      <label htmlFor="">Select Department</label>
      <select onChange={departmenthandler}>
        <option value="it">Informaation Technology</option>
        <option value="cs">Computer Science</option>
        <option value="ece">Eclectronics and communication</option>
      </select>
      <label htmlFor="">Select Gender</label>
      <select onChange={genderhandler} value={gender}>
        <option value="it">Male</option>
        <option value="cs">Female</option>
        <option value="ece">Others</option>
      </select>
      <label htmlFor="phno">Enter phone number</label>
      <input type="number" onChange={phonenumberhandler} value={phonenumber} />
      <SubmitButton/>
    </form>
    </div>
  )
}

export default AddStudent
