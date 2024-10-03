import React, { useState, useEffect, useCallback } from 'react';
import styles from "@/styles/day09_login.module.css";

import Head from "next/head";
import Load_emp_data from "@/pages/load_emp_data";
import Add_emp_data from "@/pages/add_emp_data";
import Edit_emp_data from "@/pages/edit_emp_data";


export default function Day09_login() {

  const [selectedEmployee, setSelectedEmployee] = useState(null);

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
  const [edit_emp_toggle_state, setEdit_emp_toggle_state]=useState(false);
  // 接收子組件 load_emp_data傳來的edit開關狀態
  const handle_edit_toggle_state = () => {
    setEdit_emp_toggle_state(!edit_emp_toggle_state);
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



  /*load_emp_data 物件中用來傳遞資料*/


  const [id_edit_input_val, setId_edit_input_val]=useState(''); 
  const [account_edit_input_val, setAccount_edit_input_val]=useState(''); 
  const [name_edit_input_val, setName_edit_input_val]=useState(''); 
  const [password_edit_input_val, setPassword_edit_input_val]=useState(''); 
  const [store_edit_input_val, setStore_edit_input_val]=useState(''); 
  const [permission_edit_input_val, setPermission_edit_input_val]=useState(''); 



  // 將資料傳遞進去
    const take_emp_data=(dataa)=>{
      setId_edit_input_val(dataa.id);
      setAccount_edit_input_val(dataa.employee_account);
      setName_edit_input_val(dataa.chinese_name);
      setPassword_edit_input_val(dataa.employee_password);
      setStore_edit_input_val(dataa.storeid);
      setPermission_edit_input_val(dataa.permission_level);


      setSelectedEmployee(dataa);
      setEdit_emp_toggle_state(true);
    }



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

          {/* <!-- 資料顯示-員工清單 -->*/}
              {/*在父組件day09_login這裡
                用handle_eddit_toggle_state()
                接收子組件 Load_emp_data物件的 edit_toggle();
                來操作 edit_emp_toggle_stat */}

              {/* send_emp_data是將資料傳遞進 子組件 */}
          <Load_emp_data send_emp_data={take_emp_data}  edit_toggle={handle_edit_toggle_state} />
          {/* <!-- 資料顯示-員工清單 --> */}

        </div>
        {/* <!-- 資料顯示-員工清單與buttoms --> */}

        {/* <!-- 資料新增-員工 --> */}
        {insert_emp_toggle_state && (<Add_emp_data/>)}
        {/* <!-- 資料新增-員工 --> */}

        {/* <!-- 資料編輯-員工 --> */}
        {edit_emp_toggle_state && (<Edit_emp_data employeeData={selectedEmployee}/>)}
        {/* <!-- 資料編輯-員工 --> */}

      </div>
    </>
  )
}
