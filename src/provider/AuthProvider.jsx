import { createContext, useEffect, useState } from "react";
import useAxiosPublic from "../hooks/useAxiosPublic";
import axios from "axios";
import { toast } from "react-toastify";
// import Cookies from 'js-cookie'

export const AuthContext = createContext(null);
// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const axiosPublic = useAxiosPublic();

    useEffect(() => {
        axiosPublic.post('/auth/verify')
            .then(({ data }) => {
                console.log(data.decoded);
                setUser(data.decoded);
                setLoading(false);
            })
    }, [])


    const logoutUser = () => {
        axios.get('/logout')
            .then(({ data }) => {
                if (data.success) {
                    toast.success("Logged out")
                }
            })
    }

    const authInfo = {
        user,
        setUser,
        loading,
        setLoading,
        logoutUser
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;