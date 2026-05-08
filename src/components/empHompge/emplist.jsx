import React,{useContext} from 'react'
import './emplist.css'
import {useNavigate} from 'react-router-dom'
import {Empdatas} from '../contexts/mycontext'

function Emplist(props){

    const{
        id,
        name,
        email,
        dept,
        sal,
        status,
    }=props


const navigate = useNavigate()

const{empdatas,setEmpdatas}=useContext(Empdatas);



    function deleteEmp(idz){
         let updatedData=empdatas.map((value)=>{
             if(value.id==idz){
                return {...value,status:"inactive"}
             }
             return value;
         });
         setEmpdatas(updatedData);
    }

    return(
        <div className="emplstbox">
            <button onClick={()=>{deleteEmp(id)}} id="btn1">delete</button>
        <h3>id: {id}</h3>
         <span><span>Name:</span> {name}</span>
         <span><span>Email:</span> {email}</span>
         <span><span>Department:</span> {dept}</span>
         <span><span>Salary:</span> {sal}</span>
         <span><span>Status:</span> {status}</span>
         <br/>
         <button onClick={()=>{navigate(`/updateempdata/${id}`)}}>edit</button>
         <br/>
        </div>
    )
}

export default Emplist;