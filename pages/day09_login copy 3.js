import React, { useState, useEffect, useCallback } from 'react';
import Head from "next/head";
import styles from "@/styles/day09_login.module.css";


import Load_emp_data from "@/pages/load_emp_data";
import Add_emp_data from "@/pages/add_emp_data";
import Eddit_emp_data from "@/pages/eddit_emp_data";


export default function Day09_login() {

  /*載入所有員工資料*/
  const [employees, setEmployees]=useState([]); 
  /*載入所有員工資料*/


  /*顯示新增視窗-員工*/
  const [insert_emp_toggle_state, setInsert_emp_toggle_state]=useState(false);
  function toggle_employee_insert(){           
    setInsert_emp_toggle_state(!insert_emp_toggle_state)
  }
  /*顯示新增視窗-員工*/


  /*顯示編輯視窗-員工*/
  const [eddit_emp_toggle_state, setEddit_emp_toggle_state]=useState(true);
  // 接收子組件-load_emp_data傳來的edit開關狀態
  const handle_eddit_toggle_state = () => {
    setEddit_emp_toggle_state(!eddit_emp_toggle_state);
  };
  // 接收子組件-load_emp_data傳來的edit開關狀態
  /*顯示編輯視窗-員工*/


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


  /*編輯資料-員工*/

  const [id_edit_input_val, setId_edit_input_val]=useState(''); 
  const [account_edit_input_val, setAccount_edit_input_val]=useState(''); 
  const [name_edit_input_val, setName_edit_input_val]=useState(''); 
  const [password_edit_input_val, setPassword_edit_input_val]=useState(''); 
  const [store_edit_input_val, setStore_edit_input_val]=useState(''); 
  const [permission_edit_input_val, setPermission_edit_input_val]=useState(''); 

  function id_edit(e){
    setId_edit_input_val(e.target.value)
  }

  function account_edit(e){
    setAccount_edit_input_val(e.target.value)
    }
    function name_edit(e){
    setName_edit_input_val(e.target.value)
    }
    function password_edit(e){
      setPassword_edit_input_val(e.target.value)
    }
    function store_edit(e){
      setStore_edit_input_val(e.target.value)
    }
    function permission_edit(e){
      setPermission_edit_input_val(e.target.value)
    }
    function edit_data(){
      console.log(account_edit_input_val);
      console.log(name_edit_input_val);
      console.log(password_edit_input_val);
      console.log(store_edit_input_val);
      console.log(permission_edit_input_val);
      fetch('http://localhost/%e5%81%b7%e7%b7%b4/day09/day09_api03.php',{
        method:'POST',
        headers:{
            'Content-Type':"application/json"  
        },
        body:JSON.stringify({ 
          'id':id_edit_input_val,
          'employee_account':account_edit_input_val,
          'chinese_name':name_edit_input_val,
          'employee_password':password_edit_input_val,
          'permission_level':permission_edit_input_val
        })
      })
      .then(response=>response.json())
      .then(data=>{
          if(data.error){
              console.log(data.error);
          }
          else{
              console.log('更新的資料送出成功')
          }
      })

      // })
  
    }

  // function show_edit_data(id){
  //   setEdit_emp_toggle_state(!edit_emp_toggle_state);
  //   console.log(id);
  //   fetch('http://localhost/%e5%81%b7%e7%b7%b4/day09/day09_api03.php',{
  //     method:'POST',
  //     headers:{
  //         'Content-Type':"application/json"  
  //     },
  //     body:JSON.stringify({ 
  //         "id":id,
  //     })
  //   })
  //   .then(res=>res.json())
  //   .then(result=>{
  //     // console.log(result.id, result.chinese_name, result.employee_account, result.employee_password, result.modification_time, result.permission_level, result.storeid);
  //     setId_edit_input_val(result.id);
  //     setAccount_edit_input_val(result.employee_account);
  //     setName_edit_input_val(result.chinese_name);
  //     setPassword_edit_input_val(result.employee_password);
  //     setStore_edit_input_val(result.storeid);
  //     setPermission_edit_input_val(result.permission_level)
  //     return result;
  //   })
  //   .then(res=>console.log(res))
  //   }
    const take_emp_data=(dataa)=>{
      setId_edit_input_val(dataa.id);
      setAccount_edit_input_val(dataa.employee_account);
      setName_edit_input_val(dataa.chinese_name);
      setPassword_edit_input_val(dataa.employee_password);
      setStore_edit_input_val(dataa.storeid);
      setPermission_edit_input_val(dataa.permission_level)
    }
/*編輯員工*/



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
          <Load_emp_data send_emp_data={take_emp_data}  eddit_toggle={handle_eddit_toggle_state} />
          {/* <!-- 資料顯示-員工清單 --> */}

        </div>
        {/* <!-- 資料顯示-員工清單與buttoms --> */}

        {/* <!-- 資料新增-員工 --> */}
        {insert_emp_toggle_state && (<Add_emp_data/>)}
        {/* <!-- 資料新增-員工 --> */}



        {/* <!-- 資料編輯-員工 --> */}
        {eddit_emp_toggle_state && (<Eddit_emp_data/>)}

        {eddit_emp_toggle_state && (
        <div className={styles.eddit_areas}>
          <div className={styles.input_area}>
          
            <div>
              <label >員工id:</label>
              <input onChange={id_edit} value={id_edit_input_val} disabled></input>
            </div>


            <div className={styles.eddit_account}>
              <label htmlFor="label_account">員工帳號:</label>
            </div>
            <input className={styles.input_account} type="text" id="label_account" onChange={account_edit} value={account_edit_input_val}/>
            <div className={styles.eddit_name}>
              <label htmlFor="label_name">名稱:</label>
            </div>
            <input className={styles.input_name} type="text" id="label_name" onChange={name_edit} value={name_edit_input_val}/>
            <div className={styles.eddit_password}>
              <label htmlFor="label_password">員工密碼:</label>
            </div>
            <input className={styles.input_password} type="text" id="label_password" onChange={password_edit} value={password_edit_input_val}/>                
            <div className={styles.eddit_store}>
              <label htmlFor="label_store">隸屬部門:</label>
              <select className={styles.input_store} onChange={store_edit} value={store_edit_input_val}>
                <option value="1">總公司</option>
                <option value="2">技術部</option>
                <option value="3">營業部</option>
                <option value="4">人事部</option>
                <option value="5">研發部</option>
              </select>
            </div>
            <div className={styles.eddit_permission}>
              <label htmlFor="label_permission">權限名稱:</label>
              <select className={styles.input_permission} id="label_permission" onChange={permission_edit} value={permission_edit_input_val}>
                <option value="1">老闆</option>
                <option value="2">主管</option>
                <option value="3">員工</option>
                <option value="4">路人</option>
              </select>
            </div>
            </div>
            <div className={styles.eddit_but_div}>
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
