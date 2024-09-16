"use client"
import Image from "next/image";
import styles from "./page.module.css";
import React from "react";

export default function Home() {
  React.useEffect(()=> {
    fetch("http://localhost:3000/api/v1/todo", 
      {
        method: 'GET',
        headers:{
          'Content-Type':'application/json'
        }
      }).then(res=>res.json())
      .then(res=>console.log(res))
      .catch(err=>{
        console.error(err);
      });
  },[]);
  return <div className={styles.page}>TODO</div>;
}
