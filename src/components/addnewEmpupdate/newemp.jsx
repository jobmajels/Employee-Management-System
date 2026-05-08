import React,{useState,useContext,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import './newemp.css'
import {Empdatas} from '../contexts/mycontext'

function Newemp(){

    const{empdatas,setEmpdatas}=useContext(Empdatas);
    const navigate=useNavigate()

    const[newEmpdata,setNewempdata]=useState({
        id:1000+Math.floor(Math.random()*4000),
        name:"",
        email:"",
        department:"",
        salary:"",
        status:"",
    });

    function Onchange(value,key){
     let temp={...newEmpdata};
     temp[key]=value;
     setNewempdata(temp);
    }

    const[showErrormsg,setShowErrormsg]=useState(false);

    function uniqueEmail(){
        let mail = empdatas.find((value)=>{
             return value.email===newEmpdata.email;
        });

        if(mail){
          setShowErrormsg(true);
        }else{
            let temp=[...empdatas,newEmpdata];
            setEmpdatas(temp);
            navigate("/");
        }
    }

    useEffect(()=>{
      console.log(empdatas);
    },[empdatas])


    return(
        <div className="newempBox">
            <button onClick={()=>{navigate("/")}}>back</button>

            <input type="text" placeholder="name" value={newEmpdata.name} onChange={(e)=>{Onchange(e.target.value,"name")}}/>
            <input type="email" placeholder="email" value={newEmpdata.email} onChange={(e)=>{Onchange(e.target.value,"email")}}/>
            <input type="text" placeholder="department" value={newEmpdata.department} onChange={(e)=>{Onchange(e.target.value,"department")}}/>
            <input type="text" placeholder="salary" value={newEmpdata.salary} onChange={(e)=>{Onchange(e.target.value,"salary")}}/>
            <input type="text" placeholder="status ==> active or inactive" value={newEmpdata.status} onChange={(e)=>{Onchange(e.target.value,"status")}}/>

            <button onClick={uniqueEmail} id="btn4">submit</button>

            <div style={{display:showErrormsg?"block":"none",color:"red"}}>email already exist</div>
        </div>
    )
}

export default Newemp;