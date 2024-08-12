import React, { useState } from 'react';
import Head from "next/head";
import styles from "@/styles/day09_login.module.css";
import { useEffect } from 'react';
import { FaPen } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";

export default function Day09_login() {
  /*載入所有員工資料*/
  const [employees, setEmployees]=useState([]); 
  /*載入所有員工資料*/




  /*新增員工資料*/

  /*顯示新增視窗-員工*/
  const [insert_emp_toggle_state, setInsert_emp_toggle_state]=useState(false);
  /*顯示新增視窗-員工*/

  const [account_value, setAccount_value]=useState(''); 
  const [name_value, setName_value]=useState(''); 
  const [password_value, setPassword_value]=useState(''); 
  const [store_value, setStore_value]=useState('1'); 
  const [permission_value, setPermission_value]=useState('3'); 
  /*新增員工資料*/




/*編輯員工*/

const [account_edit_input_val, setAccount_edit_input_val]=useState(''); 
const [name_edit_input_val, setName_edit_input_val]=useState(''); 
const [password_edit_input_val, setPassword_edit_input_val]=useState(''); 
const [store_edit_input_val, setStore_edit_input_val]=useState(''); 
const [permission_edit_input_val, setPermission_edit_input_val]=useState(''); 


/*編輯員工*/


  /*載入所有員工資料*/
  useEffect(()=>{
    fetch('http://localhost/%e5%81%b7%e7%b7%b4/day09/day09_api01.php')
    .then(res=>res.json())
    .then(data=>{
      // console.log(data)
      setEmployees(data);
    })
    .catch(error=>{
      console.error('有錯誤喔!', error)
    })
  },[])
  /*載入所有員工資料*/





  /*新增資料-員工*/
  function toggle_employee_insert(){           
    setInsert_emp_toggle_state(!insert_emp_toggle_state)
  }

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

  function insert_data(){
  console.log(account_value);
  console.log(name_value);
  console.log(password_value);
  console.log(store_value);
  console.log(permission_value);

  fetch('http://localhost/%e5%81%b7%e7%b7%b4/day09/day09_api02.php',{
    method:'POST',
    header:{
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
  .then(res=>res.json())
  .then(result=>console.log(result))
  location.reload();
  }
  /*新增資料-員工*/
  


  /*編輯資料-員工*/


  /*顯示編輯視窗-員工*/
  const [edit_emp_toggle_state, setEdit_emp_toggle_state]=useState(false);
  /*顯示編輯視窗-員工*/

  function account_edit(e){
    setAccount_value(e.target.value)
    }
    function name_edit(e){
    setName_value(e.target.value)
    }
    function password_edit(e){
    setPassword_value(e.target.value)
    }
    function store_edit(e){
    setStore_value(e.target.value)
    }
    function permission_edit(e){
    setPermission_value(e.target.value)
    }
    function edit_data(){
      console.log(account_value);
      console.log(name_value);
      console.log(password_value);
      console.log(store_value);
      console.log(permission_value);
    }

  function show_edit_data(id){
    setEdit_emp_toggle_state(!edit_emp_toggle_state);
    console.log(id);
    fetch('http://localhost/%e5%81%b7%e7%b7%b4/day09/day09_api03.php',{
      method:'POST',
      header:{
          'Content-Type':"application/json"  
      },
      body:JSON.stringify({ 
          "id":id,
      })
    })
    .then(res=>res.json())
    .then(result=>{
      console.log(result.id, result.chinese_name, result.employee_account, result.employee_password, result.modification_time, result.permission_level, result.storeid);
      setAccount_edit_input_val(result.employee_account);
      setName_edit_input_val(result.chinese_name);
      setPassword_edit_input_val(result.employee_password);
      setStore_edit_input_val(result.storeid);
      setPermission_edit_input_val(result.permission_level)
      return result;
    })
    .then(res=>console.log(res))
    }
    /*編輯資料-員工*/
    
  return (
    <>
      <Head>
        <title>day09_login</title>
      </Head>

      <div className={styles.body}>
        {/* <!-- 資料顯示-員工個人資料 --> */}
        <div className={styles.details_block1}>
          <div className={styles.detail_title}>-----員工資料-----</div>
            <div className={styles.member_details}>
              <div className={styles.member_id}>員工編號:</div>
              <div className={styles.chinese_name}>中文名稱:</div>
              <div className={styles.permission_level}>權限名稱:</div>
              <div className={styles.permission_level}>隸屬部門:</div>
            </div>
          <div>
            <button className={styles.show_my_data}>顯示/隱藏單位</button>
            <button>登出</button>
          </div>
        </div>
        {/* <!-- 資料顯示-員工個人資料 --> */}

        {/* <!-- 資料顯示-員工清單與buttoms --> */}
        <div className={styles.load_data}>
          <div className={styles.setting_butts}>
            <button className={styles.employees_butt}>員工設定檔</button>
            <button className={styles.permissions_butt}>權限設定檔</button>
          </div>
          <div className={styles.create_butt_out}>
            <button className={styles.create_butt} onClick={toggle_employee_insert}>新增員工</button>
          </div>



          {/* <!-- 資料顯示-員工清單 --> */}
          <div className={styles.scrollTable1}>
            <table className={styles.my_talbe}>
              <thead className={styles.table_head}>
                <tr className={styles.head_tr}>
                  <th></th>
                    <th>員工編號</th>
                    <th>員工帳號</th>
                    <th>名稱</th>
                    <th>員工密碼</th>
                    <th>權限名稱</th>
                    <th>修改時間</th>
                    <th></th>
                </tr>
              </thead>
              <tbody className={styles.table_body}>
              {employees.map(el=>(
                <tr className={styles.body_tr} key={el.id}>
                  <td onClick={()=>show_edit_data(el.id)}><FaPen /></td>
                  <td>{el.id}</td>
                  <td>{el.employee_account}</td>
                  <td>{el.chinese_name}</td>
                  <td>{el.employee_password}</td>
                  <td>{el.permission_level}</td>
                  <td>{el.create_time}</td>
                  <td><FaTrash /></td>
                </tr>
              ))}
              </tbody>
            </table>
          </div>
          {/* <!-- 資料顯示-員工清單 --> */}

        </div>
        {/* <!-- 資料顯示-員工清單與buttoms --> */}

        {/* <!-- 資料新增-員工 --> */}
        {insert_emp_toggle_state && (
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
              <select className={styles.input_store} onChange={store_insert}>
                <option value="1">總公司</option>
                <option value="2">技術部</option>
                <option value="3">營業部</option>
                <option value="4">人事部</option>
                <option value="5">研發部</option>
              </select>
            </div>
            <div className={styles.insert_permission}>
              <label htmlFor="label_permission">權限名稱:</label>
              <select className={styles.input_permission} id="label_permission" defaultValue="3" onSubmit={permission_insert}>
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
        )}
        {/* <!-- 資料新增-員工 --> */}


        {/* <!-- 資料編輯-員工 --> */}
        {edit_emp_toggle_state && (
        <div className={styles.insert_areas}>
          <div className={styles.input_area}>
            <div className={styles.insert_account}>
              <label htmlFor="label_account">員工帳號:</label>
            </div>
            <input className={styles.input_account} type="text" id="label_account" onChange={account_edit} value={account_edit_input_val}/>
            <div className={styles.insert_name}>
              <label htmlFor="label_name">名稱:</label>
            </div>
            <input className={styles.input_name} type="text" id="label_name" onChange={name_edit} value={name_edit_input_val}/>
            <div className={styles.insert_password}>
              <label htmlFor="label_password">員工密碼:</label>
            </div>
            <input className={styles.input_password} type="text" id="label_password" onChange={password_edit} value={password_edit_input_val}/>                
            <div className={styles.insert_store}>
              <label htmlFor="label_store">隸屬部門:</label>
              <select className={styles.input_store} onChange={store_edit} value={store_edit_input_val}>
                <option value="1">總公司</option>
                <option value="2">技術部</option>
                <option value="3">營業部</option>
                <option value="4">人事部</option>
                <option value="5">研發部</option>
              </select>
            </div>
            <div className={styles.insert_permission}>
              <label htmlFor="label_permission">權限名稱:</label>
              <select className={styles.input_permission} id="label_permission" defaultValue="3" onSubmit={permission_edit} value={permission_edit_input_val}>
                <option value="1">老闆</option>
                <option value="2">主管</option>
                <option value="3">員工</option>
                <option value="4">路人</option>
              </select>
            </div>
            </div>
            <div className={styles.insert_but_div}>
              <button onClick={edit_data}>送出</button>
              {/*<button onclick=toggle_insert()>取消</button> */}
            </div>
        </div>
        )}
        {/* <!-- 資料編輯-員工 --> */}





      </div>
    </>
  )
}
