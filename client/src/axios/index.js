import axios from "axios";

export const userApi=axios.create({
    baseURL:"http://localhost:3001",
    withCredentials:true,
    headers:{
        "token":`${Date.now().toString()}`
    }
})