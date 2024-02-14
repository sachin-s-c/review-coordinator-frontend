import axios, { AxiosError, AxiosInstance,AxiosRequestConfig } from "axios";
axios.defaults.withCredentials=true


const axiosInstance:AxiosInstance = axios.create({baseURL:'http://localhost:8000'})

axiosInstance.interceptors.request.use((config:any):any=>{

    let token=localStorage.getItem('token')
    if(token){
        config.headers.Authorization=`Bearer ${token}`
    }
    
    

},(error:AxiosError)=>{
    return Promise.reject(error)

})



axiosInstance.interceptors.response.use((respoone:any)=>{


    return respoone
},(error:AxiosError)=>{
    Promise.reject(error)
})
