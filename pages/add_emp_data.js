import styles from "@/styles/add_emp_data.module.css";
import React, { useState, useEffect, useCallback } from 'react';


export default function Add_emp_data() {

  /*新增員工資料*/

  const [account_value, setAccount_value]=useState(''); 
  const [name_value, setName_value]=useState(''); 
  const [password_value, setPassword_value]=useState(''); 
  const [store_value, setStore_value]=useState('1'); 
  const [permission_value, setPermission_value]=useState('3'); 
  /*新增員工資料*/
    
      function account_insert(e){
      setAccount_value(e.target.value)
      }
      function name_insert(e){
      setName_value(e.target.value)
      }
      function password_insert(e){
      setPassword_value(e.target.value)
      }
      function store_insert(e){
      setStore_value(e.target.value)
      }
      function permission_insert(e){
      setPermission_value(e.target.value)
      }
    
      const insert_data = useCallback(() => {
        console.log(account_value);
        console.log(name_value);
        console.log(password_value);
        console.log(store_value);
        console.log(permission_value);
        console.log("請求一次");
    
        fetch('http://localhost/%e5%81%b7%e7%b7%b4/day09/day09_api02.php',{
          method:'POST',
          headers:{
              'Content-Type':"application/json"  
          },
          body:JSON.stringify({ 
              "account":account_value,
              "name":name_value,
              "password":password_value,
              "store": store_value,
              "permission": permission_value,
          })
        })
        .then(res=>{
          console.log(res);
          return  res.json()
        })
          
        .then(result=>{
          console.log(result)
          location.reload();
        })
      }, [account_value, name_value, password_value, store_value, permission_value]);
    


  return (
    <>
        <div className={styles.insert_areas}>
            <div className={styles.input_area}>
                <div className={styles.insert_account}>
                    <label htmlFor="label_account">員工帳號:</label>
                </div>
                <input className={styles.input_account} type="text" id="label_account" onChange={account_insert}/>
                <div className={styles.insert_name}>
                    <label htmlFor="label__name">名稱:</label>
                </div>
                <input className={styles.input_name} type="text" id="label__name" onChange={name_insert}/>
                <div className={styles.insert_password}>
                    <label htmlFor="label__password">員工密碼:</label>
                </div>
                <input className={styles.input_password} type="text" id="label__password" onChange={password_insert}/>                
                <div className={styles.insert_store}>
                    <label htmlFor="label_store">隸屬部門:</label>
                    <select className={styles.input_store} onChange={store_insert} defaultValue={1}>
                    <option value="1">總公司</option>
                    <option value="2">技術部</option>
                    <option value="3">營業部</option>
                    <option value="4">人事部</option>
                    <option value="5">研發部</option>
                    </select>
                </div>
                <div className={styles.insert_permission}>
                    <label htmlFor="label_permission">權限名稱:</label>
                    <select className={styles.input_permission} id="label_permission" onChange={permission_insert} defaultValue={3}>
                    <option value="1">老闆</option>
                    <option value="2">主管</option>
                    <option value="3">員工</option>
                    <option value="4">路人</option>
                    </select>
                </div>
            </div>
            <div className={styles.insert_but_div}>
                <button onClick={insert_data}>送出</button>
                {/*<button onclick=toggle_insert()>取消</button> */}
            </div>
        </div>
    </>
  )
}
