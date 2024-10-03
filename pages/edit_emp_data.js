import React, { useState, useEffect, useCallback } from 'react';
import styles from "@/styles/edit_emp_data.module.css";

export default function Edit_emp_data({ employeeData }) {

  const [id_edit_input_val, setId_edit_input_val]=useState(''); 
  const [account_edit_input_val, setAccount_edit_input_val]=useState(''); 
  const [name_edit_input_val, setName_edit_input_val]=useState(''); 
  const [password_edit_input_val, setPassword_edit_input_val]=useState(''); 
  const [store_edit_input_val, setStore_edit_input_val]=useState(''); 
  const [permission_edit_input_val, setPermission_edit_input_val]=useState(''); 
  const [edit_emp_toggle_state, setEdit_emp_toggle_state] = useState(false);

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







  useEffect(() => {
    if (employeeData) {
      setId_edit_input_val(employeeData.id);
      setAccount_edit_input_val(employeeData.employee_account);
      setName_edit_input_val(employeeData.chinese_name);
      setPassword_edit_input_val(employeeData.employee_password);
      setStore_edit_input_val(employeeData.storeid);
      setPermission_edit_input_val(employeeData.permission_level);
    }
  }, [employeeData]);













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
      console.log(result.id, result.chinese_name, result.employee_account, result.employee_password, result.modification_time, result.permission_level, result.storeid);


      
       setId_edit_input_val(result.id);
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

    const handleChangeEmployee = (newId) => {
      show_edit_data(newId); // Pass the dynamic id to load new employee data
    };


  // const take_emp_data=(dataa)=>{

    // setId_edit_input_val(dataa.id);
    // setAccount_edit_input_val(dataa.employee_account);
    // setName_edit_input_val(dataa.chinese_name);
    // setPassword_edit_input_val(dataa.employee_password);
    // setStore_edit_input_val(dataa.storeid);
    // setPermission_edit_input_val(dataa.permission_level)
  // }

  // const handle_edit_toggle_state = () => {
  //   setEdit_emp_toggle_state(!edit_emp_toggle_state);
  // };


  /*編輯資料-員工*/


  /*顯示編輯視窗-員工*/
  // const [edit_emp_toggle_state, setEdit_emp_toggle_state]=useState(false);
  // const [edit_emp_toggle_state, setEdit_emp_toggle_state]=useState(true);

  /*顯示編輯視窗-員工*/

  // function id_edit(e){
  //   setId_edit_input_val(e.target.value)
  // }

  // function account_edit(e){
  //   setAccount_edit_input_val(e.target.value)
  //   }
  //   function name_edit(e){
  //   setName_edit_input_val(e.target.value)
  //   }
  //   function password_edit(e){
  //     setPassword_edit_input_val(e.target.value)
  //   }
  //   function store_edit(e){
  //     setStore_edit_input_val(e.target.value)
  //   }
  //   function permission_edit(e){
  //     setPermission_edit_input_val(e.target.value)
  //   }
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
              console.log('更新的資料送出成功');
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
    /*編輯資料-員工*/



  return (
    <>
        <div className={styles.eddit_areas}>
          <div className={styles.input_area}>
          
            <div>
              <label >員工id:</label>
              {/* <input onChange={id_edit} value={id_edit_input_val} disabled></input> */}
              <input  value={id_edit_input_val} disabled></input>
            </div>


            <div className={styles.eddit_account}>
              <label htmlFor="label_account">員工帳號:</label>
            </div>
            {/* <input className={styles.input_account} type="text" id="label_account" onChange={account_edit} value={account_edit_input_val}/> */}
            <input onChange={account_edit} className={styles.input_account} type="text" id="label_account" value={account_edit_input_val}/>

            <div className={styles.eddit_name}>
              <label htmlFor="label_name">名稱:</label>
            </div>
            <input onChange={name_edit} className={styles.input_name} type="text" id="label_account" value={name_edit_input_val}/>
            {/* <input className={styles.input_name} type="text" id="label_name" onChange={name_edit} value={name_edit_input_val}/> */}


            <div className={styles.eddit_password}>
              <label htmlFor="label_password">員工密碼:</label>
            </div>
            <input onChange={password_edit} className={styles.input_password} type="text" id="label_account" value={password_edit_input_val}/>
            {/* <input className={styles.input_password} type="text" id="label_password" onChange={password_edit} value={password_edit_input_val}/>*/}


            <div className={styles.eddit_store}>
              <label htmlFor="label_store">隸屬部門:</label>
              <select className={styles.input_store} 

              onChange={store_edit} 

              value={store_edit_input_val}>
                <option value="1">總公司</option>
                <option value="2">技術部</option>
                <option value="3">營業部</option>
                <option value="4">人事部</option>
                <option value="5">研發部</option>
              </select>
              <input value={store_edit_input_val} readOnly/>

            </div>
            <div className={styles.eddit_permission}>
              <label htmlFor="label_permission">權限名稱:</label>
              <select className={styles.input_permission} id="label_permission" 
              
              onChange={permission_edit}
              
               value={permission_edit_input_val}>
                <option value="1">老闆</option>
                <option value="2">主管</option>
                <option value="3">員工</option>
                <option value="4">路人</option>
              </select>
            </div>
            </div>
            <div className={styles.eddit_but_div}>
              <button
              
               onClick={edit_data}
               
               >送出</button>
              {/*<button onclick=toggle_insert()>取消</button> */}
              {/* <button onClick={() => handleChangeEmployee(1)}>Load Employee 1</button>
              <button onClick={() => handleChangeEmployee(2)}>Load Employee 2</button>
              <button onClick={() => handleChangeEmployee(3)}>Load Employee 3</button> */}
            </div>
        </div>
    </>
  )
}
