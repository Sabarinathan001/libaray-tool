import Header from "components/header/Header";
import SideBar from "components/sidebar/SideBar";
import React from "react";
import styles from "./layout.module.css"

function Layout(props) {
  return (
    <div className={styles.main}>
      <div className={styles.head}>
        <Header />
      </div>
      <div className={styles.aside}>
        <SideBar />
      </div>
      <div className={styles.content}>
        <main style={{ width: "100%" }}>{props.children}</main>
      </div>
    </div>
  );
}

export default Layout;
