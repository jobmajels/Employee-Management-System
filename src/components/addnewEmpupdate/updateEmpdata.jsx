import React,{useContext,useState,useEffect} from 'react'
import './updateEmpdata.css'
import {useParams,useNavigate} from 'react-router-dom'
import {Empdatas} from '../contexts/mycontext'


function Updatempdata(){

    const{empdatas,setEmpdatas}=useContext(Empdatas);
    const{id}=useParams();
   const navigate=useNavigate();

    const[currentData,setCurrentData]=useState({
        id:"",
        name:"",
        email:"",
        department:"",
        salary:"",
        status:"",
    });


     function Onchange(value,key){
     let temp={...currentData};
     temp[key]=value;
     setCurrentData(temp);
    }

    const[currentemail,setCurrentemail]=useState('');

    function setCurrentdata(){
        let empdata=empdatas?.find((value)=>{
           return value.id==id;
        });
        setCurrentData(empdata);
        setCurrentemail(empdata?.email);
    }

    useEffect(()=>{
       setCurrentdata();
    },[empdatas,id])

    useEffect(()=>{
    console.log(currentData);
    },[currentData])

        useEffect(()=>{
    console.log(currentemail);
    },[currentemail])


    const[showErrormsg,setShowErrormsg]=useState(false);

       function uniqueEmail(){
        let maildata = empdatas.find((value)=>{
             return value.email===currentData.email;
        });

         let mail=maildata?.email;

        if(mail && mail!=currentemail){
          setShowErrormsg(true);
        }else{
            let newdatas=empdatas.filter((value)=>{
                     return value.id!=id;
            });
            let temp=[...newdatas,currentData];
            setEmpdatas(temp);
            navigate("/");
        }
    }

    return(
        <div className="updateBox">
            
               <button onClick={()=>{navigate('/')}}>back</button>

            <h3>id: {currentData?.id}</h3>    
            <span>name: <input type="text" placeholder="name" value={currentData?.name} onChange={(e)=>{Onchange(e.target.value,"name")}}/></span>
            <span>email: <input type="email" placeholder="email" value={currentData?.email} onChange={(e)=>{Onchange(e.target.value,"email")}}/></span>
            <span>department:<input type="text" placeholder="department" value={currentData?.department} onChange={(e)=>{Onchange(e.target.value,"department")}}/></span>
            <span>salary: <input type="text" placeholder="salary" value={currentData?.salary} onChange={(e)=>{Onchange(e.target.value,"salary")}}/></span>
            <span>status: <input type="text" placeholder="status" value={currentData?.status} onChange={(e)=>{Onchange(e.target.value,"status")}}/></span>
            <button onClick={uniqueEmail} id="btn5">submit</button>
             
             <br/>
            <div style={{display:showErrormsg?"block":"none",color:"red"}}>email already exist</div>
        </div>
    )
}

export default Updatempdata;