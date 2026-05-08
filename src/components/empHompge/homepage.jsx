import {useContext,useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import './homepage.css'
import {Empdatas} from '../contexts/mycontext'
import Emplist from './emplist'


function Homepge(){

//contexrt
const{empdatas}=useContext(Empdatas);
//state
const[searchId,setSearchid]=useState('');
const[currentEmpdata,setCurrentempdata]=useState([]);

//useEffect
useEffect(()=>{
 setCurrentempdata(empdatas);
},[empdatas]);

const navigate=useNavigate();


function searchByid(idz){

   let empdata=empdatas;

   let newempdata=empdata.find((value)=>{
          return value.id==idz;
   });
   setCurrentempdata([newempdata]);
  
}

function showActive(){
    let empdata=empdatas;
     let activemp=empdata.filter((value)=>{
            return value.status==="active"
     });
     setCurrentempdata(activemp);
}

function showInActive(){
      let empdata=empdatas;
     let activemp=empdata.filter((value)=>{
            return value.status==="inactive"
     });
     setCurrentempdata(activemp);
}

useEffect(()=>{
   console.log(empdatas);
},[empdatas])
    return(
        <div className="empBox">
           
           <div className="emplist">
                <h1>Employee List</h1>

                {currentEmpdata?.map((value,key)=>{
                    return <Emplist key={key} id={value?.id} name={value?.name} email={value?.email} dept={value?.department} 
                    sal={value?.salary} status={value?.status}/>
                })}
           </div>

           <div className="empOpr">
                <button onClick={()=>{navigate('/setnewemp')}}>add new employee</button>

                <span><span>search</span>
                <input placeholder="employee id" value={searchId} onChange={(e)=>{setSearchid(e.target.value)}}/>
                <button onClick={()=>{searchByid(searchId)}} id="btn2">enter</button></span>

                <button onClick={showActive}>show active employees</button>
                <button onClick={showInActive}>show inactive employees</button>

                  <button onClick={()=>{setCurrentempdata(empdatas)}}>view all employees</button>
           </div>

        </div>
    );
}

export default Homepge;