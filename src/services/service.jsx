import Api from './Api'


export const getEmployeedata=async()=>{
    let res=await Api.get('/empDetails.json');
    return (res).data;
}