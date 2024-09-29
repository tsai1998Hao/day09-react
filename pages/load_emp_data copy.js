import React from 'react';
import { useEffect, useState } from 'react';
import { FaPen } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import styles from "@/styles/load_emp_data.module.css";

export default function Load_emp_data({send_emp_data}) {
  /*載入所有員工資料*/
  const [employees, setEmployees]=useState([]); 
  /*載入所有員工資料*/


  const [edit_emp_toggle_state, setEdit_emp_toggle_state]=useState(false);




  /*載入所有員工資料*/
  useEffect(()=>{
    fetch('http://localhost/%e5%81%b7%e7%b7%b4/day09/day09_api01.php')
    .then(res=>res.json())
    .then(data=>{
      setEmployees(data);
    })
    .catch(error=>{
      console.error('有錯誤喔!', error)
    })
  },[])
  /*載入所有員工資料*/
  // function toggle_employee_insert(){           
  //   setInsert_emp_toggle_state(!insert_emp_toggle_state)
  // }























  
//傳出編輯資料
  function show_edit_data(id){
    setEdit_emp_toggle_state(!edit_emp_toggle_state);
    console.log(id);
    fetch('http://localhost/%e5%81%b7%e7%b7%b4/day09/day09_api03.php',{
      method:'POST',
      headers:{
          'Content-Type':"application/json"  
      },
      body:JSON.stringify({ 
          "id":id,
      })
    })
    .then(res=>res.json())
    .then(result=>{
      if(send_emp_data){
          send_emp_data(result)
      }
    })
  }


    /*刪除資料-員工*/
    function delete_data(id){
      console.log(id);
      let confirmed=confirm("確定要刪除嗎?");
      if(confirmed){
        fetch('http://localhost/%e5%81%b7%e7%b7%b4/day09/day09_api04.php',{
          method:"POST",
          headers:{
            'Content-Type':"application/json"  
          },
          body:JSON.stringify({
            "id":id,
          })
        })
        /*確認後台有撰寫程式碼來回傳res給前端，就不會報錯
        說回應不符合JSON格式了!*/
        .then(res=>res.json())
        .then(data=>{
          if(data.error){
            console.log(data.error);
          }
          else{
            console.log('刪除資料成功')
            location.reload();
          }
        })
      }
  
    }
    /*刪除資料-員工*/







  return (
    <div>
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
                  <td onClick={()=>delete_data(el.id)}><FaTrash /></td>
                </tr>
              ))}
              </tbody>
            </table>
        </div>
          {/* <!-- 資料顯示-員工清單 --> */}
    </div>
  )
}
