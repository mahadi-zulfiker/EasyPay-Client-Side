import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from './useAuth';
const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true
})

const useAxiosSecure = () => {
    const {logoutUser} = useAuth()
    const navigate = useNavigate();

    useEffect(()=>{
        axiosSecure.interceptors.response.use(res=>res, err=>{
            if(err.response.status === 401 || err.response.status === 403) {
                logoutUser()
                    .then(()=>{navigate('/login')})
            }
        })
    })

    return axiosSecure;
};

export default useAxiosSecure;