import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { useState } from "react";


export default function Home() {
const [account_value, setAccount_value]=useState('')
const [password_value, setPassword_value]=useState('')

const account_change=(e)=>{
  setAccount_value(e.target.value)
}
const password_change=(e)=>{
  setPassword_value(e.target.value)
}


  function login_process(){
    fetch('http://127.0.0.1/%e5%81%b7%e7%b7%b4/day09/day09_api_log_sess.php',{
      method:'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({
        "employee_account":account_value,
        "employee_password":password_value
      })
    })
    .then(response=>response.json())
    .then(data=>{
      if(data.message === '登入成功'){
        console.log('登入成功',data);
        window.location.href = "http://localhost:3000/day09_login";
      }
      else{
        alert('帳號或密碼錯誤');
      }
    })
    .catch(error => {
      console.error('發生錯誤:', error);
  });
  }







  return (
    <>
      <Head>
        <title>day09_unlogged</title>
      </Head>
      <main className={styles.background}>
      <div  className={styles.main}>
      <h2 className={styles.login_title}>登入系統</h2>
        <div className={styles.login_box}>
          <div className={styles.login_word}>登入Login</div>
          <div className={styles.account_area}>
            <div>帳號</div>
            <input style={{ marginLeft: '8px' }} value={account_value} type="text" onChange={account_change} ></input>
          </div>

          <div className={styles.code_area}>
            <div>密碼</div>
            <input style={{ marginLeft: '8px' }} value={password_value} type="password" onChange={password_change}></input>
          </div>
          <button className={styles.login_but} onClick={login_process}>登入</button>
        </div>


      </div>

      </main>
    </>
  );
}
