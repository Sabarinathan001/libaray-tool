import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Login from "components/Login/Login";
import BookForm from "components/bookform/BookForm";
import AddFaculty from "components/addfaculty/AddFaculty";
import AddStudent from "components/addstudent/AddStudent";
import BorrowBookForm from "components/borrowbook/BorrowBookForm";
import ReturnBook from "components/ReturnBook/ReturnBook";
import DataTable from "components/Datatable/DataTable";
import Header from "components/header/header";
import SideBar from "components/sidebar/SideBar";

export default function Home() {
  return (
    <div> 
      <Login />
    </div>
  );
}
