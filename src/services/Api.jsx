import axios from 'axios'



const Api=axios.create({
    baseURL:"/modelDatabase",
    headers:{
        "Content-Type":"application/json",
    }
    
})

export default Api;