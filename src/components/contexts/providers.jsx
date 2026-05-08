import {useState,useEffect} from 'react'
import {Empdatas} from './mycontext'
import {getEmployeedata} from '../../services/service'





function Providers({children}){
     
const[empdatas,setEmpdatas]=useState([]);

async function getEmpdata(){
     try{
         let res = await getEmployeedata();
         setEmpdatas(res);
     }catch(error){
        console.log(error);
     }
}

useEffect(()=>{
    getEmpdata()
},[])


    return(
       <Empdatas.Provider value={{empdatas,setEmpdatas}}>
              {children}
       </Empdatas.Provider> 
    );
}

export default Providers;